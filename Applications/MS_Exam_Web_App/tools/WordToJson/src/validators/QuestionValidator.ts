import { Question } from "../models/Question";

import { QuestionType } from "../classifiers/QuestionClassifier";

import { SingleChoiceValidator } from "./SingleChoiceValidator";
import { MultipleChoiceValidator } from "./MultipleChoiceValidator";
import { DragDropValidator } from "./DragDropValidator";
import { HotspotValidator } from "./HotspotValidator";
import { CaseStudyValidator } from "./CaseStudyValidator";

export class QuestionValidator {

    private singleChoiceValidator = new SingleChoiceValidator();

    private multipleChoiceValidator = new MultipleChoiceValidator();

    private dragDropValidator = new DragDropValidator();

    private hotspotValidator = new HotspotValidator();

    private caseStudyValidator = new CaseStudyValidator();

    public validate(questions: Question[]): boolean {

        console.log("");
        console.log("========== Validation ==========");

        let valid = true;

        for (const question of questions) {

            switch (question.type) {

                case QuestionType.SingleChoice:

                    valid = this.singleChoiceValidator.validate(question) && valid;

                    break;

                case QuestionType.MultipleChoice:

                    valid = this.multipleChoiceValidator.validate(question) && valid;

                    break;

                case QuestionType.DragDrop:

                    valid = this.dragDropValidator.validate(question) && valid;

                    break;

                case QuestionType.Hotspot:

                    valid = this.hotspotValidator.validate(question) && valid;

                    break;

                case QuestionType.CaseStudy:

                case QuestionType.Series:

                    valid = this.caseStudyValidator.validate(question) && valid;

                    break;

                default:

                    console.log(`⚠ ${question.id} : type inconnu`);

                    valid = false;

                    break;

            }

        }

        console.log("===============================");
        console.log("");

        return valid;

    }

}