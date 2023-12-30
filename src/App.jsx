import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import AddItem from "./components/AddItem"
import './App.css'

function App() {

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <AddItem></AddItem>
    </center>
  )
}

export default App
