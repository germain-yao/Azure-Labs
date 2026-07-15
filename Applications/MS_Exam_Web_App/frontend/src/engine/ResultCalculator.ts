import type { Question } from "../types/question";
import type { ExamResult } from "../models/ExamResult";

export class ResultCalculator {

    public calculate(

        certification: string,

        questions: Question[],

        answers: Record<string, string | string[]>,

        startedAt: Date,

        finishedAt: Date

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

        const total = questions.length;

        const answered = Object.keys(answers).length;

        const incorrect = total - correct;

        const score = Math.round(

            (correct / total) * 100

        );

        const durationMs =

            finishedAt.getTime() -

            startedAt.getTime();

        const hours = Math.floor(durationMs / 3600000);

        const minutes = Math.floor(

            (durationMs % 3600000) / 60000

        );

        const seconds = Math.floor(

            (durationMs % 60000) / 1000

        );

        const duration =

            `${hours.toString().padStart(2, "0")}:` +

            `${minutes.toString().padStart(2, "0")}:` +

            `${seconds.toString().padStart(2, "0")}`;

        return {

            certification,

            total,

            answered,

            correct,

            incorrect,

            score,

            startedAt,

            finishedAt,

            duration

        };

    }

}