import {
    Box,
    Divider,
    Paper,
    Typography
} from "@mui/material";

import type { Question } from "../../types/question";

import ReviewAnswer from "./ReviewAnswer";

type Props = {

    question: Question;

    userAnswer: string | string[] | undefined;

};

export default function ReviewQuestion({

    question,

    userAnswer

}: Props) {

    const safeUserAnswer =

        userAnswer === undefined

            ? ""

            : userAnswer;

    const selectedAnswers =

        Array.isArray(safeUserAnswer)

            ? safeUserAnswer

            : [safeUserAnswer];

    const correctAnswers =

        Array.isArray(question.correctAnswer)

            ? question.correctAnswer

            : question.correctAnswer

                ? [question.correctAnswer]

                : [];

    const getAnswerStatus = (

        answerId: string

    ) => {

        const isSelected =
            selectedAnswers.includes(answerId);

        const isCorrect =
            correctAnswers.includes(answerId);

        if (isCorrect) {

            return "correct";

        }

        if (isSelected && !isCorrect) {

            return "incorrect";

        }

        return "neutral";

    };

    return (

        <>

            <Typography
                variant="h5"
                sx={{
                    fontWeight: "bold"
                }}
            >

                {question.question}

            </Typography>

            <Divider
                sx={{ my: 3 }}
            />

            {

                question.answers &&
                question.answers.length > 0 && (

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2
                        }}
                    >

                        {

                            question.answers.map(
                                (answer, index) => {

                                    const status =
                                        getAnswerStatus(
                                            answer.id
                                        );

                                    return (

                                        <Paper
                                            key={answer.id}
                                            variant="outlined"
                                            sx={{
                                                p: 2.5,
                                                borderRadius: 2,
                                                borderWidth: 2,

                                                borderColor:
                                                    status === "correct"
                                                        ? "success.main"
                                                        : status === "incorrect"
                                                            ? "error.main"
                                                            : "divider",

                                                backgroundColor:
                                                    status === "correct"
                                                        ? "success.50"
                                                        : status === "incorrect"
                                                            ? "error.50"
                                                            : "background.paper"
                                            }}
                                        >

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: 2
                                                }}
                                            >

                                                <Typography
                                                    sx={{
                                                        minWidth: 32,
                                                        fontWeight: "bold"
                                                    }}
                                                >

                                                    {
                                                        String.fromCharCode(
                                                            65 + index
                                                        )
                                                    }.

                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        flex: 1
                                                    }}
                                                >

                                                    {answer.text}

                                                </Typography>

                                                {
                                                    status === "correct" && (

                                                        <Typography
                                                            sx={{
                                                                color: "success.main",
                                                                fontWeight: "bold"
                                                            }}
                                                        >

                                                            ✓

                                                        </Typography>

                                                    )
                                                }

                                                {
                                                    status === "incorrect" && (

                                                        <Typography
                                                            sx={{
                                                                color: "error.main",
                                                                fontWeight: "bold"
                                                            }}
                                                        >

                                                            ✕

                                                        </Typography>

                                                    )
                                                }

                                            </Box>

                                        </Paper>

                                    );

                                }

                            )

                        }

                    </Box>

                )

            }

            <Divider
                sx={{ my: 4 }}
            />

            <ReviewAnswer
                question={question}
                userAnswer={safeUserAnswer}
            />

        </>

    );

}