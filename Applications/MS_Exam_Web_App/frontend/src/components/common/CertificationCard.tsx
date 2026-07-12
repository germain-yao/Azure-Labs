import type { Certification } from "../../types/certification";

import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Stack,
    Typography
} from "@mui/material";

import QuizIcon from "@mui/icons-material/Quiz";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { useNavigate } from "react-router-dom";

type Props = {
    certification: Certification;
};

export default function CertificationCard({
    certification
}: Props) {

    const navigate = useNavigate();

    const chipColor: "success" | "primary" | "secondary" =
        certification.level === "Fundamentals"
            ? "success"
            : certification.level === "Associate"
                ? "primary"
                : "secondary";

    const handleOpenCertification = () => {
        navigate(`/exam/${certification.id}`);
    };

    return (

        <Card
            elevation={4}
            sx={{
                height: "100%",
                borderRadius: 4,
                overflow: "hidden",
                transition: "0.3s",

                "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 10
                }
            }}
        >

            <CardActionArea
                sx={{ height: "100%" }}
                onClick={handleOpenCertification}
            >

                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        p: 3
                    }}
                >

                    {/* Badge */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2
                        }}
                    >

                        <Box
                            component="img"
                            src={certification.badge}
                            alt={certification.code}
                            sx={{
                                width: 110
                            }}
                        />

                    </Box>

                    {/* Code */}

                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: "bold"
                        }}
                    >
                        {certification.code}
                    </Typography>

                    {/* Niveau */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2
                        }}
                    >

                        <Chip
                            label={certification.level}
                            color={chipColor}
                            size="small"
                        />

                    </Box>

                    {/* Titre */}

                    <Typography
                        align="center"
                        color="text.secondary"
                        sx={{
                            minHeight: 56,
                            mb: 3
                        }}
                    >
                        {certification.title}
                    </Typography>

                    {/* Informations */}

                    <Stack
                        spacing={1}
                        sx={{
                            mb: 3,
                            alignItems: "center"
                        }}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            }}
                        >

                            <QuizIcon
                                color="primary"
                                fontSize="small"
                            />

                            <Typography variant="body2">
                                {certification.questions} Questions
                            </Typography>

                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            }}
                        >

                            <AccessTimeIcon
                                color="primary"
                                fontSize="small"
                            />

                            <Typography variant="body2">
                                {certification.duration}
                            </Typography>

                        </Box>

                    </Stack>

                    {/* Bouton */}

                    <Box
                        sx={{
                            mt: "auto"
                        }}
                    >

                        <Button
                            fullWidth
                            variant="contained"
                            endIcon={<PlayArrowIcon />}
                            onClick={(event) => {
                                event.stopPropagation();
                                handleOpenCertification();
                            }}
                        >
                            Commencer
                        </Button>

                    </Box>

                </CardContent>

            </CardActionArea>

        </Card>

    );

}