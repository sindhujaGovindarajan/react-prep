const addTodo = (text) => ({
    type: "ADD_TODO",
    payload: { text }
});
const removeTodo = (index) => ({
    type: "REMOVE_TODO",
    payload: { index }
});
const toggleTodoCompletion = (index) => ({
    type: "TOGGLE_TODO_COMPLETION",
    payload: { index }
});

export { addTodo, removeTodo, toggleTodoCompletion };