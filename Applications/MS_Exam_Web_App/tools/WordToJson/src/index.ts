import { WordReader } from "./readers/WordReader";
import { QuestionParser } from "./parsers/QuestionParser";
import { JsonExporter } from "./exporters/JsonExporter";
import { QuestionValidator } from "./validators/QuestionValidator";
import { ExamAnalyzer } from "./analyzers/ExamAnalyzer";
import { Publisher } from "./publisher/Publisher";

async function main() {

    console.log("======================================");
    console.log(" Microsoft Exam Word To JSON");
    console.log("======================================");

    const reader = new WordReader();
    const parser = new QuestionParser();
    const analyzer = new ExamAnalyzer();
    const validator = new QuestionValidator();
    const exporter = new JsonExporter();
    const publisher = new Publisher();

    // Lecture du document Word
    const text = await reader.read("./templates/sc-300.docx");

    // Parsing
    const questions = parser.parse(text);

    // Analyse
    analyzer.analyze(questions);

    // Validation
    const valid = validator.validate(questions);

    if (!valid) {

        console.log("");
        console.log("======================================");
        console.log("⚠ ATTENTION");
        console.log("Certaines questions sont incomplètes.");
        console.log("Le JSON sera tout de même généré.");
        console.log("======================================");
        console.log("");

    }

    // Génération du JSON
    exporter.export("sc-300.json", questions);

    // Publication dans le Frontend
    publisher.publish("sc-300.json");

    console.log("");
    console.log("======================================");
    console.log(" Conversion terminée avec succès");
    console.log("======================================");
    console.log("");

}

main().catch((error) => {

    console.error("");
    console.error("======================================");
    console.error("Erreur lors de la conversion");
    console.error("======================================");
    console.error(error);

});