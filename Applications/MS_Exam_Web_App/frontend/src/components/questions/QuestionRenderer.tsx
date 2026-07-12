import type { Question } from "../../types/question";

import SingleChoiceQuestion from "./SingleChoiceQuestion";

type Props = {

    question: Question;

};

export default function QuestionRenderer({

    question

}: Props) {

    switch (question.type) {

        case "singleChoice":

            return (

                <SingleChoiceQuestion

                    question={question}

                />

            );

        default:

            return (

                <div>

                    Type non supporté : {question.type}

                </div>

            );

    }

}