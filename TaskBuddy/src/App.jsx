import React, { useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'

export default function App() {

  const[tasks, setTasks] = useState([]);
  
    const addTask = (task) => {
      setTasks(task);
    }
  return (
    <div>
      <h1>TaskBuddy</h1>
      <p><i>Keep Life On Track</i></p>
      <Taskform  addTask = {addTask}/>
      <Tasklist />
      <Progresstracker />
      <button>clear All Tasks</button>
    </div>
  )
}