import React, { useState } from 'react'

export const TaskForm = ({
  onCloseAddTask,
  onAddNewTask,
  statusList,
  isEdit,
  taskName,
  desc,
  date,
  progress,
}) => {
  const [name, setName] = useState(taskName ?? '')
  const [description, setDescription] = useState(desc ?? '')
  const [deadline, setDeadline] = useState(date ?? '')
  const [status, setStatus] = useState(progress ?? '')
  const [error, setError] = useState('')

  return (
    <div className="form">
      <div className="form_header">
        <h1>{isEdit ? 'Edit' : 'Add'} New Task</h1>
        <button className="close" onClick={onCloseAddTask}>
          X
        </button>
      </div>

      <input
        placeholder="Enter Task Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <textarea
        name="textarea_field"
        placeholder="Enter Task Description"
        onChange={(event) => setDescription(event.target.value)}
      >
        {description}
      </textarea>
      <input
        value={deadline}
        type="date"
        placeholder="Enter Task Deadline"
        onChange={(event) => setDeadline(event.target.value)}
      />
      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option key={''}>Select Task Status</option>
        {statusList.map((status) => (
          <option key={status.type}>{status.type}</option>
        ))}
      </select>
      <span className="error">{error}</span>
      <button
        className="save"
        onClick={() => {
          if (
            !name.trim() ||
            status === 'Select Task Status' ||
            !status.trim()
          ) {
            setError('Task Name/Status missing')
          } else {
            onAddNewTask({ name, description, deadline, status })
          }
        }}
      >
        {isEdit ? 'Save' : 'Add Task'}
      </button>
    </div>
  )
}
