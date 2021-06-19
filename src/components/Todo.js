import React from 'react';
import {List, ListItem, ListItemText} from "@material-ui/core";
import db from '../firebase';
import "./todo.css"
import {Button} from "@material-ui/core"
import DeleteForeverIcon  from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={props.todo.task} secondary="Dummy deadline" />
                <DeleteForeverIcon className="todo__remove" onClick ={event => {db.collection('todos').doc(props.todo.id).delete()}} />
            </ListItem>
            
        </List>
    )
}

export default Todo;
