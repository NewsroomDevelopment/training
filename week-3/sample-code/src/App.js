import { useState } from 'react';
import ToDo from './components/todo';
import Input from './components/input';

function App() {
  const [todos, setToDos] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    }]);

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
