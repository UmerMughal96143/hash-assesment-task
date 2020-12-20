import {
  DELETE_TODO_LIST,
  GET_ALL_TODO_LIST,
  GET_TASKS_BY_ID,
  POST_NESTED_TODO_TASK,
  POST_TODO_LIST,
  SET_ERROR,
  SET_LOADING,
  UPDATE_EXISTED_TODO_TITLE,
  DELETE_NESTED_TASK,
  UPDATE_NESTED_TASKS,
  UPDATE_NESTED_TASKS_TITLE_DUE,
} from "../actions/constants";

const initialState = {
  loading: false,
  todos: {},
  error: {},
  nestedTaskData: null,
  refresh : false 
};

export const TodosState = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        refresh : true 
      };
    case GET_ALL_TODO_LIST:
      return {
        ...state,
        loading: false,
        todos: payload,
      };
    case POST_TODO_LIST:
      return {
        ...state,
        todos: { ...state.todos, todos: payload },
        loading: false,
      };
    case DELETE_TODO_LIST:
      console.log(payload);
      return {
        ...state,
        todos: {
          ...state.todos,
          todos: state.todos.todos.filter((item) => item._id !== payload),
        },
        loading: false,
      };
    case UPDATE_EXISTED_TODO_TITLE:
      return {
        ...state,
        loading: false,
        todos: { ...state.todos, todos: payload },
      };
    case POST_NESTED_TODO_TASK:
      return {
        ...state,
        nestedTaskData: payload,
        loading: false,
      };
    case GET_TASKS_BY_ID:
      const item = payload;
      const existingItem = state.todos?.todos?.find(
        (item) => item._id == payload
      );
      console.log(existingItem);

      return {
        ...state,
        loading: false,
        nestedTaskData: existingItem?.nestedTodoList,
        refresh : false 
      };
    case DELETE_NESTED_TASK:
      return {
        ...state,
        loading: false,
        nestedTaskData: [
          ...state.nestedTaskData.filter((item) => item._id !== payload),
        ],
      };
    case UPDATE_NESTED_TASKS:
      const searchedObject = state.nestedTaskData.find(
        (item) => item._id == payload
      );
      searchedObject.markAsDone = true;
      return {
        ...state,
        loading: false,
      };
      case UPDATE_NESTED_TASKS_TITLE_DUE : 
      console.log(payload)
      return {
        ...state ,
        loading : false,
        nestedTaskData : [...payload]
      }
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
