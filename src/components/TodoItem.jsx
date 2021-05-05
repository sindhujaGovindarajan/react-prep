import React from "react";
import "../App.css";

const Todo = ({ text, isCompleted, index, completeTodo, removeTodo }) => {
    return (
        <div
            className="todo"
            style={{ textDecoration: isCompleted ? "line-through" : "" }}
            onClick={() => completeTodo(index)}
        >
            {text}
            <div>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    );
}

export default Todo;