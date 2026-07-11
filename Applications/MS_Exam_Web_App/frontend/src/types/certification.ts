export interface Certification {

    id: string;

    code: string;

    title: string;

    description: string;

    level: "Fundamentals" | "Associate" | "Expert";

    category: "Azure" | "Security" | "Windows";

    duration: string;

    questions: number;

    passingScore: number;

    rating: number;

    badge: string;

}