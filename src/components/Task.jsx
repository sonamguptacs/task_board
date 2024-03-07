import React from 'react'

export default function Task(props) {
  return (
    <div className="task_card">
      <div className="name">{props.name}</div>
      <div className="description">{props.description}</div>
      <div className="deadline">{props.deadline}</div>
    </div>
  )
}
