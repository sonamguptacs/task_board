import React from 'react'

export default function Task(props) {
  return (
    <div className="task_card" draggable={true} onDragStart={props.onDragStart}>
      <div className="name">{props.name}</div>
      <div className="description">{props.description}</div>
      <div className="deadline">{props.deadline}</div>
    </div>
  )
}
