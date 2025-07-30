import { useState } from 'react'
import './App.css'
import { Task } from './components/task'
import { Form } from './components/Form'


function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleChange = e => {
     setTarea(e.target.value)
  }
  const addtask = e => {
    e.preventDefault();
    if(tarea.trim()===""){
      alert("Debes ingresar algo")
      return;

    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false 
    }
    const totalTareas = [nuevaTarea,...tareas]
    setTareas(totalTareas);
    setTarea("")
    }
  }

  const borrarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => {
      return tarea.id !== id
    })
    setTareas(tareasActualizadas)
  }
  return (
    <>
      <h2>Todolist</h2>
      <Form 
      handleChange = {handleChange}
      addtask = {addtask}
      tarea = {tarea}
      />
      <Task
      key = {tarea.id}
      id = {tarea.id}
      tarea = {tarea}
      borrarTarea = {borrarTarea}
    />
    </>
  )
}

export default App
