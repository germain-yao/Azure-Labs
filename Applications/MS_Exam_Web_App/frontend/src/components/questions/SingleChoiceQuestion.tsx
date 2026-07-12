import { useState } from "react";

import type { Question } from "../../types/question";

import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";

type Props = {
    question: Question;
};

export default function SingleChoiceQuestion({
    question
}: Props) {

    const [selectedAnswer, setSelectedAnswer] = useState("");

    return (

        <FormControl fullWidth>

            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ mb: 4 }}
            >
                {question.question}
            </Typography>

            <RadioGroup
                value={selectedAnswer}
                onChange={(event) =>
                    setSelectedAnswer(event.target.value)
                }
            >

                {question.answers?.map((answer) => (

                    <FormControlLabel
                        key={answer.id}
                        value={answer.id}
                        control={<Radio />}
                        label={answer.text}
                    />

                ))}

            </RadioGroup>

        </FormControl>

    );

}