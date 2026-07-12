export class ExamTimer {

    private duration: number;

    private startedAt?: number;

    constructor(minutes: number) {

        this.duration = minutes * 60;

    }

    public start(): void {

        this.startedAt = Date.now();

    }

    public getRemainingSeconds(): number {

        if (!this.startedAt) {

            return this.duration;

        }

        const elapsed = Math.floor(

            (Date.now() - this.startedAt) / 1000

        );

        return Math.max(

            this.duration - elapsed,

            0

        );

    }

    public isFinished(): boolean {

        return this.getRemainingSeconds() === 0;

    }

    public format(): string {

        const seconds = this.getRemainingSeconds();

        const minutes = Math.floor(seconds / 60);

        const remaining = seconds % 60;

        return `${minutes.toString().padStart(2,"0")}:${remaining.toString().padStart(2,"0")}`;

    }

}