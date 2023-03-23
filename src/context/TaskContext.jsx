'use client' // ! poner use client porque es codigo que se ejecuta en el cliente, pero next trata de ejecutarlo desde el servidor
import { createContext, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { useLocalStorage } from '../hooks/useLocalStorage'

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
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const createTask = (title, description) => setTasks(
    [...tasks, { id: uuid(), title, description }]
  )

  const deleteTask = (id) => setTasks(
    [...tasks.filter(task => task.id !== id)]
  )

  const updateTask = (id, newData) => setTasks([...tasks.map((task) => task.id === id ? { ...task, ...newData } : task)])

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>

      {children}

    </TaskContext.Provider>
  )
}
