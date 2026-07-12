import type { Question } from "../../types/question";

import SingleChoiceQuestion from "./SingleChoiceQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import DragDropQuestion from "./DragDropQuestion";
import TableQuestion from "./TableQuestion";
import CaseStudyQuestion from "./CaseStudyQuestion";

type Props = {

    question: Question;

};

export default function QuestionRenderer({

    question

}: Props) {

    switch (question.type) {

        case "singleChoice":

            return <SingleChoiceQuestion question={question} />;

        case "multipleChoice":

            return <MultipleChoiceQuestion question={question} />;

        case "dragDrop":

            return <DragDropQuestion question={question} />;

        case "table":

            return <TableQuestion question={question} />;

        case "caseStudy":

            return <CaseStudyQuestion question={question} />;

        default:

            return null;

    }

}