import React from 'react'

export const Header = ({ onAddNewTask, onAddNewStatus }) => {
  return (
    <div className={'header'}>
      <button onClick={onAddNewTask}>Add New Task</button>
      <button onClick={onAddNewStatus}>Add New Status</button>
    </div>
  )
}
