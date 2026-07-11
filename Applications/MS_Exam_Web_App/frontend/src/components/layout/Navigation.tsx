import { Tabs, Tab, Paper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {

    const location = useLocation();

    const current =
        location.pathname.startsWith("/exam")
            ? "/exams"
            : location.pathname;

    return (

        <Paper square>

            <Tabs
                value={current}
                centered
            >

                <Tab
                    label="Accueil"
                    value="/"
                    component={Link}
                    to="/"
                />

                <Tab
                    label="Examens"
                    value="/exams"
                    component={Link}
                    to="/exams"
                />

                <Tab
                    label="Dashboard"
                    value="/dashboard"
                    component={Link}
                    to="/dashboard"
                />

                <Tab
                    label="Historique"
                    value="/history"
                    component={Link}
                    to="/history"
                />

                <Tab
                    label="Administration"
                    value="/admin"
                    component={Link}
                    to="/admin"
                />

            </Tabs>

        </Paper>

    );

}