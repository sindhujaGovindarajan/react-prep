import { addTodo, removeTodo, toggleCompleted } from "../utils/todoOperationLogic";

const todosReducer = (todos = [], { type, payload: { text, index } = {} }) => {
    switch (type) {
        case "ADD_TODO":
            return addTodo(todos, { text: text });
        case "REMOVE_TODO":
            return removeTodo(todos, index);
        case "TOGGLE_TODO_COMPLETION":
            return toggleCompleted(todos, index);
        default:
            return todos;
    }
}

export default todosReducer;