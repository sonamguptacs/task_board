import React from 'react'
import './task.css'
import { Header } from './Header'
import TaskBoard from './TaskBoard'

export const TaskBoardLayout = () => {
  return (
    <div className="layout">
      <Header />
      <TaskBoard />
    </div>
  )
}
