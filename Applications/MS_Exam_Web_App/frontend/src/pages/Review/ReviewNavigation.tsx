import {
    Box,
    Button,
    Paper,
    Typography
} from "@mui/material";

type Props = {

    current: number;

    total: number;

    onSelect: (
        index: number
    ) => void;

};

export default function ReviewNavigation({

    current,

    total,

    onSelect

}: Props) {

    return (

        <Paper
            elevation={1}
            sx={{
                p: 2,
                mb: 4,
                borderRadius: 2
            }}
        >

            <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: "bold",
                    mb: 2
                }}
            >

                Navigation

            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "center"
                }}
            >

                {

                    Array.from({

                        length: total

                    }).map((_, index) => (

                        <Button

                            key={index}

                            variant={
                                current === index
                                    ? "contained"
                                    : "outlined"
                            }

                            color={
                                current === index
                                    ? "primary"
                                    : "inherit"
                            }

                            size="small"

                            sx={{
                                minWidth: 42,
                                height: 42,
                                borderRadius: 2,
                                fontWeight: "bold"
                            }}

                            onClick={() =>
                                onSelect(index)
                            }

                        >

                            {index + 1}

                        </Button>

                    ))

                }

            </Box>

            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mt: 2 }}
            >

                Question {current + 1} sur {total}

            </Typography>

        </Paper>

    );

}