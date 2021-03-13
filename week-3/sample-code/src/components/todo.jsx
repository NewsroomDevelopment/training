const ToDo = ({ todo, deleteToDo }) => {
    return (
        <div>
            <span>{todo.title}</span>
            <button onClick={() => deleteToDo(todo.id)}>X</button>
        </div>
    )
};

export default ToDo;