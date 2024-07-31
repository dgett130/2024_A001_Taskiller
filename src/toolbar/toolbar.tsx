import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import './toolbar.css';

export function Toolbar() {
    return (
        <div className={"container"}>
            <Fab color="primary" aria-label="add">
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