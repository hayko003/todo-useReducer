import React from "react";

function BtnEdit({elem, dispatch}) {
  return (
    <button
      onClick={() =>
        dispatch({
          type: "edit",
          payload: { id: elem.id, text: elem.text },
        })
      }
    >
      Edit
    </button>
  );
}

export default BtnEdit;
