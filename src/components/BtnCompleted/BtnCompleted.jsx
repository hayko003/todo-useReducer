import React from "react";

function BtnCompleted({ dispatch, elem, index }) {
  return (
    <div className="text_wrapper" key={elem.index}>
      <button onClick={() => dispatch({ type: "completed", payload: elem.id })}>
        <img
          className="img_todo"
          src="https://icon-library.com/images/white-eye-icon/white-eye-icon-4.jpg"
          alt=""
        />
      </button>
      <li
        className="li_text"
        style={{
          textDecoration: elem.completed ? "line-through" : "none",
          color: elem.completed ? "grey" : "white",
        }}
        key={index}
      >
        {elem.text}
      </li>
    </div>
  );
}

export default BtnCompleted;
