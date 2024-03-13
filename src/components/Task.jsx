import React from 'react'
import edit from '../images/edit.svg'
import Delete from '../images/delete.svg'

export default function Task(props) {
  return (
    <div
      className="task_card"
      draggable={true}
      onDragStart={props.onDragStart}
      onTouchStart={props.onDragStart}
    >
      <div className="icons">
        <abbr title="edit">
          <img src={edit} alt="edit" onClick={props.handleEdit} />
        </abbr>
        <abbr title="delete" onClick={props.handleDelete}>
          <img src={Delete} alt="delete" />
        </abbr>
      </div>
      <div className="name">{props.name}</div>
      <div className="description">{props.description}</div>
      <div className="deadline">{props.deadline}</div>
    </div>
  )
}
