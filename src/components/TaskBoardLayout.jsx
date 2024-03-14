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
  const [taskDetails, setTaskDetails] = useState(null)
  const [duplicateStatusError, setDuplicateStatusError] = useState('')
  const handleAddTask = () => {
    setAddTask(true)
  }
  const handleAddStatus = () => {
    setAddStatus(true)
  }

  const handleAddNewTask = ({ name, description, deadline, status }) => {
    const list = statusList.map((item) => {
      if (
        taskDetails?.isEdit &&
        taskDetails?.progress.toLowerCase() === status.toLowerCase() &&
        item.type.toLowerCase() === status.toLowerCase()
      ) {
        item.taskList[taskDetails.index] = { name, description, deadline }
        return { ...item }
      } else if (
        taskDetails?.isEdit &&
        taskDetails?.progress.toLowerCase() !== status.toLowerCase() &&
        item.type.toLowerCase() === taskDetails?.progress.toLowerCase()
      ) {
        return {
          ...item,
          taskList: item.taskList.filter((_, idx) => idx !== taskDetails?.index),
        }
      }
      if (item.type.toLowerCase() === status.toLowerCase()) {
        return {
          ...item,
          taskList: [...item.taskList, { name, description, deadline }],
        }
      }
      return { ...item }
    })
    setStatusList([...list])
    setTaskDetails(null)
    setAddTask(false)
  }

  const handleAddNewStatus = ({ type, variant }) => {
    const statusExist = statusList.find(
      (item) => item.type.toLowerCase() === type.toLowerCase(),
    )
    setDuplicateStatusError(statusExist ? 'Status already Exist' : '')
    if (!statusExist) {
      setStatusList([...statusList, { type, variant, taskList: [] }])
      setAddStatus(false)
    }
  }

  const handleTaskDrop = (type, draggedCard) => {
    const { type: statusType, cardIndex, task } = draggedCard
    const lists = statusList.map((status) => {
      let newStatus = { ...status }
      if (status.type === statusType) {
        newStatus = {
          ...newStatus,
          taskList: [
            ...newStatus.taskList.filter((_, index) => index !== cardIndex),
          ],
        }
      }
      if (status.type === type) {
        newStatus = { ...newStatus, taskList: [...newStatus.taskList, task] }
      }
      return { ...newStatus }
    })

    setStatusList([...lists])
  }

  const handleTaskDelete = (index, statusType) => {
    setStatusList([
      ...statusList.map((status) => {
        if (status.type === statusType) {
          return {
            ...status,
            taskList: [...status.taskList.filter((_, idx) => idx !== index)],
          }
        }
        return { ...status }
      }),
    ])
  }

  const handleTaskEdit = (index, taskDetails, statusType) => {
    setTaskDetails({
      taskName: taskDetails.name,
      desc: taskDetails.description,
      date: taskDetails.deadline,
      progress: statusType,
      isEdit: true,
      index: index,
    })
    setAddTask(true)
  }

  return (
    <div className="layout">
      <Header onAddNewTask={handleAddTask} onAddNewStatus={handleAddStatus} />
      <TaskBoard
        statusList={statusList}
        handleDrop={handleTaskDrop}
        handleDelete={handleTaskDelete}
        handleEdit={handleTaskEdit}
      />
      {addTask && (
        <TaskForm
          onCloseAddTask={() => {
            setAddTask(false)
          }}
          onAddNewTask={handleAddNewTask}
          statusList={statusList}
          {...taskDetails}
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
