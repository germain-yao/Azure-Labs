export class CorrectAnswerParser {

    public parse(lines: string[]): string | string[] {

        for (const rawLine of lines) {

            const line = rawLine.trim();

            const match = line.match(

                /^(Answer|Answers|Réponse|Bonne réponse)\s*:\s*([A-Z]+)/i

            );

            if (!match) {

                continue;

            }

            const value = match[2].toUpperCase();

            if (value.length === 1) {

                return value;

            }

            return value.split("");

        }

        return "";

    }

}