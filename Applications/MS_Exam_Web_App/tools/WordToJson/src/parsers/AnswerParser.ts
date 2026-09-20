import { Answer } from "../models/Answer";

export class AnswerParser {

    public parse(lines: string[]): Answer[] {

        const answers: Answer[] = [];

        let order = 1;

        for (const rawLine of lines) {

            const line = rawLine.trim();

            const match = line.match(

                /^([A-Z])[.)]\s+(.+)$/i

            );

            if (!match) {

                continue;

            }

            answers.push({

                id: match[1].toUpperCase(),

                text: match[2],

                order

            });

            order++;

        }

        return answers;

    }

}