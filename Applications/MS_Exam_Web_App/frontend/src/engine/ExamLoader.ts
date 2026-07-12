import type { Question } from "../types/question";

import sc300 from "../data/questions/sc-300.json";

export class ExamLoader {

    public load(certification: string): Question[] {

        switch (certification.toLowerCase()) {

            case "sc-300":

                return sc300 as Question[];

            default:

                console.warn(
                    `La certification '${certification}' ne possède pas encore de banque de questions.`
                );

                return [];

        }

    }

}