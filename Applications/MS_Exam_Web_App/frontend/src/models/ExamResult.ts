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

}