import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import './tasklist.css';
import {ListButtons} from "./listButtons";
import LinearWithValueLabel from "../shared/progressBar";


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({theme}) => ({
    backgroundColor: '#627C85',
    //border: '2px solid red',
    color: '#0e1215',
    borderRadius: 20,
}));


export function Tasklist() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <div>
            <h2>Tasklist</h2>
            <Box sx={{p: 2}}>
                <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                    Da Fare per oggi
                </Typography>
                <Demo>
                    <List dense={dense}>
                        {generate(
                            <ListItem
                                secondaryAction={
                                    <ListButtons />
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar className={"avatarIcon"}>
                                        <FolderIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <div className={"tasklist-inner-body"}>
                                    <ListItemText
                                        primary="Single line element"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    <LinearWithValueLabel width='50%' progress='70'/>
                                </div>
                            </ListItem>,
                        )}
                    </List>
                </Demo>
            </Box>
        </div>
    );
}
