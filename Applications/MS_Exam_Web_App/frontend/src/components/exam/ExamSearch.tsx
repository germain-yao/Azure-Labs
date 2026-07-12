import { Paper, TextField } from "@mui/material";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function ExamSearch({
    value,
    onChange
}: Props) {

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
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

        </Paper>

    );

}