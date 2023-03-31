import { useRouter } from 'next/navigation'
import { useTasks } from '../context/TaskContext'
import { toast } from 'react-hot-toast'

function TaskCard ({ task }) {
  // * para redireccionar
  const router = useRouter()

  const { deleteTask } = useTasks()

  return (
    <div style={{ background: '#202020', color: 'white', cursor: 'pointer' }} onClick={() => router.push(`/edit/${task.id}`)}>
      <h1>{task.title}</h1>
      <button onClick={(e) => {
        e.stopPropagation()
        const accepted = window.confirm('estas seguro?')
        if (accepted) {
          deleteTask(task.id)
          toast.success('task deleted succesfuly')
        }
      }}
      >Delete
      </button>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskCard
