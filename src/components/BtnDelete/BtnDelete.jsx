import React from "react";

function BtnDelete({elem, dispatch}) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: "delete",
          payload: elem.id,
        })
      }
    >
      Delete
    </button>
  );
}

export default BtnDelete;
