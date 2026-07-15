import { ExamLoader } from "./ExamLoader";
import { QuestionRandomizer } from "./QuestionRandomizer";
import { ExamSession } from "./ExamSession";
import { ResultCalculator } from "./ResultCalculator";

export class ExamEngine {

    private loader = new ExamLoader();

    private randomizer = new QuestionRandomizer();

    private calculator = new ResultCalculator();

    private session = new ExamSession();

    public start(
        certification: string,
        numberOfQuestions: number
    ): ExamSession {

        const questions = this.loader.load(certification);

        this.session.reset();

        this.session.certification = certification;

        this.session.questions =
            this.randomizer.take(
                questions,
                numberOfQuestions
            );

        this.session.startedAt = new Date();

        return this.session;

    }

    public answer(
        questionId: string,
        answer: string | string[]
    ): void {

        this.session.answers[questionId] = answer;

    }

    public getAnswer(
        questionId: string
    ): string | string[] | undefined {

        return this.session.answers[questionId];

    }

    public hasAnswer(
        questionId: string
    ): boolean {

        return questionId in this.session.answers;

    }

    public next(): void {

        if (

            this.session.currentQuestion <

            this.session.questions.length - 1

        ) {

            this.session.currentQuestion++;

        }

    }

    public previous(): void {

        if (

            this.session.currentQuestion > 0

        ) {

            this.session.currentQuestion--;

        }

    }

    public getCurrentQuestion() {

        return this.session.questions[
            this.session.currentQuestion
        ];

    }

    public getProgress(): number {

        return Math.round(

            (

                (this.session.currentQuestion + 1)

                /

                this.session.questions.length

            ) * 100

        );

    }

    public finish() {

        this.session.finishedAt = new Date();

        return this.calculator.calculate(

            this.session.certification,

            this.session.questions,

            this.session.answers,

            this.session.startedAt,

            this.session.finishedAt

        );

    }

    public getSession(): ExamSession {

        return this.session;

    }

}