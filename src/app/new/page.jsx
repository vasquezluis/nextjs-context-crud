'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useTasks } from '../../context/TaskContext'

function New () {
  const { createTask } = useTasks()
  const [task, setTask] = useState()
  const router = useRouter()

  const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    createTask(task.title, task.description)

    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' type='text' placeholder='Write a title' onChange={handleChange} />
      <textarea name='description' placeholder='Write a description' onChange={handleChange} />
      <button type='submit'>Save</button>
    </form>
  )
}

export default New
