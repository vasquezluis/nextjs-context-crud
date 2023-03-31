'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useTasks } from '../../context/TaskContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

function New ({ params }) {
  const { tasks, createTask, updateTask } = useTasks()
  const router = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data)
      toast.success('task updated succesfuly')
    } else {
      createTask(data.title, data.description)
      toast.success('task created succesfuly')
    }

    router.push('/')
  })

  // * comprobar si el formulatio es para editar o crear tareas
  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find(task => task.id === params.id)
      console.log(taskFound)
      if (taskFound) {
        setValue('title', taskFound.title)
        setValue('description', taskFound.description)
      }
    }
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Write a title' {...register('title', { required: true })} />

      {errors.title && (<span>this field is required</span>)}

      <textarea placeholder='Write a description' {...register('description', { required: true })} />

      {errors.description && (<span>this field is required</span>)}

      <button type='submit'>Save</button>
    </form>
  )
}

export default New
