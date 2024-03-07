import React from 'react'
import './task.css'
import Task from './Task'

export const StateColumn = (props) => {
  return (
    <div className="state_column">
      <div className="caption" style={{ color: props.variant }}>
        {props.type}
      </div>
      <Task
        name="Create Layout"
        description="task is to create layout with a responsive design"
        deadline="8.3.2022"
      />
    </div>
  )
}
