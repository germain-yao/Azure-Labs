import {
    Alert,
    Box,
    Chip,
    Divider,
    Paper,
    Stack,
    Typography
} from "@mui/material";

import type { Question } from "../../types/question";

type Props = {

    question: Question;

    userAnswer: string | string[];

};

export default function ReviewAnswer({

    question,

    userAnswer

}: Props) {

    const hasAnswer =

        Array.isArray(userAnswer)

            ? userAnswer.length > 0

            : userAnswer.trim() !== "";

    const correct =

        hasAnswer &&

        JSON.stringify(userAnswer) ===

        JSON.stringify(question.correctAnswer);

    const findAnswerText = (

        answer: string | string[] | undefined

    ): string => {

        if (

            answer === undefined ||

            (Array.isArray(answer) && answer.length === 0) ||

            (!Array.isArray(answer) && answer.trim() === "")

        ) {

            return "Aucune réponse";

        }

        if (Array.isArray(answer)) {

            return answer

                .map(id => {

                    const found =
                        question.answers?.find(
                            a => a.id === id
                        );

                    return found?.text ?? id;

                })

                .join(", ");

        }

        const found =
            question.answers?.find(
                a => a.id === answer
            );

        return found?.text ?? answer;

    };

    const alertSeverity =

        !hasAnswer

            ? "info"

            : correct

                ? "success"

                : "error";

    const alertMessage =

        !hasAnswer

            ? "Aucune réponse."

            : correct

                ? "Bonne réponse."

                : "Réponse incorrecte.";

    const userAnswerColor =

        !hasAnswer

            ? "default"

            : correct

                ? "success"

                : "error";

    return (

        <Stack spacing={3}>

            <Alert
                severity={alertSeverity}
            >

                {alertMessage}

            </Alert>

            <Paper
                variant="outlined"
                sx={{ p: 3 }}
            >

                <Typography
                    sx={{
                        fontWeight: "bold"
                    }}
                    gutterBottom
                >

                    Votre réponse

                </Typography>

                <Chip

                    label={
                        findAnswerText(userAnswer)
                    }

                    color={userAnswerColor}

                />

            </Paper>

            <Paper
                variant="outlined"
                sx={{ p: 3 }}
            >

                <Typography
                    sx={{
                        fontWeight: "bold"
                    }}
                    gutterBottom
                >

                    Bonne réponse

                </Typography>

                <Chip

                    label={
                        findAnswerText(
                            question.correctAnswer
                        )
                    }

                    color="success"

                />

            </Paper>

            <Divider />

            <Box>

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold"
                    }}
                    gutterBottom
                >

                    Explication

                </Typography>

                <Typography>

                    {question.explanation
                        ? question.explanation
                        : "Aucune explication disponible."}

                </Typography>

            </Box>

        </Stack>

    );

}