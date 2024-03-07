import React from 'react'
import { StateColumn } from './StateColumn'

export default function TaskBoard({ statusList }) {
  return (
    <div className={'task_board'}>
      {statusList.map(({ type, taskList, variant }) => {
        return <StateColumn type={type} variant={variant} taskList={taskList} />
      })}
    </div>
  )
}
