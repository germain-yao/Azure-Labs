import { Question } from "../models/Question";
import { QuestionType } from "../classifiers/QuestionClassifier";

export class QuestionValidator {

    public validate(questions: Question[]): boolean {

        console.log("");
        console.log("========== Validation ==========");

        let valid = true;

        questions.forEach(question => {

            switch (question.type) {

                case QuestionType.SingleChoice:

                    valid = this.validateSingle(question) && valid;
                    break;

                case QuestionType.MultipleChoice:

                    valid = this.validateMultiple(question) && valid;
                    break;

                default:

                    // Les autres types seront validés plus tard.
                    break;

            }

        });

        console.log("===============================");
        console.log("");

        return valid;

    }

    private validateSingle(question: Question): boolean {

        let valid = true;

        if (!question.question.trim()) {

            console.log(`❌ ${question.id} : question vide`);
            valid = false;

        }

        if (!question.answers || question.answers.length < 2) {

            console.log(`❌ ${question.id} : moins de 2 réponses`);
            valid = false;

        }

        if (typeof question.correctAnswer !== "string") {

            console.log(`❌ ${question.id} : réponse simple attendue`);
            valid = false;

        }

        return valid;

    }

    private validateMultiple(question: Question): boolean {

        let valid = true;

        if (!question.question.trim()) {

            console.log(`❌ ${question.id} : question vide`);
            valid = false;

        }

        if (!question.answers || question.answers.length < 2) {

            console.log(`❌ ${question.id} : moins de 2 réponses`);
            valid = false;

        }

        if (!Array.isArray(question.correctAnswer)) {

            console.log(`❌ ${question.id} : réponses multiples attendues`);
            valid = false;

        }

        return valid;

    }

}