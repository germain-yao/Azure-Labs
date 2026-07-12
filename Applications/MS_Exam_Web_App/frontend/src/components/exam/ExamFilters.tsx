import {
    Box,
    Button
} from "@mui/material";

import FilterListIcon from "@mui/icons-material/FilterList";
import CloudIcon from "@mui/icons-material/Cloud";
import ComputerIcon from "@mui/icons-material/Computer";
import SecurityIcon from "@mui/icons-material/Security";
import HubIcon from "@mui/icons-material/Hub";
import BuildIcon from "@mui/icons-material/Build";

type Props = {
    category: string;
    onChange: (category: string) => void;
};

export default function ExamFilters({
    category,
    onChange
}: Props) {

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
                variant={category === "All" ? "contained" : "outlined"}
                startIcon={<FilterListIcon />}
                onClick={() => onChange("All")}
            >
                Tous
            </Button>

            <Button
                variant={category === "Cloud" ? "contained" : "outlined"}
                startIcon={<CloudIcon />}
                onClick={() => onChange("Cloud")}
            >
                Cloud
            </Button>

            <Button
                variant={category === "Système" ? "contained" : "outlined"}
                startIcon={<ComputerIcon />}
                onClick={() => onChange("Système")}
            >
                Système
            </Button>

            <Button
                variant={category === "Sécurité" ? "contained" : "outlined"}
                startIcon={<SecurityIcon />}
                onClick={() => onChange("Sécurité")}
            >
                Sécurité
            </Button>

            <Button
                variant={category === "Network" ? "contained" : "outlined"}
                startIcon={<HubIcon />}
                onClick={() => onChange("Network")}
            >
                Network
            </Button>

            <Button
                variant={category === "DevOps" ? "contained" : "outlined"}
                startIcon={<BuildIcon />}
                onClick={() => onChange("DevOps")}
            >
                DevOps
            </Button>

        </Box>

    );

}