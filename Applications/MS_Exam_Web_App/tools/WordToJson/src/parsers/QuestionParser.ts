import { Question } from "../models/Question";
import { Answer } from "../models/Answer";

export class QuestionParser {

    public parse(text: string): Question[] {

        const questions: Question[] = [];

        const blocks = text
            .split(/Question\s*#?\d+.*$/gim)
            .map(block => block.trim())
            .filter(block => block.length > 0);

        blocks.forEach((block, index) => {

            const question = this.parseQuestion(block, index + 1);

            if (question) {

                questions.push(question);

            }

        });

        return questions;

    }

    private parseQuestion(block: string, number: number): Question | null {

        const lines = block
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => line.length > 0);

        if (lines.length === 0) {

            return null;

        }

        let questionText = "";

        const answers: Answer[] = [];

        let correctAnswer = "";

        let readingAnswers = false;

        for (const line of lines) {

            // Réponse correcte
            if (/^Réponse\s*:|^Answer\s*:/i.test(line)) {

                correctAnswer = line
                    .replace(/^Réponse\s*:|^Answer\s*:/i, "")
                    .trim();

                continue;

            }

            // Réponses A B C D
            if (/^[A-D][\.\)]\s*/i.test(line)) {

                readingAnswers = true;

                answers.push({

                    id: line.substring(0, 1).toUpperCase(),

                    text: line.substring(2).trim()

                });

                continue;

            }

            // Tant que nous ne sommes pas dans les réponses
            // le texte appartient à la question

            if (!readingAnswers) {

                questionText += line + " ";

            }

        }

        return {

            id: `question-${number}`,

            certificationId: "SC-300",

            type: "singleChoice",

            question: questionText.trim(),

            answers,

            correctAnswer

        };

    }

}