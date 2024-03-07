import React, { useState } from 'react'

export const TaskForm = ({ onCloseAddTask, onAddNewTask }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [status, setStatus] = useState('')
  return (
    <div className="form">
      <div className="form_header">
        <h1>Add New Task</h1>
        <button className="close" onClick={onCloseAddTask}>
          X
        </button>
      </div>

      <input
        placeholder="Enter Task Name"
        onChange={(event) => setName(event.target.value)}
      />
      <textarea
        placeholder="Enter Task Description"
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        placeholder="Enter Task Deadline"
        onChange={(event) => setDeadline(event.target.value)}
      />
      <input
        placeholder="Enter Task Status"
        onChange={(event) => setStatus(event.target.value)}
      />
      <button
        className="save"
        onClick={() => onAddNewTask({ name, description, deadline, status })}
      >
        Add Task
      </button>
    </div>
  )
}
