import type { Question } from "../types/question";

export interface ExamResult {

    certification: string;

    total: number;

    answered: number;

    correct: number;

    incorrect: number;

    score: number;

    startedAt: Date;

    finishedAt: Date;

    duration: string;

    /**
     * Questions utilisées pendant l'examen.
     */
    questions: Question[];

    /**
     * Réponses données par l'utilisateur.
     * Clé = questionId
     */
    answers: Record<string, string | string[]>;

}