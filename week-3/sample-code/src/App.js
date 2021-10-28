import { useState, useEffect } from 'react';
import ToDo from './components/todo';
import Input from './components/input';

function App() {
  const [todos, setToDos] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = async () => {
    // fetch(`/api/todos`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }})
    //     .then(response => {
    //         if (response.status >= 200 && response.status < 300) {
    //             return response;
    //           }
    //           const error = new Error(`HTTP Error ${response.statusText}`);
    //           error.status = response.statusText;
    //           error.response = response;
    //           console.log(error);
    //           throw error;
    //     })
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json);
    //         setToDos(json.data);
    //     })
    //     .catch(error => console.log(error));    

    // From 10/27 lecture
    setToDos([{id: 1, title: "todo"}]);
  };

  let current_id = todos.length + 1;
  

  const deleteToDo = (id) => {
    // From 10/27 lecture
    const newTodoList = todos.filter(todo => todo.id !== id);

    setToDos(newTodoList);




    // fetch(`/api/remove_todo/${id}`, {
    //   method: 'POST',
    //   headers: {
    //       'Content-Type': 'application/json'
    //   }})
    //   .then(response => {
    //       if (response.status >= 200 && response.status < 300) {
    //           return response;
    //         }
    //         const error = new Error(`HTTP Error ${response.statusText}`);
    //         error.status = response.statusText;
    //         error.response = response;
    //         console.log(error);
    //         throw error;
    //   })
    //   .then(response => response.json())
    //   .then(json => {
    //       console.log(json);
    //       setToDos(json.data);
    //   })
    //   .catch(error => console.log(error));
  };

  const submitTodo = (todo) => {
    // From 10/27 lecture
    const newTodo = {
      "userId": 1,
      "id": current_id,
      "title": todo,
      "completed": true
    };

    current_id += 1;

    setToDos([...todos, newTodo]);

    // fetch(`/api/add_todo`, {
    //   method: 'POST',
    //   body: JSON.stringify({todo: newTodo}),
    //   headers: {
    //       'Content-Type': 'application/json'
    //   }})
    //   .then(response => {
    //       if (response.status >= 200 && response.status < 300) {
    //           return response;
    //         }
    //         const error = new Error(`HTTP Error ${response.statusText}`);
    //         error.status = response.statusText;
    //         error.response = response;
    //         console.log(error);
    //         throw error;
    //   })
    //   .then(response => response.json())
    //   .then(json => {
    //       console.log(json);
    //       setToDos(json.data);
    //   })
    //   .catch(error => console.log(error));
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
