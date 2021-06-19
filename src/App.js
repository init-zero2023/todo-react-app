import './App.css';
import React, { useState,useEffect }from "react";
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from "./components/Todo";
import db from "./firebase";
import firebase  from 'firebase';


function App() {

    const [todos, addTodos] = useState([]);
    const [input, setInput] = useState("");

    // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
    useEffect(()=>{
        //this code here.. fires wgen the app.js loads
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
            // console.log(snapshot.docs.map(doc=> doc.data().task))  // grabs data from firebase
            addTodos(snapshot.docs.map(doc=> ({id: doc.id, task: doc.data().task})))
        })
    },[]);

    // console.log(input);

    const addTodo = (event)=>{
        event.preventDefault();
        // this will fire off when we click the button!!
        // console.log('This is working');
        db.collection('todos').add({
            task: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }

    return ( 
        <div className = "App">
        <h1>Hello World</h1>
        <form>
            <FormControl>
                <InputLabel>Write a todo</InputLabel>
                <Input onChange={event => setInput(event.target.value)}   value={input} />
            </FormControl>
            <Button variant="contained" color="primary" onClick={addTodo} disabled = {!input}>
                Add Todo
            </Button>
        </form>
        
        <ul>
            {todos.map(todo => <Todo todo={todo} />)}
        </ul>
        </div>
    );
}

export default App;