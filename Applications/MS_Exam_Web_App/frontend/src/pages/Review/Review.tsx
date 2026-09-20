import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
    Box,
    Button,
    Container,
    Paper,
    Typography
} from "@mui/material";

import type { ExamResult } from "../../models/ExamResult";

import ReviewNavigation from "./ReviewNavigation";
import ReviewQuestion from "./ReviewQuestion";

export default function Review() {

    const navigate = useNavigate();

    const { state } = useLocation();

    const result = state as ExamResult;

    if (!result) {

        return (

            <Container sx={{ mt: 8 }}>

                <Typography variant="h4">

                    Aucune correction disponible.

                </Typography>

                <Button

                    sx={{ mt: 3 }}

                    variant="contained"

                    onClick={() => navigate("/exams")}

                >

                    Retour au catalogue

                </Button>

            </Container>

        );

    }

    const [currentQuestion, setCurrentQuestion] =
        useState(0);

    const question =
        result.questions[currentQuestion];

    return (

        <Container
            maxWidth="lg"
            sx={{ mt: 6 }}
        >

            <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
            >

                Correction de l'examen

            </Typography>

            <Typography
                color="text.secondary"
                sx={{ mb: 3 }}
            >

                Question {currentQuestion + 1} / {result.questions.length}

            </Typography>

            <ReviewNavigation

                current={currentQuestion}

                total={result.questions.length}

                onSelect={setCurrentQuestion}

            />

            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    borderRadius: 3
                }}
            >

                <ReviewQuestion

                    question={question}

                    userAnswer={
                        result.answers[
                            question.id
                        ]
                    }

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
                        currentQuestion === 0
                    }

                    onClick={() =>
                        setCurrentQuestion(
                            currentQuestion - 1
                        )
                    }

                >

                    Précédente

                </Button>

                <Button

                    variant="outlined"

                    onClick={() =>
                        navigate(
                            "/exam-result",
                            {
                                state: result
                            }
                        )
                    }

                >

                    Retour aux résultats

                </Button>

                <Button

                    variant="contained"

                    disabled={
                        currentQuestion ===
                        result.questions.length - 1
                    }

                    onClick={() =>
                        setCurrentQuestion(
                            currentQuestion + 1
                        )
                    }

                >

                    Suivante

                </Button>

            </Box>

        </Container>

    );

}