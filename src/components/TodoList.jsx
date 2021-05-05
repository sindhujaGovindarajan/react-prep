import React from "react";
import "../App.css";
import Todo from "./TodoItem";
import TodoForm from "./TodoForm";
import { addTodo, removeTodo, toggleTodoCompletion } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector(({ todos }) => todos);
    const dispatch = useDispatch();

    const handleAddTodo = text => dispatch(addTodo(text));

    const handleCompletionToggle = index => dispatch(toggleTodoCompletion(index))

    const handleRemoveTodo = index => dispatch(removeTodo(index));
    // useEffect(() => dispatch(fetchTodos), [dispatch]);

    const list = (
        todos.map((todo, index) => (
            <Todo
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
        <div className="todo-list">
            {list}
            {newToDo}
        </div>
    );
}

export default TodoList;