import { Paper, TextField } from "@mui/material";

export default function ExamSearch() {

    return (

        <Paper
            elevation={3}
            sx={{
                p: 2,
                mb: 4,
                borderRadius: 4
            }}
        >

            <TextField
                fullWidth
                placeholder="Rechercher une certification"
            />

        </Paper>

    );

}