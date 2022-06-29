
export const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos:[...state.todos,action.payload]
      };
    case "REMOVE_ALL_TODO":
        return{
            ...state,
            todos:[],
            completed_todos:[]
        }
    case "DELETE_TODO":
        return{
            ...state,
            todos: state.todos.filter((todo)=> todo.id !== action.payload)
        }
    case "DELETE_COMPLETED_TODO":
        return{
            ...state,
            completed_todos: state.completed_todos.filter((todo)=> todo.id !== action.payload)
        }
    case "EDIT_TODO":
        return{
            ...state,
            todos: state.todos.map((todo)=> todo.id === action.payload.id ? action.payload: todo)
        }
    case "COMPLETE_TODO":
        return{
            ...state,
            todos: state.todos.filter((todo)=> todo.id !== action.payload.id),
            completed_todos: [...state.completed_todos,action.payload],
        }
    case "UNCOMPLETE_TODO":
        return{
            ...state,
            completed_todos: state.completed_todos.filter((todo)=> todo.id !== action.payload.id),
            todos: [...state.todos,action.payload],
        }
    default:
      return state;
  }
};
