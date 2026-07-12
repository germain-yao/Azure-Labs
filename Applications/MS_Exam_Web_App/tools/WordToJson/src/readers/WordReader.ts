import * as fs from "fs";
import * as mammoth from "mammoth";

export class WordReader {

    public async read(filePath: string): Promise<string> {

        if (!fs.existsSync(filePath)) {

            throw new Error(`Le fichier n'existe pas : ${filePath}`);

        }

        const result = await mammoth.extractRawText({

            path: filePath

        });

        return result.value;

    }

}