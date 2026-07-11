import { certifications } from "../data/certifications";
import type { Certification } from "../types/certification";

export function getAllCertifications(): Certification[] {
    return certifications;
}

export function getCertificationById(id: string): Certification | undefined {
    return certifications.find(certification => certification.id === id);
}

export function getCertificationsByCategory(category: string): Certification[] {

    if (category === "All") {
        return certifications;
    }

    return certifications.filter(
        certification => certification.category === category
    );
}

export function searchCertifications(search: string): Certification[] {

    if (!search.trim()) {
        return certifications;
    }

    const value = search.toLowerCase();

    return certifications.filter(certification =>
        certification.code.toLowerCase().includes(value) ||
        certification.title.toLowerCase().includes(value)
    );
}