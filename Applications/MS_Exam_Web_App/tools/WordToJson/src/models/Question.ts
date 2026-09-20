import { Answer } from "./Answer";
import { QuestionType } from "../classifiers/QuestionClassifier";

/**
 * Représente une question Microsoft Certification.
 */
export interface Question {

    /**
     * Identifiant unique.
     * Exemple : question-125
     */
    id: string;

    /**
     * Certification.
     * Exemple : SC-300
     */
    certificationId: string;

    /**
     * Numéro de la question dans le document.
     */
    number?: number;

    /**
     * Titre (Case Study).
     */
    title?: string;

    /**
     * Type de question.
     */
    type: QuestionType;

    /**
     * Sujet Microsoft.
     * Exemple : Question Set 2
     */
    topic?: string;

    /**
     * Texte de la question.
     */
    question: string;

    /**
     * Liste des réponses proposées.
     */
    answers: Answer[];

    /**
     * Bonne(s) réponse(s).
     *
     * SingleChoice :
     * "A"
     *
     * MultipleChoice :
     * ["A","C"]
     */
    correctAnswer: string | string[];

    /**
     * Explication.
     */
    explanation?: string;

    /**
     * Image associée.
     */
    image?: string;

    /**
     * La question possède un tableau.
     */
    hasTable?: boolean;

    /**
     * La question possède une image.
     */
    hasImage?: boolean;

    /**
     * La question possède une pièce jointe.
     */
    hasAttachment?: boolean;

    /**
     * Temps conseillé.
     */
    estimatedTime?: number;

    /**
     * Difficulté.
     */
    difficulty?: "Easy" | "Medium" | "Hard";

    /**
     * Tags.
     */
    tags?: string[];

}