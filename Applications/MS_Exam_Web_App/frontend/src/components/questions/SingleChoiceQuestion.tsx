import { useEffect, useState } from "react";

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

    useEffect(() => {

        setSelectedAnswer("");

    }, [question.id]);

    const handleChange = (

        value: string

    ) => {

        setSelectedAnswer(value);

        console.log(

            "Réponse sélectionnée :",

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