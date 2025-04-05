import React from "react";

function Input({ state, dispatch }) {
  return (
    <div className="wrapper_input">
      <input
        value={state.text}
        onChange={(e) => dispatch({ type: "change", payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "text" })}>
        {state.isEdit !== null ? "Save" : "Add"}
      </button>
    </div>
  );
}

export default Input;
