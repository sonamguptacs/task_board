import React, { useState } from 'react'
import { StateColumn } from './StateColumn'

export default function TaskBoard({
  statusList,
  handleDrop,
  handleEdit,
  handleDelete,
  handleAddToFavourites,
}) {
  const [draggedCard, setDraggedCard] = useState(null)

  const handleTaskDrag = (type, cardIndex, task) => {
    setDraggedCard({ type, cardIndex, task })
  }

  return (
    <div className={'task_board'}>
      {statusList.map(({ type, taskList, variant }) => {
        return (
          <StateColumn
            type={type}
            variant={variant}
            taskList={taskList}
            handleDrag={(cardIndex, task) =>
              handleTaskDrag(type, cardIndex, task)
            }
            handleDragOver={(event) => event.preventDefault()}
            handleDrop={() => handleDrop(type, draggedCard)}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleAddToFavourites={handleAddToFavourites}
          />
        )
      })}
    </div>
  )
}
