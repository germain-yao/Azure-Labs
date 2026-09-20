export class BlockExtractor {

    public extract(text: string): string[] {

        return text
            .split(/Question\s*#?\d+.*$/gim)
            .map(block => block.trim())
            .filter(block => block.length > 0);

    }

}