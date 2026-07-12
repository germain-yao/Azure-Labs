import { Container } from "@mui/material";
import { useState } from "react";

import ExamHeader from "../../components/exam/ExamHeader";
import ExamSearch from "../../components/exam/ExamSearch";
import ExamFilters from "../../components/exam/ExamFilters";

export default function ExamCatalog() {

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    return (

        <Container
            maxWidth="lg"
            sx={{ py: 6 }}
        >

            <ExamHeader />

            <ExamSearch />

            <ExamFilters
                category={category}
                onChange={setCategory}
            />

        </Container>

    );

}