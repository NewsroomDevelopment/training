const ToDo = ({ todo, deleteToDo }) => {
    const { id, title } = todo;
    return (
        <div>
            <span>{title}</span>
            <button onClick={() => deleteToDo(id)}>X</button>
        </div>
    )
};

export default ToDo;