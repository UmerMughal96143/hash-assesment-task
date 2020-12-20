import {
  SET_LOADING,
  GET_ALL_TODO_LIST,
  POST_TODO_LIST,
  SET_ERROR,
  DELETE_TODO_LIST,
  UPDATE_EXISTED_TODO_TITLE,
  POST_NESTED_TODO_TASK,
  GET_TASKS_BY_ID,
  DELETE_NESTED_TASK,
  UPDATE_NESTED_TASKS,
  UPDATE_NESTED_TASKS_TITLE_DUE
} from "./constants";
import Axios from "axios";

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await Axios.get("/");
    dispatch({ type: GET_ALL_TODO_LIST, payload: res.data });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
    console.log(err);
  }
};

export const addTodoList = (data) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await Axios.post(`/`, data);
    dispatch({ type: POST_TODO_LIST, payload: res.data });
    console.log(res.data);
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
    console.log(err);
  }
};

export const deleteTodoList = (id) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await Axios.delete(`/${id}`);
    dispatch({ type: DELETE_TODO_LIST, payload: id });
    console.log(res.data);
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
    console.log(err);
  }
};

export const updateExistingTodoTitle = (data, id) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await Axios.put(`/${id}`, data);
    dispatch({ type: UPDATE_EXISTED_TODO_TITLE, payload: res.data });
    console.log(res.data);
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
    console.log(err);
  }
};


export const getNestedTaskById = (id) => async (dispatch) => {
  dispatch({type : SET_LOADING})

  dispatch({type : GET_TASKS_BY_ID , payload : id})
}





export const postNestedTodoTasks = (itemId, data) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await Axios.put(`/nest/task/${itemId}`, data);
    dispatch({ type: POST_NESTED_TODO_TASK, payload: res.data });
    console.log(res.data);
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
    console.log(err);
  }
};




export const deleteNestedTasks = (parentId, childId) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await Axios.delete(`/nest/task/${parentId}/${childId}`);
    dispatch({ type: DELETE_NESTED_TASK, payload: childId });
    console.log(res.data);
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
    console.log(err);
  }
};



export const updateNestedListTasks = (parentId , childId , data) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await Axios.put(`/update/${parentId}/${childId}`,data);
    dispatch({ type: UPDATE_NESTED_TASKS, payload: childId});
    console.log(res.data);
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
    console.log(err);
  }
}


export const updateNestedListTasksTitleDueDate = (parentId , childId , data) => async (dispatch) => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await Axios.put(`/update/${parentId}/${childId}`,data);
    dispatch({ type: UPDATE_NESTED_TASKS_TITLE_DUE, payload: res.data.todo.nestedTodoList});
    console.log(res.data.todo.nestedTodoList);
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
    console.log(err);
  }
}







