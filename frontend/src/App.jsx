import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { RenderTodos } from './components/RenderTodos'

function App() {
const [todos,setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    // console.log(json);
    setTodos(json.todoList)
  })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <RenderTodos todos={todos}></RenderTodos>
    </div>
  )
}

export default App
