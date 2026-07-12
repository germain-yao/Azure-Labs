import type { Question } from "../types/question";

export class ExamSession {

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
     * Marque ou retire une question des favoris.
     */
    public toggleMark(questionId: string): void {

        if (this.markedQuestions.has(questionId)) {

            this.markedQuestions.delete(questionId);

        } else {

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
     * Réinitialise complètement la session.
     */
    public reset(): void {

        this.questions = [];

        this.currentQuestion = 0;

        this.answers = {};

        this.markedQuestions.clear();

        this.startedAt = new Date();

        this.finishedAt = undefined;

    }

}