export interface QuestionMetadata {

    number: number;

    topic?: string;

    title?: string;

}

export class MetadataParser {

    public parse(block: string): QuestionMetadata {

        const metadata: QuestionMetadata = {

            number: 0

        };

        const number = block.match(/Question\s*#?\s*(\d+)/i);

        if (number) {

            metadata.number = Number(number[1]);

        }

        const topic = block.match(/\(Topic:\s*(.*?)\)/i);

        if (topic) {

            metadata.topic = topic[1];

        }

        return metadata;

    }

}