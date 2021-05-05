import React from "react";
import styled from 'styled-components';

const FormInput = styled.input`
    outline: none;
    font-size: 1em;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 10px;
    width: 100%
`;
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                type="text"
                className="input"
                autoFocus={true}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Enter new todo"
            />
        </form>
    );
}

export default TodoForm;