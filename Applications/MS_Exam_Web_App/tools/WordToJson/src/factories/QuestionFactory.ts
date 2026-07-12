import { Answer } from "../models/Answer";
import { Question } from "../models/Question";
import { QuestionType } from "../classifiers/QuestionClassifier";

export interface CreateQuestionOptions {

    id: string;

    certificationId: string;

    number?: number;

    title?: string;

    topic?: string;

    type: QuestionType;

    question: string;

    answers: Answer[];

    correctAnswer: string | string[];

    explanation?: string;

    image?: string;

    hasTable?: boolean;

    hasImage?: boolean;

    hasAttachment?: boolean;

    difficulty?: "Easy" | "Medium" | "Hard";

    estimatedTime?: number;

    tags?: string[];

}

export class QuestionFactory {

    public create(options: CreateQuestionOptions): Question {

        return {

            id: options.id,

            certificationId: options.certificationId,

            number: options.number,

            title: options.title,

            topic: options.topic,

            type: options.type,

            question: options.question,

            answers: options.answers,

            correctAnswer: options.correctAnswer,

            explanation: options.explanation ?? "",

            image: options.image,

            hasTable: options.hasTable ?? false,

            hasImage: options.hasImage ?? false,

            hasAttachment: options.hasAttachment ?? false,

            difficulty: options.difficulty,

            estimatedTime: options.estimatedTime,

            tags: options.tags ?? []

        };

    }

}