import React from 'react'

const Form = ({handleChange , addtask , tarea}) => {
  return (
    <div>
        <form onSubmit={addtask}>
          <input type="text" value={tarea} placeholder="Ingresa la tarea" onChange={handleChange} />
          <button type="submit">Agregar</button>
        </form>
    </div>
  )
}

export {Form}