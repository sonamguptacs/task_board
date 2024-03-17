import React from 'react'
import edit from '../images/edit.svg'
import Delete from '../images/delete.svg'
import Favourite from '../images/favourite.svg'
import Favourited from '../images/favourited.svg'

export default function Task(props) {
  return (
    <div
      className="task_card"
      draggable={true}
      onDragStart={props.onDragStart}
      onTouchStart={props.onDragStart}
    >
      <div className="task_header">
        <span className="name">{props.name}</span>
        <div className="icons">
          <abbr
            title={`${props?.favourite ? 'remove from' : 'add to'} Favourites`}
            onClick={props.handleAddToFavourites}
          >
            <img
              src={props?.favourite ? Favourited : Favourite}
              alt={`${props?.favourite ? 'remove from' : 'add to'} Favourites`}
            />
          </abbr>
          <abbr title="edit">
            <img src={edit} alt="edit" onClick={props.handleEdit} />
          </abbr>
          <abbr title="delete" onClick={props.handleDelete}>
            <img src={Delete} alt="delete" />
          </abbr>
        </div>
      </div>
      <div className="description">{props.description}</div>
      <div className="deadline">{props.deadline}</div>
    </div>
  )
}
