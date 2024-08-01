import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import {useAtom} from "jotai/index";
import {addDialogAtom} from "../App";

type ListButtonProps = {
    onButtonClick: (value: string) => void;
}

export function ListButtons ({onButtonClick}: ListButtonProps) {
    const [addTodoDialogAtom, setAddTodoDialog] = useAtom(addDialogAtom);


    return (
        <>
            <IconButton onClick={() => onButtonClick('value1')} edge="end" aria-label="info">
                <InfoIcon className={"infoOnHover"}/>
            </IconButton>
            <IconButton edge="end" aria-label="edit">
                <EditIcon className={"editOnHover"} onClick={() => setAddTodoDialog(true)}/>
            </IconButton>
            <IconButton onClick={() => onButtonClick('value3')} edge="end" aria-label="delete">
                <DeleteIcon className={"deleteOnHover"}/>
            </IconButton>
        </>
    )
}