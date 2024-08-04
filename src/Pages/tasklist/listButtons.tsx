import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import {useAtom} from "jotai/index";
import {addDialogAtom} from "../../App";

type ListButtonProps = {
    onButtonClick: (value: string) => void;
}

export function ListButtons ({onButtonClick}: ListButtonProps) {

    return (
        <>
            <IconButton onClick={() => onButtonClick('info')} edge="end" aria-label="info">
                <InfoIcon className={"infoOnHover"}/>
            </IconButton>
            <IconButton edge="end" aria-label="edit">
                <EditIcon className={"editOnHover"} onClick={() => onButtonClick('edit')}/>
            </IconButton>
            <IconButton onClick={() => onButtonClick('delete')} edge="end" aria-label="delete">
                <DeleteIcon className={"deleteOnHover"}/>
            </IconButton>
        </>
    )
}