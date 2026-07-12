import { Grid, Typography } from "@mui/material";

import CertificationCard from "../common/CertificationCard";
import { certifications } from "../../data/certifications";

type Props = {
    search: string;
    category: string;
};

export default function ExamGrid({
    search,
    category
}: Props) {

    const filtered = certifications.filter((certification) => {

        const matchesSearch =
            certification.code.toLowerCase().includes(search.toLowerCase()) ||
            certification.title.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            certification.category === category;

        return matchesSearch && matchesCategory;

    });

    return (

        <>

            <Typography
                variant="h5"
                sx={{
                    mb: 4,
                    fontWeight: 500
                }}
            >
                {filtered.length} certifications disponibles
            </Typography>

            <Grid
                container
                spacing={3}
            >

                {filtered.map((certification) => (

                    <Grid
                        key={certification.id}
                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    >

                        <CertificationCard
                            certification={certification}
                        />

                    </Grid>

                ))}

            </Grid>

        </>

    );

}