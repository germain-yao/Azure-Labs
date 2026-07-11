import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

export default function Header() {
    return (
        <AppBar position="static">

            <Toolbar>

                <SchoolIcon sx={{ mr: 2 }} />

                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    MS Exam Web App
                </Typography>

                <Typography variant="body2">
                    AFRIKA NT
                </Typography>

            </Toolbar>

        </AppBar>
    );
}