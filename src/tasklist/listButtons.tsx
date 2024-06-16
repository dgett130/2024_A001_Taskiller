import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from "@mui/material/IconButton";
import * as React from "react";


export function ListButtons () {
    return (
        <>
            <IconButton edge="end" aria-label="info">
                <InfoIcon className={"infoOnHover"}/>
            </IconButton>
            <IconButton edge="end" aria-label="edit">
                <EditIcon className={"editOnHover"}/>
            </IconButton>
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon className={"deleteOnHover"}/>
            </IconButton>
        </>
    )
}