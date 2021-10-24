import { useState } from "react";

const Input = ({ submitToDo }) => {
    const [ newTodo, setNewToDo ] = useState('');

    console.log(newTodo);


    return (
        <>
            <input type="text" value={newTodo} onChange={e => setNewToDo(e.target.value)}></input>
            <button onClick={() => submitToDo(newTodo)}>Submit</button>
        </>
    )
};

export default Input;