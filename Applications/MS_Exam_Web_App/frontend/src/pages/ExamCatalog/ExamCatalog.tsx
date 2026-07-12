import { Container } from "@mui/material";

import ExamHeader from "../../components/exam/ExamHeader";

export default function ExamCatalog() {

    return (

        <Container
            maxWidth="lg"
            sx={{
                py: 6
            }}
        >

            <ExamHeader />

        </Container>

    );

}