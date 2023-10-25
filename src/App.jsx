import { useState } from 'react';
import Title from './components/Title';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "cleaning rooms",
      completed: false
    },
    {
      id: 2,
      title: "doing homeworks",
      completed: false
    },
    {
      id: 3,
      title: "going to sports",
      completed: true
    },
  ])

  const handleDelete = (id) => {
    setTodos((prev) => {
      return prev.filter((event) => {
        return event.id !== id
      })
    })
  }

  return (
      <div>
        <Title/>
          <ul className="todo">
            {todos.map((todo) => {
                return (
                  <li key={todo.id}>
                    <h3>{todo.title}</h3>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                  </li>
                )})}
          </ul>
      </div>
  )

}

export default App