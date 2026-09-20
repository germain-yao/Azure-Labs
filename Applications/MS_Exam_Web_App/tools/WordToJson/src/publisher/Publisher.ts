import fs from "fs";
import path from "path";

export class Publisher {

    public publish(fileName: string): void {

        const source = path.resolve(
            "./output",
            fileName
        );

        const destination = path.resolve(
            "../../frontend/src/data/questions",
            fileName
        );

        if (!fs.existsSync(source)) {

            throw new Error(
                `Fichier introuvable : ${source}`
            );

        }

        fs.copyFileSync(source, destination);

        console.log("");
        console.log("======================================");
        console.log("Publication terminée");
        console.log(destination);
        console.log("======================================");

    }

}