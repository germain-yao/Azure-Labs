import { Question } from "../models/Question";

export class SingleChoiceValidator {

    public validate(question: Question): boolean {

        let valid = true;

        if (question.answers.length < 2) {

            console.log(`❌ ${question.id} : moins de 2 réponses`);

            valid = false;

        }

        if (typeof question.correctAnswer !== "string") {

            console.log(`❌ ${question.id} : une seule réponse attendue`);

            valid = false;

        }

        return valid;

    }

}