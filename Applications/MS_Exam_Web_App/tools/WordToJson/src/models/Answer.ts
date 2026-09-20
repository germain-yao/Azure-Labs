/**
 * Représente une réponse ou un élément de réponse.
 */
export interface Answer {

    /**
     * Identifiant de la réponse.
     * Exemples :
     * A
     * B
     * C
     * D
     * E
     * item-1
     */
    id: string;

    /**
     * Texte affiché.
     */
    text: string;

    /**
     * Ordre d'affichage.
     * Utilisé pour Drag & Drop, Matching et Build List.
     */
    order?: number;

    /**
     * Indique si cette réponse est correcte.
     * Utilisé principalement dans les résultats.
     */
    isCorrect?: boolean;

    /**
     * Image éventuelle associée à la réponse.
     */
    image?: string;

    /**
     * Valeur utilisée pour les associations
     * (Matching / Drag & Drop).
     */
    value?: string;

    /**
     * Groupe auquel appartient la réponse.
     * Exemple :
     * Left
     * Right
     * Source
     * Destination
     */
    group?: string;

}