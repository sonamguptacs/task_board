import React, { useState } from 'react'

export const StatusForm = ({ onCloseAddStatus, onAddNewStatus,duplicateStatus }) => {
  const [type, setType] = useState('')
  const [variant, setVariant] = useState('')
  const [error, setError] = useState('')
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
        required
      />
      <input
        placeholder="Enter Status Color"
        onChange={(event) => setVariant(event.target.value)}
      />
       <span className="error">{duplicateStatus??error}</span>
      <button
        className="save"
        onClick={() => { if (!type.trim()) { setError('Status Name not entered')} else onAddNewStatus({ type, variant })}}
      >
        Add Status
      </button>
    </div>
  )
}
