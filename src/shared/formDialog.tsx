import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import React from "react";
import {useState} from "react";
import {useAtomValue} from "jotai/react/useAtomValue";
import { useAtom } from "jotai";
import {addDialogAtom} from "../App";


export default function FormDialog() {

    const [addTodoDialogAtom, setAddTodoDialog] = useAtom(addDialogAtom);

    const handleClose = () => {
        setAddTodoDialog(false);
    };

    return (
        <>
            <Dialog
                open={addTodoDialogAtom}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event : React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Aggiungi un todo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Modale per l'aggiunta di un todo nella lista.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="titolo"
                        name="titolo"
                        label="Titolo"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        id="descrizione"
                        label="Descrizione"
                        multiline
                        rows={4}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancella</Button>
                    <Button type="submit">Aggiungi</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}