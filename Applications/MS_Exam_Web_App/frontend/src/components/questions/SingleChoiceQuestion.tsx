import { useContext, useEffect, useState } from "react";

import type { Question } from "../../types/question";

import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";

import { ExamContext } from "../../contexts/ExamContext";

type Props = {
    question: Question;
};

export default function SingleChoiceQuestion({
    question
}: Props) {

    const engine = useContext(ExamContext);

    const [selectedAnswer, setSelectedAnswer] = useState("");

    useEffect(() => {

        const session = engine?.getSession();

        const previousAnswer =
            session?.answers[question.id];

        if (typeof previousAnswer === "string") {

            setSelectedAnswer(previousAnswer);

        } else {

            setSelectedAnswer("");

        }

    }, [question.id, engine]);

    const handleChange = (value: string) => {

        setSelectedAnswer(value);

        engine?.answer(question.id, value);

        console.log(
            "Réponse enregistrée :",
            question.id,
            value
        );

    };

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
                    handleChange(event.target.value)
                }
            >

                {question.answers.map(answer => (

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