'use client' // ! poner use client porque es codigo que se ejecuta en el cliente, pero next trata de ejecutarlo desde el servidor
import { createContext, useContext } from 'react'

// * este contiene los datos
export const TaskContext = createContext()

// * hook para simplificar la obtencion de datos en otras paginas
export
const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTask must used within a provider')
  return context
}

// * provider
// ? va a recibir los hijos (paginas)
// * este provee las funciones
export const TaskProvider = ({ children }) => {
  const tareas = [
    {
      id: 1,
      title: 'my first task',
      description: 'some task'
    },
    {
      id: 2,
      title: 'my second task',
      description: 'some second task'
    },
    {
      id: 3,
      title: 'my third task',
      description: 'some third task'
    },
    {
      id: 4,
      title: 'my fourth task',
      description: 'some fourth task'
    }
  ]

  return (
    <TaskContext.Provider value={{ tasks: tareas }}>

      {children}

    </TaskContext.Provider>
  )
}
