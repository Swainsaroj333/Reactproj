import React from 'react'

export default function Tasklist({tasks, updateTask, deleteTask}) {
    const toggleComlete = (index) => {
   const updatedTask = {...tasks[index], completed: !tasks[index].completed}
   updateTask(updatedTask, index);
  }
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <div>
            <span>{task.text}</span>
            <small>{task.priority} , {task.category}</small>
          </div>
          <div>
            <button onClick={()=>{toggleComlete(index)}}>{task.completed ? "Undo" : "Complete"}</button>
            <button>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}