'use client'

import { useTasks } from '../../context/TaskContext'

function About () {
  const { tasks } = useTasks()
  console.log(tasks)

  return (
    <main>
      <div>About page</div>
    </main>
  )
}

export default About
