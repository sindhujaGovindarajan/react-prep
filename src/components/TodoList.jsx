import React from "react";
import styled from 'styled-components';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { addTodo, removeTodo, toggleTodoCompletion } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const StyledUl = styled.ul`
    padding:0
`;
const TodoList = () => {
    const todos = useSelector(({ todos }) => todos);
    const dispatch = useDispatch();

    const handleAddTodo = text => dispatch(addTodo(text));

    const handleCompletionToggle = index => dispatch(toggleTodoCompletion(index))

    const handleRemoveTodo = index => dispatch(removeTodo(index));
    // useEffect(() => dispatch(fetchTodos), [dispatch]);

    const list = (
        todos.map((todo, index) => (
            <TodoItem
                key={index}
                index={index}
                {...todo}
                completeTodo={handleCompletionToggle}
                removeTodo={handleRemoveTodo}
            />
        ))
    );
    const newToDo = <TodoForm addTodo={handleAddTodo} />;

    return (
        <>
            {newToDo}
            <StyledUl>
                {list}
            </StyledUl>
        </>
    );
}

export default TodoList;