import { Answer } from "./Answer";

export interface Question {

    id: string;

    certificationId: string;

    title?: string;

    type: string;

    question: string;

    answers: Answer[];

    correctAnswer: string | string[];

    explanation?: string;

    tags?: string[];

}