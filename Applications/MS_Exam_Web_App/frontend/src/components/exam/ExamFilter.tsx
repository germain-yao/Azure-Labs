import {
    Box,
    Button
} from "@mui/material";

import FilterListIcon from "@mui/icons-material/FilterList";
import CloudIcon from "@mui/icons-material/Cloud";
import ComputerIcon from "@mui/icons-material/Computer";
import SecurityIcon from "@mui/icons-material/Security";
import HubIcon from "@mui/icons-material/Hub";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

export default function ExamFilters() {

    return (

        <Box
            sx={{
                display: "flex",
                gap: 2,
                mb: 5,
                flexWrap: "wrap"
            }}
        >

            <Button
                variant="contained"
                startIcon={<FilterListIcon />}
            >
                Tous
            </Button>

            <Button
                variant="outlined"
                startIcon={<CloudIcon />}
            >
                Cloud
            </Button>

            <Button
                variant="outlined"
                startIcon={<ComputerIcon />}
            >
                Système
            </Button>

            <Button
                variant="outlined"
                startIcon={<SecurityIcon />}
            >
                Sécurité
            </Button>

            <Button
                variant="outlined"
                startIcon={<HubIcon />}
            >
                Network
            </Button>

            <Button
                variant="outlined"
                startIcon={<BuildCircleIcon />}
            >
                DevOps
            </Button>

        </Box>

    );

}