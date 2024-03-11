import React, { useState } from 'react'

export const TaskForm = ({ onCloseAddTask, onAddNewTask, statusList }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
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
        required
      />
      <textarea
        placeholder="Enter Task Description"
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        placeholder="Enter Task Deadline"
        onChange={(event) => setDeadline(event.target.value)}
      />
      {/* <input
        placeholder="Enter Task Status"
        onChange={(event) => setStatus(event.target.value)}
        required
      /> */}
      <select onChange={(event) => setStatus(event.target.value)}>
        <option key={''}>Select Task Status</option>
        {statusList.map((status) => (
          <option key={status.type}>{status.type}</option>
        ))}
      </select>
      <span className="error">{error}</span>
      <button
        className="save"
        onClick={() => {
          if (!name.trim() || status==='Select Task Status' || !status.trim()) {
            setError('Task Name/Status missing')
          } else {
            onAddNewTask({ name, description, deadline, status })
          }
        }}
      >
        Add Task
      </button>
    </div>
  )
}
