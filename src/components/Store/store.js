export const initState = {
  text: "",
  todos: [],
  id: Date.now(),
  isEdit: null,
  completed: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        text: action.payload,
      };
    case "text":
      if (state.text.trim() === "") return state;

      if (state.isEdit !== null) {
        return {
          ...state,
          todos: state.todos.map((elem) => {
            return elem.id === state.isEdit
              ? { ...elem, text: state.text }
              : elem;
          }),
          text: "",
          isEdit: null,
        };
      }
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: state.text,
          },
        ],
        text: "",
        isEdit: null,
      };

    case "edit":
      return {
        text: "",
        ...state,
        text: action.payload.text,
        isEdit: action.payload.id,
      };

    case "delete":
      return {
        ...state,
        todos: state.todos.filter((elem) => {
          return elem.id !== action.payload;
        }),
      };
      case "completed":
        return {
          ...state,
          todos: state.todos.map((elem) => {
            return elem.id == action.payload ? {...elem, completed: !elem.completed} : elem
          })
        }
    default:
      return state;
  }
};
