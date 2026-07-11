import { Grid, Typography } from "@mui/material";
import CertificationCard from "./CertificationCard";

// Badges Microsoft
import az900 from "../../assets/certifications/az-900.png";
import az104 from "../../assets/certifications/az-104.png";
import az305 from "../../assets/certifications/az-305.png";
import az500 from "../../assets/certifications/az-500.png";
import az700 from "../../assets/certifications/az-700.png";
import az800 from "../../assets/certifications/az-800.png";
import az801 from "../../assets/certifications/az-801.png";
import sc100 from "../../assets/certifications/sc-100.png";
import sc200 from "../../assets/certifications/sc-200.png";
import sc300 from "../../assets/certifications/sc-300.png";

const certifications = [
    {
        code: "AZ-900",
        title: "Azure Fundamentals",
        badge: az900,
        level: "Fundamentals",
        duration: "45 min",
        questions: 40
    },
    {
        code: "AZ-104",
        title: "Azure Administrator",
        badge: az104,
        level: "Associate",
        duration: "120 min",
        questions: 60
    },
    {
        code: "AZ-305",
        title: "Azure Solutions Architect",
        badge: az305,
        level: "Expert",
        duration: "120 min",
        questions: 60
    },
    {
        code: "AZ-500",
        title: "Azure Security Engineer",
        badge: az500,
        level: "Associate",
        duration: "120 min",
        questions: 60
    },
    {
        code: "AZ-700",
        title: "Azure Network Engineer",
        badge: az700,
        level: "Associate",
        duration: "120 min",
        questions: 60
    },
    {
        code: "AZ-800",
        title: "Windows Server Hybrid Administrator",
        badge: az800,
        level: "Associate",
        duration: "120 min",
        questions: 60
    },
    {
        code: "AZ-801",
        title: "Windows Server Hybrid Advanced Services",
        badge: az801,
        level: "Associate",
        duration: "120 min",
        questions: 60
    },
    {
        code: "SC-100",
        title: "Cybersecurity Architect",
        badge: sc100,
        level: "Expert",
        duration: "120 min",
        questions: 60
    },
    {
        code: "SC-200",
        title: "Security Operations Analyst",
        badge: sc200,
        level: "Associate",
        duration: "120 min",
        questions: 60
    },
    {
        code: "SC-300",
        title: "Identity and Access Administrator",
        badge: sc300,
        level: "Associate",
        duration: "120 min",
        questions: 60
    }
];

export default function CertificationGrid() {
    return (
        <>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ mb: 4 }}
            >
                Certifications Microsoft
            </Typography>

            <Grid container spacing={3}>
                {certifications.map((certification) => (
                    <Grid
                        key={certification.code}
                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    >
                        <CertificationCard
                            code={certification.code}
                            title={certification.title}
                            badge={certification.badge}
                            level={certification.level}
                            duration={certification.duration}
                            questions={certification.questions}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}