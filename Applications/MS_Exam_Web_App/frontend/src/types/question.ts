export type QuestionType =
    | "singleChoice"
    | "multipleChoice"
    | "dragDrop"
    | "caseStudy"
    | "table"
    | "hotspot"
    | "order";

export interface Answer {

    id: string;

    text: string;

}

export interface TableData {

    columns: string[];

    rows: string[][];

}

export interface DragItem {

    id: string;

    text: string;

}

export interface DragTarget {

    id: string;

    label: string;

}

export interface Question {

    id: string;

    certificationId: string;

    type: QuestionType;

    question: string;

    explanation: string;

    answers?: Answer[];

    correctAnswer?: string;

    correctAnswers?: string[];

    table?: TableData;

    dragItems?: DragItem[];

    dragTargets?: DragTarget[];

    image?: string;

}