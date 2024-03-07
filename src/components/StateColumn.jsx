import React from 'react'
import './task.css'
import Task from './Task'

export const StateColumn = (props) => {
  return (
    <div className="state_column">
      <div className="caption" style={{ color: props.variant }}>
        {props.type}
      </div>
      {props.taskList.map((taskDetails) => (
        <Task {...taskDetails} />
      ))}
    </div>
  )
}
