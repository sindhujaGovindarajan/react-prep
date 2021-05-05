const addTodo = (list, item) => [...list, item];
const removeTodo = (list, i) => [...list].splice(i, 1);
const toggleCompleted = (list, i) => {
    let newTodos = [...list];
    newTodos[i].isCompleted = !newTodos[i].isCompleted;
    return newTodos;
};

export { addTodo, removeTodo, toggleCompleted };