'use client'
import { useTasks } from '../context/TaskContext'

import TaskCard from '../components/TaskCard'

function Page () {
  const { tasks } = useTasks()
  console.log(tasks)

  return (

    <main>

      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}

    </main>

  )
}

export default Page
