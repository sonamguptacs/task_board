import React from 'react'
import { StateColumn } from './StateColumn'

export default function TaskBoard() {
  return (
    <div className={'task_board'}>
      <StateColumn />
      <StateColumn />
    </div>
  )
}
