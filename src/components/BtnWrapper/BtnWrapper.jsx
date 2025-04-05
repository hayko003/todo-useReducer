import React from "react";
import BtnCompleted from "../BtnCompleted/BtnCompleted";
import BtnEdit from "../BtnEdit/BtnEdit";
import BtnDelete from "../BtnDelete/BtnDelete";

function BtnWrapper({ elem, dispatch, index }) {
  return (
    <div className="text_wrapper" key={elem.index}>
      <BtnCompleted elem={elem} dispatch={dispatch} index={index} />
      <BtnEdit elem={elem} dispatch={dispatch} />
      <BtnDelete elem={elem} dispatch={dispatch} />
    </div>
  );
}

export default BtnWrapper;
