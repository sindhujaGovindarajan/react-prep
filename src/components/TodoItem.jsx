import React from "react";
import styled from 'styled-components';

const StyledList = styled.li`
    list-style: none;
    overflow: hidden;
    width: 100%;
    margin-bottom: 10px;
    display:flex;
`;
const StyledLabel = styled.label`
    flex-grow: 3;
    cursor: pointer
`;
const StyledButton = styled.button`
    background: palevioletred;
    color: #FFF;
    border-radius: 3px;
    border: 2px solid palevioletred;
    padding: 3px 10px;
    outline: none;
    cursor: pointer
`;

const TodoItem = ({ index, text, isCompleted, completeTodo, removeTodo }) => {
    return (
        <StyledList>
            <StyledLabel htmlFor={index}>
                <input type="checkbox" id={index} checked={isCompleted} onChange={() => completeTodo(index)} /> {text}
            </StyledLabel>
            <StyledButton type="button" onClick={() => removeTodo(index)}>X</StyledButton>
        </StyledList>
    );
}

export default TodoItem;