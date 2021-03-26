import { useState, useEffect } from 'react';
import ToDo from './components/todo';
import Input from './components/input';

function App() {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    fetch(`http://localhost:8080/api/todos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response;
              }
              const error = new Error(`HTTP Error ${response.statusText}`);
              error.status = response.statusText;
              error.response = response;
              console.log(error);
              throw error;
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setToDos(json.data);
        })
        .catch(error => console.log(error));    
  };

  let current_id = todos.length + 1;
  

  const deleteToDo = (id) => {
    fetch(`/api/remove_todo/${id}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }})
      .then(response => {
          if (response.status >= 200 && response.status < 300) {
              return response;
            }
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
      })
      .then(response => response.json())
      .then(json => {
          console.log(json);
          setToDos(json.data);
      })
      .catch(error => console.log(error));
  };

  const submitTodo = (todo) => {
    const newTodo = {
      "userId": 1,
      "id": current_id,
      "title": todo,
      "completed": true
    };

    current_id += 1;
    // add a link to explain the spread operator

    fetch(`/api/add_todo`, {
      method: 'POST',
      body: JSON.stringify({todo: newTodo}),
      headers: {
          'Content-Type': 'application/json'
      }})
      .then(response => {
          if (response.status >= 200 && response.status < 300) {
              return response;
            }
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
      })
      .then(response => response.json())
      .then(json => {
          console.log(json);
          setToDos(json.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="App">
      <Input submitToDo={submitTodo} />
      {todos.map(todo => {
        return (
          <ToDo todo={todo} deleteToDo={deleteToDo} />
        )
      })}
    </div>
  );
}

export default App;
