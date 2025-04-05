import { useReducer } from "react";
import "./App.css";
import { initState, reducer } from "./components/Store/store";
import Input from "./components/Input/Input";

import BtnWrapper from "./components/BtnWrapper/BtnWrapper";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);

  return (
    <div className="input_form_style">
      <h1>Todo List</h1>
      <Input state={state} dispatch={dispatch} />
      <ul>
        {state.todos.map((elem, index) => (
          <BtnWrapper elem={elem} dispatch={dispatch} index={index}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
