import type { Question } from "../types/question";

export class QuestionRandomizer {

    public shuffle(questions: Question[]): Question[] {

        const copy = [...questions];

        for (let i = copy.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [copy[i], copy[j]] = [copy[j], copy[i]];

        }

        return copy;

    }

    public take(

        questions: Question[],

        count: number

    ): Question[] {

        return this.shuffle(questions).slice(0, count);

    }

}