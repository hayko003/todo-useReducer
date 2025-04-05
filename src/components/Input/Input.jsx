import React from 'react'

function Input({state, dispatch}) {
  return (
    <div>
      <input value={state.text} onChange={(e) => dispatch({type: "change", payload: e.target.value})} />
    </div>
  )
}

export default Input