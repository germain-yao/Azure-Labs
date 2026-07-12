import type { Certification } from "../types/certification";

import az900 from "../assets/certifications/az-900.png";
import az104 from "../assets/certifications/az-104.png";
import az305 from "../assets/certifications/az-305.png";
import az500 from "../assets/certifications/az-500.png";
import az700 from "../assets/certifications/az-700.png";
import az800 from "../assets/certifications/az-800.png";
import az801 from "../assets/certifications/az-801.png";
import sc100 from "../assets/certifications/sc-100.png";
import sc200 from "../assets/certifications/sc-200.png";
import sc300 from "../assets/certifications/sc-300.png";

export const certifications: Certification[] = [

    {
        id: "az-900",
        code: "AZ-900",
        title: "Azure Fundamentals",
        description: "Introduction aux services Microsoft Azure.",
        level: "Fundamentals",
        category: "Cloud",
        duration: "45 min",
        questions: 40,
        passingScore: 700,
        rating: 4.5,
        badge: az900
    },

    {
        id: "az-104",
        code: "AZ-104",
        title: "Azure Administrator",
        description: "Administration des ressources Azure.",
        level: "Associate",
        category: "Cloud",
        duration: "120 min",
        questions: 60,
        passingScore: 700,
        rating: 4.8,
        badge: az104
    },

    {
        id: "az-305",
        code: "AZ-305",
        title: "Azure Solutions Architect",
        description: "Conception d'architectures Azure sécurisées et évolutives.",
        level: "Expert",
        category: "Cloud",
        duration: "120 min",
        questions: 60,
        passingScore: 700,
        rating: 4.9,
        badge: az305
    },

    {
        id: "az-500",
        code: "AZ-500",
        title: "Azure Security Engineer",
        description: "Sécurisation des identités, des données et des réseaux Azure.",
        level: "Associate",
        category: "Sécurité",
        duration: "120 min",
        questions: 60,
        passingScore: 700,
        rating: 4.7,
        badge: az500
    },

    {
        id: "az-700",
        code: "AZ-700",
        title: "Azure Network Engineer",
        description: "Conception et administration des réseaux Azure.",
        level: "Associate",
        category: "Network",
        duration: "120 min",
        questions: 60,
        passingScore: 700,
        rating: 4.6,
        badge: az700
    },

    {
        id: "az-800",
        code: "AZ-800",
        title: "Windows Server Hybrid Administrator",
        description: "Administration hybride de Windows Server.",
        level: "Associate",
        category: "Système",
        duration: "120 min",
        questions: 60,
        passingScore: 700,
        rating: 4.6,
        badge: az800
    },

    {
        id: "az-801",
        code: "AZ-801",
        title: "Windows Server Hybrid Advanced Services",
        description: "Services avancés pour Windows Server hybride.",
        level: "Associate",
        category: "Système",
        duration: "120 min",
        questions: 60,
        passingScore: 700,
        rating: 4.6,
        badge: az801
    },

    {
        id: "sc-100",
        code: "SC-100",
        title: "Cybersecurity Architect",
        description: "Conception de stratégies de cybersécurité.",
        level: "Expert",
        category: "Sécurité",
        duration: "120 min",
        questions: 60,
        passingScore: 700,
        rating: 4.9,
        badge: sc100
    },

    {
        id: "sc-200",
        code: "SC-200",
        title: "Security Operations Analyst",
        description: "Analyse des opérations de sécurité avec Microsoft Sentinel.",
        level: "Associate",
        category: "Sécurité",
        duration: "120 min",
        questions: 60,
        passingScore: 700,
        rating: 4.8,
        badge: sc200
    },

    {
        id: "sc-300",
        code: "SC-300",
        title: "Identity and Access Administrator",
        description: "Gestion des identités et des accès avec Microsoft Entra ID.",
        level: "Associate",
        category: "Sécurité",
        duration: "120 min",
        questions: 60,
        passingScore: 700,
        rating: 4.8,
        badge: sc300
    }

];