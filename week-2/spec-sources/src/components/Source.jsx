function Source(props){
    return(
        <div class="src-item">
            <p class="number">{ props.number }</p>
            <p class="name">{ props.name }</p>
            <p class = "email">{ props.email }</p>
            <button type="Delete">Delete</button>
        </div>
    );
}

export default Source; 