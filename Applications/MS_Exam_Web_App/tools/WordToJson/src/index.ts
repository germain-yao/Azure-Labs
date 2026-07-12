import { WordReader } from "./readers/WordReader";
import { BlockExtractor } from "./parsers/BlockExtractor";
import { ExamAnalyzer } from "./analyzers/ExamAnalyzer";
import { QuestionParser } from "./parsers/QuestionParser";
import { JsonExporter } from "./exporters/JsonExporter";
import { QuestionValidator } from "./validators/QuestionValidator";

async function main() {

    console.log("======================================");
    console.log(" Microsoft Exam Word To JSON");
    console.log("======================================");

    const reader = new WordReader();

    const extractor = new BlockExtractor();

    const analyzer = new ExamAnalyzer();

    const parser = new QuestionParser();

    const validator = new QuestionValidator();

    const exporter = new JsonExporter();

    // Lecture du document
    const text = await reader.read("./templates/sc-300.docx");

    // Découpage en blocs
    const blocks = extractor.extract(text);

    // Analyse du document
    analyzer.analyze(blocks);

    // Parsing des blocs
    const questions = parser.parse(text);

    // Validation

    if (!validator.validate(questions)) {

        console.log("");
        console.log("❌ Conversion interrompue.");
        console.log("Corrigez les erreurs avant de générer le JSON.");

        return;

    }

    // Export JSON

    exporter.export("sc-300.json", questions);

}

main().catch((error) => {

    console.error(error);

});