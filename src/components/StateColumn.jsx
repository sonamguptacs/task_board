import React from 'react'
import './task.css'
import Task from './Task'

export const StateColumn = (props) => {
  return (
    <div
      className="state_column"
      onDragOver={props.handleDragOver}
      onDrop={props.handleDrop}
    >
      <div className="caption" style={{ color: props.variant }}>
        {props.type}
      </div>
      {props.taskList.map((taskDetails, index) => (
        <Task
          {...taskDetails}
          onDragStart={() => props.handleDrag(index, taskDetails)}
        />
      ))}
    </div>
  )
}
