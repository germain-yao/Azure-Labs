import {
    Box,
    Typography,
    Button,
    Stack
} from "@mui/material";

import { Link } from "react-router-dom";

export default function HeroBanner() {

    return (

        <Box
            sx={{
                py: 5,
                textAlign: "center"
            }}
        >

            <Typography
                variant="h2"
                fontWeight="bold"
                gutterBottom
            >

                MS Exam Web App

            </Typography>

            <Typography
                variant="h5"
                color="text.secondary"
                gutterBottom
            >

                Préparez vos certifications Microsoft Azure

            </Typography>

            <Typography
                sx={{
                    mt: 2,
                    mb: 5
                }}
            >

                Entraînez-vous dans des conditions proches des examens Microsoft.

            </Typography>

            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
            >

                <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/exams"
                >

                    Commencer un examen

                </Button>

                <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    to="/exams"
                >

                    Voir les certifications

                </Button>

            </Stack>

        </Box>

    );

}