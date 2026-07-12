import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Stack,
    Typography
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { certifications } from "../../data/certifications";

type Props = {
    id: string;
};

export default function ExamDetailsCard({
    id
}: Props) {

    const navigate = useNavigate();

    const certification = certifications.find(c => c.id === id);

    if (!certification) {

        return (

            <Typography>
                Certification introuvable.
            </Typography>

        );

    }

    return (

        <Card>

            <CardContent>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 4
                    }}
                >

                    <img
                        src={certification.badge}
                        alt={certification.code}
                        width={140}
                    />

                </Box>

                <Typography
                    variant="h3"
                    align="center"
                >
                    {certification.code}
                </Typography>

                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                >
                    {certification.title}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 4
                    }}
                >

                    <Chip
                        label={certification.level}
                        color="primary"
                    />

                </Box>

                <Stack spacing={2} sx={{ mb: 4 }}>

                    <Typography>

                        <strong>Catégorie :</strong> {certification.category}

                    </Typography>

                    <Typography>

                        <strong>Durée :</strong> {certification.duration}

                    </Typography>

                    <Typography>

                        <strong>Questions :</strong> {certification.questions}

                    </Typography>

                    <Typography>

                        <strong>Score requis :</strong> {certification.passingScore}

                    </Typography>

                </Stack>

                <Typography sx={{ mb: 4 }}>

                    {certification.description}

                </Typography>

                <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    onClick={() => navigate(`/exam-session/${certification.id}`)}
                >
                    Commencer l'examen
                </Button>

            </CardContent>

        </Card>

    );

}