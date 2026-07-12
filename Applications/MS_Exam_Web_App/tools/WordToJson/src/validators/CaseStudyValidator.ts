import { Question } from "../models/Question";

export class HotspotValidator {

    public validate(question: Question): boolean {

        if (!question.question.trim()) {

            console.log(`❌ ${question.id} : hotspot vide`);

            return false;

        }

        return true;

    }

}