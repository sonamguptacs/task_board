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
  const handleAddTask = () => {
    setAddTask(true)
  }
  const handleAddStatus = () => {
    setAddStatus(true)
  }

  const handleAddNewTask = ({ name, description, deadline }) => {
    console.log({ name })
    const list = statusList.map((item) => {
      if (item.type === 'New') {
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
      {addStatus && <StatusForm />}
    </div>
  )
}
