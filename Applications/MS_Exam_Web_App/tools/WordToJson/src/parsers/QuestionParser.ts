import { Question } from "../models/Question";

import { QuestionFactory } from "../factories/QuestionFactory";

import { QuestionClassifier } from "../classifiers/QuestionClassifier";

import { MetadataParser } from "./MetadataParser";

import { AnswerParser } from "./AnswerParser";

import { CorrectAnswerParser } from "./CorrectAnswerParser";

import { ExplanationParser } from "./ExplanationParser";

export class QuestionParser {

    private factory = new QuestionFactory();

    private classifier = new QuestionClassifier();

    private metadataParser = new MetadataParser();

    private answerParser = new AnswerParser();

    private correctAnswerParser = new CorrectAnswerParser();

    private explanationParser = new ExplanationParser();

    public parse(text: string): Question[] {

        const questions: Question[] = [];

        const blocks = text
            .split(/Question\s*#?\d+/i)
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
            .filter(Boolean);

        const metadata = this.metadataParser.parse(block);

        const type = this.classifier.classify(block);

        const answers = this.answerParser.parse(lines);

        const correctAnswer = this.correctAnswerParser.parse(lines);

        const explanation = this.explanationParser.parse(lines);

        let questionText = "";

        let readingAnswers = false;

        for (const line of lines) {

            if (/^[A-Z][.)]/.test(line)) {

                readingAnswers = true;

            }

            if (!readingAnswers) {

                if (

                    !line.startsWith("Answer") &&

                    !line.startsWith("Réponse")

                ) {

                    questionText += line + " ";

                }

            }

        }

        return this.factory.create({

            id: `question-${number}`,

            certificationId: "SC-300",

            number: metadata.number,

            topic: metadata.topic,

            title: metadata.title,

            type,

            question: questionText.trim(),

            answers,

            correctAnswer,

            explanation

        });

    }

}