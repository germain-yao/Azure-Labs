import { Box, Typography } from "@mui/material";

export default function Footer() {

    return (

        <Box
            sx={{
                mt: 6,
                py: 3,
                textAlign: "center",
                borderTop: "1px solid #ddd"
            }}
        >

            <Typography variant="body2">

                © 2026 AFRIKA NT

            </Typography>

            <Typography variant="caption">

                Microsoft Certification Exam Simulator

            </Typography>

        </Box>

    );

}