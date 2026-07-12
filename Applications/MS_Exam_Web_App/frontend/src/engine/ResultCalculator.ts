import type { Question } from "../types/question";

export interface ExamResult {

    total: number;

    correct: number;

    incorrect: number;

    score: number;

}

export class ResultCalculator {

    public calculate(

        questions: Question[],

        answers: Record<string, string | string[]>

    ): ExamResult {

        let correct = 0;

        questions.forEach(question => {

            const userAnswer = answers[question.id];

            if (

                JSON.stringify(userAnswer) ===

                JSON.stringify(question.correctAnswer)

            ) {

                correct++;

            }

        });

        return {

            total: questions.length,

            correct,

            incorrect: questions.length - correct,

            score: Math.round(

                (correct / questions.length) * 100

            )

        };

    }

}