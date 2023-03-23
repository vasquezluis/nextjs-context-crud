import { useRouter } from 'next/navigation'

function TaskCard ({ task }) {
  // * para redireccionar
  const router = useRouter()

  return (
    <div style={{ background: '#202020', color: 'white', cursor: 'pointer' }} onClick={() => router.push(`/edit/${task.id}`)}>
      <h1>{task.title}</h1>
      <button>Delete</button>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskCard
