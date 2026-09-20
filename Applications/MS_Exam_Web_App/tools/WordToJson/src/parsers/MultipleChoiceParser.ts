import { Answer } from "../models/Answer";

export interface MultipleChoiceResult {

    answers: Answer[];

    correctAnswers: string[];

}

export class MultipleChoiceParser {

    public parse(lines: string[]): MultipleChoiceResult {

        const answers: Answer[] = [];

        let correctAnswers: string[] = [];

        for (const rawLine of lines) {

            const line = rawLine.trim();

            if (!line) {

                continue;

            }

            // Réponses :
            // A. xxx
            // A) xxx
            // B. xxx
            // Z) xxx

            const answerMatch = line.match(/^([A-Z])[.)]\s+(.+)$/i);

            if (answerMatch) {

                answers.push({

                    id: answerMatch[1].toUpperCase(),

                    text: answerMatch[2].trim()

                });

                continue;

            }

            // Réponse :
            // Answer : AB
            // Réponse : ACE
            // Answer: BDF

            const correctMatch = line.match(
                /^(Answer|Réponse)\s*:\s*([A-Z]+)/i
            );

            if (correctMatch) {

                correctAnswers = correctMatch[2]
                    .toUpperCase()
                    .split("");

            }

        }

        return {

            answers,

            correctAnswers

        };

    }

}