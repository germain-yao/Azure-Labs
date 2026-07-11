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

type Props = {
    code: string;
    title: string;
    badge: string;
    level: string;
    duration: string;
    questions: number;
};

export default function CertificationCard({
    code,
    title,
    badge,
    level,
    duration,
    questions
}: Props) {

    const chipColor: "success" | "primary" | "secondary" =
        level === "Fundamentals"
            ? "success"
            : level === "Associate"
                ? "primary"
                : "secondary";

    return (

        <Card
            elevation={4}
            sx={{
                height: "100%",
                borderRadius: 4,
                overflow: "hidden",
                transition: "all .30s ease",

                "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 10
                }
            }}
        >

            <CardActionArea sx={{ height: "100%" }}>

                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        p: 3
                    }}
                >

                    {/* Badge Microsoft */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2,

                            "& img": {
                                width: 110,
                                transition: "transform .30s ease"
                            },

                            ".MuiCard-root:hover & img": {
                                transform: "scale(1.08)"
                            }
                        }}
                    >

                        <img
                            src={badge}
                            alt={code}
                        />

                    </Box>

                    {/* Code certification */}

                    <Typography
                        variant="h5"
                        align="center"
                        fontWeight="bold"
                        gutterBottom
                    >
                        {code}
                    </Typography>

                    {/* Niveau */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            mb: 1
                        }}
                    >

                        <Chip
                            label={level}
                            color={chipColor}
                            size="small"
                        />

                    </Box>

                    {/* Nom certification */}

                    <Typography
                        align="center"
                        color="text.secondary"
                        sx={{
                            minHeight: 56,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mb: 2
                        }}
                    >
                        {title}
                    </Typography>

                    {/* Questions + Durée */}

                    <Stack
                        spacing={1}
                        alignItems="center"
                        sx={{ mb: 3 }}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 1,
                                width: "100%"
                            }}
                        >

                            <QuizIcon
                                fontSize="small"
                                color="primary"
                            />

                            <Typography variant="body2">
                                {questions} Questions
                            </Typography>

                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 1,
                                width: "100%"
                            }}
                        >

                            <AccessTimeIcon
                                fontSize="small"
                                color="primary"
                            />

                            <Typography variant="body2">
                                {duration}
                            </Typography>

                        </Box>

                    </Stack>

                    {/* Bouton */}

                    <Box sx={{ mt: "auto" }}>

                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            endIcon={<PlayArrowIcon />}
                        >
                            Commencer
                        </Button>

                    </Box>

                </CardContent>

            </CardActionArea>

        </Card>

    );

}