import React, {useState} from 'react'
import './task.css';



const Task = ({tarea , borrarTarea}) => {
  const [completada , setCompletada] = useState(false)
  return (
    <div className={completada?"containerTarea containerTareaCompletad" : "containerTarea"}>
      <h2 className={completada?"completada" : "noCompletada"}>{tarea.tarea}</h2>
      <button></button>
      <button></button>
    </div>
  )
}

export {Task}