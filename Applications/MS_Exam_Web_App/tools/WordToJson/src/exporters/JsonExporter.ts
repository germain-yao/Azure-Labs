import * as fs from "fs";
import * as path from "path";

import { Question } from "../models/Question";

export class JsonExporter {

    public export(fileName: string, questions: Question[]): void {

        const outputFolder = path.resolve("./output");

        if (!fs.existsSync(outputFolder)) {

            fs.mkdirSync(outputFolder);

        }

        const outputFile = path.join(outputFolder, fileName);

        fs.writeFileSync(

            outputFile,

            JSON.stringify(questions, null, 4),

            "utf8"

        );

        console.log("");

        console.log("======================================");

        console.log("JSON généré avec succès");

        console.log(outputFile);

        console.log("Questions :", questions.length);

        console.log("======================================");

    }

}