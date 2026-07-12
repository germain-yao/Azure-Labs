export class ExplanationParser {

    public parse(lines: string[]): string {

        let explanation = "";

        let capture = false;

        for (const line of lines) {

            if (/^Explanation\s*:|^Explication\s*:/i.test(line)) {

                capture = true;

                explanation += line
                    .replace(/^Explanation\s*:|^Explication\s*:/i, "")
                    .trim();

                explanation += " ";

                continue;

            }

            if (capture) {

                explanation += line + " ";

            }

        }

        return explanation.trim();

    }

}