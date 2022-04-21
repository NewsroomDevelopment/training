const Source = ({number, name, email, deleteSource}) => {
    return(
        <div>
            <p>{ number }</p>
            <p>{ name }</p>
            <p>{ email }</p>
            <button type="Delete" onClick= {() => deleteSource(number)}>Delete</button>
        </div>
    )
};

export default Source; 