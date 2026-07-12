import { Box, Typography } from "@mui/material";

export default function ExamHeader() {

    return (

        <Box
            sx={{
                mb: 5
            }}
        >

            <Typography
                variant="h2"
                sx={{
                    fontWeight: 300,
                    mb: 2
                }}
            >
                Microsoft Certification Catalog
            </Typography>

            <Typography
                variant="h5"
                color="text.secondary"
            >
                Préparez vos examens Microsoft Azure en choisissant une certification.
            </Typography>

        </Box>

    );

}