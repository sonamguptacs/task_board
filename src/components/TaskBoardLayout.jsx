import React from 'react'
import './task.css';
import { StateColumn } from './StateColumn';

export const TaskBoardLayout=()=> {
  return (
      <div className="layout">
          <div className={'header'}></div>
          <div className={'task_board'}>
              <StateColumn />
              <StateColumn />
          </div>

    </div>
  )
}
