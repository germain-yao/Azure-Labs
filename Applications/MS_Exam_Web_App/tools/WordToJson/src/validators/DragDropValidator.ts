import { Question } from "../models/Question";

export class DragDropValidator {

    public validate(question: Question): boolean {

        if (!question.question.trim()) {

            console.log(`❌ ${question.id} : énoncé vide`);

            return false;

        }

        return true;

    }

}