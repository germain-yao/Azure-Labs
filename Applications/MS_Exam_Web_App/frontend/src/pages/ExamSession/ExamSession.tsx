import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import {
    Box,
    Button,
    Container,
    LinearProgress,
    Paper,
    Typography
} from "@mui/material";

import QuestionRenderer from "../../components/questions/QuestionRenderer";
import ExamFinishDialog from "../../components/exam/ExamFinishDialog";

import { ExamEngine } from "../../engine/ExamEngine";
import { ExamSession as EngineSession } from "../../engine/ExamSession";

import { ExamContext } from "../../contexts/ExamContext";

export default function ExamSession() {

    const { id } = useParams();

    const engine = useRef(new ExamEngine());

    const [session, setSession] =
        useState<EngineSession | null>(null);

    const [finishDialogOpen, setFinishDialogOpen] =
        useState(false);

    useEffect(() => {

        const startedSession = engine.current.start(

            id ?? "sc-300",

            60

        );

        setSession({ ...startedSession });

    }, [id]);

    if (!session) {

        return null;

    }

    const currentQuestion =
        engine.current.getCurrentQuestion();

    const progress =
        engine.current.getProgress();

    const handleNext = () => {

        if (

            session.currentQuestion <

            session.questions.length - 1

        ) {

            engine.current.next();

            setSession({

                ...engine.current.getSession()

            });

        }

        else {

            setFinishDialogOpen(true);

        }

    };

    const handlePrevious = () => {

        engine.current.previous();

        setSession({

            ...engine.current.getSession()

        });

    };

    const handleFinishExam = () => {

        setFinishDialogOpen(false);

        const result =
            engine.current.finish();

        alert(

            `Score : ${result.score}%`

        );

    };

    return (

        <ExamContext.Provider value={engine.current}>

            <Container
                maxWidth="md"
                sx={{ py: 5 }}
            >

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                >

                    {id?.toUpperCase()} Exam

                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{ mb: 2 }}
                >

                    Question {session.currentQuestion + 1}
                    {" / "}
                    {session.questions.length}

                </Typography>

                <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{
                        mb: 4,
                        height: 10,
                        borderRadius: 5
                    }}
                />

                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        borderRadius: 3
                    }}
                >

                    <QuestionRenderer
                        question={currentQuestion}
                    />

                </Paper>

                <Box

                    sx={{

                        display: "flex",

                        justifyContent: "space-between",

                        mt: 4

                    }}

                >

                    <Button

                        variant="outlined"

                        disabled={

                            session.currentQuestion === 0

                        }

                        onClick={handlePrevious}

                    >

                        Précédent

                    </Button>

                    <Button

                        variant="contained"

                        onClick={handleNext}

                    >

                        {

                            session.currentQuestion ===

                            session.questions.length - 1

                                ? "Terminer"

                                : "Suivant"

                        }

                    </Button>

                </Box>

                <ExamFinishDialog

                    open={finishDialogOpen}

                    answered={

                        Object.keys(session.answers).length

                    }

                    total={

                        session.questions.length

                    }

                    onCancel={() =>

                        setFinishDialogOpen(false)

                    }

                    onConfirm={handleFinishExam}

                />

            </Container>

        </ExamContext.Provider>

    );

}