import { useReducer } from "react";
import "./App.css";
import { initState, reducer } from "./components/Store/store";
import Input from "./components/Input/Input";
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);

  return (
    <div className="input_form_style">
      <h1>Todo List</h1>
      <div className="wrapper_input">
        <Input state={state} dispatch={dispatch} />
        <button onClick={() => dispatch({ type: "text" })}>
          {state.isEdit !== null ? "Save" : "Add"}
        </button>
      </div>
      <ul>
        {state.todos.map((elem, index) => (
          <div className="text_wrapper" key={elem.index}>
            <button onClick={() => dispatch({type: "completed", payload: elem.id })}><img className="img_todo" src="https://icon-library.com/images/white-eye-icon/white-eye-icon-4.jpg" alt="" /></button>
            <li className="li_text" style={{textDecoration: elem.completed ? "line-through" : "none", 
              color: elem.completed ? "grey" : "white"
            }} key={index}>
              {elem.text}
            </li>
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
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
