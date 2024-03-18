import React from 'react'

export const Header = ({ onAddNewTask, onAddNewStatus, statusList }) => {
  return (
    <div className={'header'}>
      <div className="sort">
        <div className="sort-group">
          <h3>Sort Task By</h3>
          <input type="radio" id="date" name="task" defaultChecked />
          <label for="date">Deadline</label>
          <input type="radio" id="favourites" name="task" />
          <label for="favourites">Favourites</label>
          <input type="radio" id="name" name="task" />
          <label for="name">Name</label>
        </div>
        <div className="sort-group">
          <h3>In Status</h3>
          {statusList.map((status, index) => (
            <React.Fragment>
              <input
                type="radio"
                id={status.type}
                name="status"
                defaultChecked
              />
              <label for={status.type}>{status.type}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="buttons">
        <button onClick={onAddNewTask}>Add New Task</button>
        <button onClick={onAddNewStatus}>Add New Status</button>
      </div>
    </div>
  )
}
