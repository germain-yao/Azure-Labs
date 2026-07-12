import { Question } from "../models/Question";

export class MultipleChoiceValidator {

    public validate(question: Question): boolean {

        let valid = true;

        if (question.answers.length < 2) {

            console.log(`❌ ${question.id} : moins de 2 réponses`);

            valid = false;

        }

        if (!Array.isArray(question.correctAnswer)) {

            console.log(`❌ ${question.id} : plusieurs réponses attendues`);

            valid = false;

        }

        return valid;

    }

}