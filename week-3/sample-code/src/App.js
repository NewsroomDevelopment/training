import { useState } from 'react';
import ToDo from './components/todo';
import Input from './components/input';

function App() {
  // destructuring
  const animals = ["pig", "cow", "chicken"];
  let [ pig, cow ] = animals;
  pig = animals[0];
  cow = animals[1];
  console.log(pig);
  // "pig"

  const [todos, setToDos] = useState([]);

    let current_id = todos.length + 1;

    console.log(todos);
    console.log(setToDos);

    const deleteToDo = (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);

      setToDos(newTodos);
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

      setToDos([...todos, newTodo]);
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
