import { Question } from "../models/Question";
import { QuestionType } from "../classifiers/QuestionClassifier";

export class ExamAnalyzer {

    public analyze(questions: Question[]): void {

        console.log("");
        console.log("======================================");
        console.log(" Analyse du document");
        console.log("======================================");
        console.log("");

        console.log(`Nombre de questions : ${questions.length}`);
        console.log("");

        const statistics = new Map<string, number>();

        const unknownQuestions: number[] = [];

        questions.forEach((question, index) => {

            statistics.set(
                question.type,
                (statistics.get(question.type) ?? 0) + 1
            );

            if (question.type === QuestionType.Unknown) {

                unknownQuestions.push(index + 1);

            }

        });

        console.log("Répartition des types");
        console.log("--------------------------------------");

        Object.values(QuestionType).forEach(type => {

            console.log(
                `${type.padEnd(18)} : ${statistics.get(type) ?? 0}`
            );

        });

        console.log("");

        console.log("Couverture actuelle du moteur");
        console.log("--------------------------------------");

        console.log("✅ Single Choice");
        console.log("✅ Multiple Choice");
        console.log("🚧 Drag & Drop");
        console.log("🚧 Hotspot");
        console.log("🚧 Case Study");
        console.log("🚧 Series");

        console.log("");

        if (unknownQuestions.length > 0) {

            console.log("Questions non reconnues");
            console.log("--------------------------------------");

            console.log(
                unknownQuestions.join(", ")
            );

            console.log("");

        }

        console.log("======================================");
        console.log("");

    }

}