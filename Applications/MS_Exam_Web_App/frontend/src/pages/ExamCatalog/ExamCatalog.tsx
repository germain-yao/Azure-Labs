import { Container } from "@mui/material";

import ExamHeader from "../../components/exam/ExamHeader";
import ExamSearch from "../../components/exam/ExamSearch";

export default function ExamCatalog() {

    return (

        <Container
            maxWidth="lg"
            sx={{ py: 6 }}
        >

            <ExamHeader />

            <ExamSearch />

        </Container>

    );

}