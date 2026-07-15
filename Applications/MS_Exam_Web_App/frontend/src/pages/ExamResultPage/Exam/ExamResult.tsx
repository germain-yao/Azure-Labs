import { useLocation, useNavigate } from "react-router-dom";

import {
    Box,
    Button,
    Container,
    Paper,
    Typography
} from "@mui/material";

export default function ExamResult() {

    const navigate = useNavigate();

    const { state } = useLocation();

    const result = state ?? {

        certification: "SC-300",

        score: 0,

        goodAnswers: 0,

        wrongAnswers: 0,

        answered: 0,

        total: 0,

        duration: "00:00:00"

    };

    return (

        <Container
            maxWidth="md"
            sx={{ py: 6 }}
        >

            <Paper
                elevation={4}
                sx={{
                    p: 5,
                    borderRadius: 3
                }}
            >

                <Typography
                    variant="h3"
                    fontWeight="bold"
                    gutterBottom
                >
                    Examen terminé
                </Typography>

                <Typography
                    variant="h5"
                    color="primary"
                    gutterBottom
                >
                    {result.certification}
                </Typography>

                <Box sx={{ mt: 4 }}>

                    <Typography variant="h6">
                        Score : <strong>{result.score}%</strong>
                    </Typography>

                    <Typography variant="h6">
                        Bonnes réponses : {result.goodAnswers}
                    </Typography>

                    <Typography variant="h6">
                        Mauvaises réponses : {result.wrongAnswers}
                    </Typography>

                    <Typography variant="h6">
                        Questions répondues : {result.answered} / {result.total}
                    </Typography>

                    <Typography variant="h6">
                        Temps : {result.duration}
                    </Typography>

                </Box>

                <Box
                    sx={{
                        mt: 5,
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2
                    }}
                >

                    <Button
                        variant="outlined"
                        onClick={() => navigate("/exams")}
                    >
                        Retour aux examens
                    </Button>

                    <Button
                        variant="contained"
                        onClick={() => navigate(-1)}
                    >
                        Revoir les réponses
                    </Button>

                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => navigate(`/exam-session/${result.certification.toLowerCase()}`)}
                    >
                        Recommencer
                    </Button>

                </Box>

            </Paper>

        </Container>

    );

}