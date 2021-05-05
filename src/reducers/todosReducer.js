const todosReducer = (todos = [], { type, payload: { text, index } = {} }) => {
    let newTodos = [...todos];

    switch (type) {
        case "ADD_TODO":
            return [...todos, { text: text }];
        case "REMOVE_TODO":
            newTodos.splice(index, 1);
            return newTodos;
        case "TOGGLE_TODO_COMPLETION":
            newTodos[index].isCompleted = !newTodos[index].isCompleted;
            return newTodos;
        default:
            return todos;
    }
}

export default todosReducer;