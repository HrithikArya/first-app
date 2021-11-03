import React, { useState } from 'react'
import './form.css';
function Form() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const addToDo = e => {
        e.preventDefault();
        setTodos([...todos, input]);
        setInput("");
    }
    return (
        <div>
            <h1>Welcom to my ToDO list</h1>
            <form className="form">
                <input type="text"
                value={input} 
                onChange={e =>setInput(e.target.value)} 
                />
                <button type="submit" onClick={addToDo} >Add to do</button>
            </form>

            <div className="todoList">
                <h2>List of ToDos</h2>
                {todos.map((todo) => (
                    <p>{todo}</p>
                ))}
            </div>
        </div>
    )
}

export default Form
