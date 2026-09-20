export enum QuestionType {

    SingleChoice = "singleChoice",

    MultipleChoice = "multipleChoice",

    DragDrop = "dragDrop",

    Hotspot = "hotspot",

    CaseStudy = "caseStudy",

    Series = "series",

    Unknown = "unknown"

}

export class QuestionClassifier {

    public classify(block: string): QuestionType {

        const text = block.toUpperCase();

        // ===========================
        // CASE STUDY
        // ===========================

        if (

            text.includes("CASE STUDY") ||

            text.includes("ÉTUDE DE CAS") ||

            text.includes("ETUDE DE CAS")

        ) {

            return QuestionType.CaseStudy;

        }

        // ===========================
        // DRAG & DROP
        // ===========================

        if (

            text.includes("GLISSER-DÉPOSER") ||

            text.includes("GLISSER DEPOSER") ||

            text.includes("FAIRE GLISSER") ||

            (text.includes("DRAG") && text.includes("DROP"))

        ) {

            return QuestionType.DragDrop;

        }

        // ===========================
        // HOTSPOT
        // ===========================

        if (

            text.includes("POINT D'ACCÈS") ||

            text.includes("POINT D'ACCES") ||

            text.includes("HOTSPOT")

        ) {

            return QuestionType.Hotspot;

        }

        // ===========================
        // SERIES MICROSOFT
        // ===========================

        if (

            text.includes("REMARQUE : CETTE QUESTION FAIT PARTIE") ||

            text.includes("REMARQUE: CETTE QUESTION FAIT PARTIE") ||

            text.includes("NOTE: THIS QUESTION IS PART OF")

        ) {

            return QuestionType.Series;

        }

        // ===========================
        // MULTIPLE CHOICE
        // ===========================

        const answer = text.match(

            /(ANSWER|RÉPONSE)\s*:\s*([A-Z]+)/

        );

        if (

            answer &&

            answer[2].length > 1

        ) {

            return QuestionType.MultipleChoice;

        }

        // ===========================
        // SINGLE CHOICE
        // ===========================

        if (

            /(ANSWER|RÉPONSE)\s*:\s*[A-Z]/.test(text)

        ) {

            return QuestionType.SingleChoice;

        }

        // ===========================
        // INCONNU
        // ===========================

        return QuestionType.Unknown;

    }

}