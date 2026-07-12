import { useState } from "react";
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

import sc300Questions from "../../data/questions/sc-300.json";

export default function ExamSession() {

    const { id } = useParams();

    // Plus tard nous chargerons les questions selon la certification
    const questions = sc300Questions;

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [finishDialogOpen, setFinishDialogOpen] = useState(false);

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    const handleNext = () => {

        if (currentQuestion < questions.length - 1) {

            setCurrentQuestion(currentQuestion + 1);

        } else {

            setFinishDialogOpen(true);

        }

    };

    const handlePrevious = () => {

        if (currentQuestion > 0) {

            setCurrentQuestion(currentQuestion - 1);

        }

    };

    const handleFinishExam = () => {

        setFinishDialogOpen(false);

        alert("🎉 Ici nous calculerons bientôt le score.");

    };

    return (

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
                Question {currentQuestion + 1} / {questions.length}
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
                    question={questions[currentQuestion]}
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
                    disabled={currentQuestion === 0}
                    onClick={handlePrevious}
                >
                    Précédent
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                >
                    {currentQuestion === questions.length - 1
                        ? "Terminer l'examen"
                        : "Suivant"}
                </Button>

            </Box>

            <ExamFinishDialog
                open={finishDialogOpen}
                answered={questions.length}
                total={questions.length}
                onCancel={() => setFinishDialogOpen(false)}
                onConfirm={handleFinishExam}
            />

        </Container>

    );

}