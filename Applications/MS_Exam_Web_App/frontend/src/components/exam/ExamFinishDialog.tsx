import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from "@mui/material";

type Props = {

    open: boolean;

    answered: number;

    total: number;

    onCancel: () => void;

    onConfirm: () => void;

};

export default function ExamFinishDialog({

    open,

    answered,

    total,

    onCancel,

    onConfirm

}: Props) {

    return (

        <Dialog
            open={open}
            maxWidth="sm"
            fullWidth
        >

            <DialogTitle>

                Terminer l'examen

            </DialogTitle>

            <DialogContent>

                <Typography sx={{ mb: 2 }}>

                    Voulez-vous vraiment terminer votre examen ?

                </Typography>

                <Typography>

                    Questions répondues : {answered} / {total}

                </Typography>

            </DialogContent>

            <DialogActions>

                <Button
                    onClick={onCancel}
                >
                    Continuer
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={onConfirm}
                >
                    Terminer
                </Button>

            </DialogActions>

        </Dialog>

    );

}