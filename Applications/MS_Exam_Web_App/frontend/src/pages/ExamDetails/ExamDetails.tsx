import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

import ExamDetailsCard from "../../components/exam/ExamDetailsCard";

export default function ExamDetails() {

    const { id } = useParams();

    return (

        <Container
            maxWidth="md"
            sx={{ py: 6 }}
        >

            <ExamDetailsCard
                id={id ?? ""}
            />

        </Container>

    );

}