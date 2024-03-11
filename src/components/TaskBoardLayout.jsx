import React, { useState } from 'react'
import './task.css'
import { Header } from './Header'
import TaskBoard from './TaskBoard'
import { TaskForm } from './TaskForm'
import { StatusForm } from './statusForm'

export const TaskBoardLayout = () => {
  const [addTask, setAddTask] = useState(false)
  const [addStatus, setAddStatus] = useState()
  const [statusList, setStatusList] = useState([
    { type: 'New', variant: 'Blue', taskList: [] },
  ])
  const [duplicateStatusError, setDuplicateStatusError] = useState('')
  const handleAddTask = () => {
    setAddTask(true)
  }
  const handleAddStatus = () => {
    setAddStatus(true)
  }

  const handleAddNewTask = ({ name, description, deadline, status }) => {
    const list = statusList.map((item) => {
      if (item.type.toLowerCase() === status.toLowerCase()) {
        return {
          ...item,
          taskList: [...item.taskList, { name, description, deadline }],
        }
      }
      return { ...item }
    })
    setStatusList([...list])
    setAddTask(false)
  }

  const handleAddNewStatus = ({ type, variant }) => {
    const statusExist = statusList.find((item) => item.type.toLowerCase() === type.toLowerCase())
    setDuplicateStatusError(statusExist?'Status already Exist':'')
    if (!statusExist) {
      setStatusList([...statusList, { type, variant, taskList: [] }])
      setAddStatus(false)
    }
  }

  return (
    <div className="layout">
      <Header onAddNewTask={handleAddTask} onAddNewStatus={handleAddStatus} />
      <TaskBoard statusList={statusList} />
      {addTask && (
        <TaskForm
          onCloseAddTask={() => {
            setAddTask(false)
          }}
          onAddNewTask={handleAddNewTask}
        />
      )}
      {addStatus && (
        <StatusForm
          onCloseAddStatus={() => setAddStatus(false)}
          onAddNewStatus={handleAddNewStatus}
          duplicateStatus={duplicateStatusError}
        />
      )}
    </div>
  )
}
