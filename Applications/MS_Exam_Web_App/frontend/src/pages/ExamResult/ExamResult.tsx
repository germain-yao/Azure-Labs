import { useLocation, useNavigate } from "react-router-dom";

import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography
} from "@mui/material";

import type { ExamResult } from "../../models/ExamResult";

export default function ExamResult() {

    const navigate = useNavigate();

    const { state } = useLocation();

    const result = state as ExamResult;

    if (!result) {

        return (

            <Container sx={{ mt: 8 }}>

                <Typography variant="h4">

                    Aucun résultat disponible.

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

    return (

        <Container
            maxWidth="md"
            sx={{ mt: 6 }}
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
                >

                    {result.certification}

                </Typography>

                <Stack
                    spacing={2}
                    sx={{ mt: 5 }}
                >

                    <Typography variant="h6">

                        Score : {result.score} %

                    </Typography>

                    <Typography variant="h6">

                        Bonnes réponses : {result.correct}

                    </Typography>

                    <Typography variant="h6">

                        Mauvaises réponses : {result.incorrect}

                    </Typography>

                    <Typography variant="h6">

                        Questions répondues :

                        {" "}

                        {result.answered}

                        /

                        {result.total}

                    </Typography>

                    <Typography variant="h6">

                        Temps :

                        {" "}

                        {result.duration}

                    </Typography>

                </Stack>

                <Box

                    sx={{

                        mt: 6,

                        display: "flex",

                        justifyContent: "space-between",

                        gap: 2

                    }}

                >

                    <Button

                        variant="outlined"

                        onClick={() => navigate("/exams")}

                    >

                        Retour au catalogue

                    </Button>

                    <Button

                        variant="contained"

                        onClick={() =>

                            navigate(

                                `/exam-session/${result.certification.toLowerCase()}`

                            )

                        }

                    >

                        Recommencer

                    </Button>

                </Box>

            </Paper>

        </Container>

    );

}