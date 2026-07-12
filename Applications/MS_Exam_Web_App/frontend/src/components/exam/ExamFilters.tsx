import {
    Box,
    Button
} from "@mui/material";

import FilterListIcon from "@mui/icons-material/FilterList";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import DnsIcon from "@mui/icons-material/Dns";

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
                mb: 4,
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
                variant={category === "Azure" ? "contained" : "outlined"}
                startIcon={<CloudIcon />}
                onClick={() => onChange("Azure")}
            >
                Azure
            </Button>

            <Button
                variant={category === "Security" ? "contained" : "outlined"}
                startIcon={<SecurityIcon />}
                onClick={() => onChange("Security")}
            >
                Security
            </Button>

            <Button
                variant={category === "Windows" ? "contained" : "outlined"}
                startIcon={<DnsIcon />}
                onClick={() => onChange("Windows")}
            >
                Windows
            </Button>

        </Box>

    );

}