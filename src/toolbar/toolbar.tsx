import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import './toolbar.css';
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useAtom } from "jotai";
import {addDialogAtom} from "../App";

export function Toolbar() {

    const [addTodoDialogAtom, setAddTodoDialog] = useAtom(addDialogAtom);

    function handleAddTodo() {
        setAddTodoDialog(true);
    }

    return (
        <div className={"container"}>
            <Fab color="primary" aria-label="add" onClick={handleAddTodo}>
                <AddIcon />
            </Fab>
            <Fab color="primary" aria-label="Calendar">
                <CalendarMonthIcon />
            </Fab>
            <Fab color="primary" aria-label="settings">
                <SettingsIcon />
            </Fab>
        </div>
    )

}