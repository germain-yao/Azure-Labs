export interface Certification {

    id: string;

    code: string;

    title: string;

    description: string;

    level:
        | "Fundamentals"
        | "Associate"
        | "Expert";

    category:
        | "Cloud"
        | "Système"
        | "Sécurité"
        | "Network"
        | "DevOps";

    duration: string;

    questions: number;

    passingScore: number;

    rating: number;

    badge: string;

}