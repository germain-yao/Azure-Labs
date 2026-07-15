import type { Question } from "../types/question";

export class ExamSession {

    /**
     * Certification en cours.
     */
    public certification = "";

    /**
     * Questions de l'examen.
     */
    public questions: Question[] = [];

    /**
     * Index de la question courante.
     */
    public currentQuestion = 0;

    /**
     * Réponses de l'utilisateur.
     * Clé = questionId
     */
    public answers: Record<string, string | string[]> = {};

    /**
     * Questions marquées pour révision.
     */
    public markedQuestions = new Set<string>();

    /**
     * Date de début.
     */
    public startedAt = new Date();

    /**
     * Date de fin.
     */
    public finishedAt?: Date;

    /**
     * Marque ou retire une question.
     */
    public toggleMark(questionId: string): void {

        if (this.markedQuestions.has(questionId)) {

            this.markedQuestions.delete(questionId);

        }
        else {

            this.markedQuestions.add(questionId);

        }

    }

    /**
     * Vérifie si une question possède une réponse.
     */
    public isAnswered(questionId: string): boolean {

        return questionId in this.answers;

    }

    /**
     * Vérifie si une question est marquée.
     */
    public isMarked(questionId: string): boolean {

        return this.markedQuestions.has(questionId);

    }

    /**
     * Nombre de réponses.
     */
    public getAnsweredCount(): number {

        return Object.keys(this.answers).length;

    }

    /**
     * Pourcentage de progression.
     */
    public getProgress(): number {

        if (this.questions.length === 0) {

            return 0;

        }

        return Math.round(

            ((this.currentQuestion + 1) / this.questions.length) * 100

        );

    }

    /**
     * Réinitialise complètement la session.
     */
    public reset(): void {

        this.certification = "";

        this.questions = [];

        this.currentQuestion = 0;

        this.answers = {};

        this.markedQuestions.clear();

        this.startedAt = new Date();

        this.finishedAt = undefined;

    }

}