'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTasks } from '../../context/TaskContext'

function New ({ params }) {
  const { tasks, createTask, updateTask } = useTasks()
  const [task, setTask] = useState({ title: '', description: '' })
  const router = useRouter()

  const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {
      updateTask(params.id, task)
    } else {
      createTask(task.title, task.description)
    }

    router.push('/')
  }

  // * comprobar si el formulatio es para editar o crear tareas
  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find(task => task.id === params.id)
      console.log(taskFound)
      if (taskFound) {
        setTask({ title: taskFound.title, description: taskFound.description })
      }
    }
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' type='text' placeholder='Write a title' onChange={handleChange} value={task.title} />
      <textarea name='description' placeholder='Write a description' onChange={handleChange} value={task.description} />
      <button type='submit'>Save</button>
    </form>
  )
}

export default New
