import {
    QuestionClassifier,
    QuestionType
} from "../classifiers/QuestionClassifier";

export class ExamAnalyzer {

    private classifier = new QuestionClassifier();

    public analyze(blocks: string[]): void {

        console.log("");
        console.log("======================================");
        console.log(" Analyse du document");
        console.log("======================================");
        console.log("");

        console.log(`Nombre de questions : ${blocks.length}`);
        console.log("");

        const statistics = new Map<QuestionType, number>();

        const unknownQuestions: number[] = [];

        blocks.forEach((block, index) => {

            const type = this.classifier.classify(block);

            statistics.set(
                type,
                (statistics.get(type) ?? 0) + 1
            );

            if (type === QuestionType.Unknown) {

                unknownQuestions.push(index + 1);

            }

        });

        console.log("Répartition des types");
        console.log("--------------------------------------");

        Object.values(QuestionType).forEach(type => {

            const count = statistics.get(type) ?? 0;

            console.log(
                `${type.padEnd(18)} : ${count}`
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