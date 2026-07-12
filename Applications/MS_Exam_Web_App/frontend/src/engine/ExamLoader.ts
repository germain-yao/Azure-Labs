import type { Question } from "../types/question";

import sc100 from "../data/questions/sc-100.json";
import sc200 from "../data/questions/sc-200.json";
import sc300 from "../data/questions/sc-300.json";
import sc400 from "../data/questions/sc-400.json";

import az900 from "../data/questions/az-900.json";
import az104 from "../data/questions/az-104.json";
import az305 from "../data/questions/az-305.json";
import az500 from "../data/questions/az-500.json";
import az700 from "../data/questions/az-700.json";
import az800 from "../data/questions/az-800.json";
import az801 from "../data/questions/az-801.json";

export class ExamLoader {

    private exams: Record<string, Question[]> = {

        "sc-100": sc100 as Question[],
        "sc-200": sc200 as Question[],
        "sc-300": sc300 as Question[],
        "sc-400": sc400 as Question[],

        "az-900": az900 as Question[],
        "az-104": az104 as Question[],
        "az-305": az305 as Question[],
        "az-500": az500 as Question[],
        "az-700": az700 as Question[],
        "az-800": az800 as Question[],
        "az-801": az801 as Question[]

    };

    public load(certification: string): Question[] {

        const exam =
            this.exams[certification.toLowerCase()];

        if (!exam) {

            throw new Error(
                `Certification inconnue : ${certification}`
            );

        }

        return exam;

    }

}