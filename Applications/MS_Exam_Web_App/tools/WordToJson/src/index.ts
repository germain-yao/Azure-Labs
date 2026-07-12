import { WordReader } from "./readers/WordReader";
import { QuestionParser } from "./parsers/QuestionParser";
import { JsonExporter } from "./exporters/JsonExporter";

async function main() {

    console.log("======================================");
    console.log(" Microsoft Exam Word To JSON");
    console.log("======================================");

    const reader = new WordReader();

    const parser = new QuestionParser();

    const exporter = new JsonExporter();

    const text = await reader.read("./templates/sc-300.docx");

    const questions = parser.parse(text);

    exporter.export("sc-300.json", questions);

}

main().catch(console.error);