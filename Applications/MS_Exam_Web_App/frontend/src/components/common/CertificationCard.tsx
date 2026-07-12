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

type Props = {
    certification: Certification;
};

export default function CertificationCard({
    certification
}: Props) {

    const chipColor =
        certification.level === "Fundamentals"
            ? "success"
            : certification.level === "Associate"
                ? "primary"
                : "secondary";

    return (

        <Card
            elevation={4}
            sx={{
                height: "100%",
                borderRadius: 4,
                overflow: "hidden",
                transition: ".3s",

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

                    <Box
                        display="flex"
                        justifyContent="center"
                        mb={2}
                    >

                        <img
                            src={certification.badge}
                            alt={certification.code}
                            width={110}
                        />

                    </Box>

                    <Typography
                        variant="h5"
                        align="center"
                        fontWeight="bold"
                        gutterBottom
                    >
                        {certification.code}
                    </Typography>

                    <Box
                        display="flex"
                        justifyContent="center"
                        mb={2}
                    >

                        <Chip
                            label={certification.level}
                            color={chipColor}
                            size="small"
                        />

                    </Box>

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

                    <Stack
                        spacing={1}
                        alignItems="center"
                        sx={{ mb: 3 }}
                    >

                        <Box
                            display="flex"
                            gap={1}
                            alignItems="center"
                        >

                            <QuizIcon
                                fontSize="small"
                                color="primary"
                            />

                            <Typography variant="body2">
                                {certification.questions} Questions
                            </Typography>

                        </Box>

                        <Box
                            display="flex"
                            gap={1}
                            alignItems="center"
                        >

                            <AccessTimeIcon
                                fontSize="small"
                                color="primary"
                            />

                            <Typography variant="body2">
                                {certification.duration}
                            </Typography>

                        </Box>

                    </Stack>

                    <Box mt="auto">

                        <Button
                            fullWidth
                            variant="contained"
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