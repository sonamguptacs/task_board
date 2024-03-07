import React, { useState } from 'react'

export const StatusForm = ({ onCloseAddStatus, onAddNewStatus }) => {
  const [type, setType] = useState('')
  const [variant, setVariant] = useState('')
  return (
    <div className="form">
      <div className="form_header">
        <h1>Add New Status</h1>
        <button className="close" onClick={onCloseAddStatus}>
          X
        </button>
      </div>

      <input
        placeholder="Enter Status Name"
        onChange={(event) => setType(event.target.value)}
      />
      <input
        placeholder="Enter Status Color"
        onChange={(event) => setVariant(event.target.value)}
      />
      <button
        className="save"
        onClick={() => onAddNewStatus({ type, variant })}
      >
        Add Status
      </button>
    </div>
  )
}
