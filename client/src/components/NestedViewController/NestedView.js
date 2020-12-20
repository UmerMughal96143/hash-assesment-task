import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNestedTodoTasks } from "../../actions/todo";
// import { addTodoList } from "../actions/todo";
// import { fetchData } from '../redux/actions/todo'

const NestedView = ({ existingItemId }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();
  let data = {
    title: title,
    dueDate: dueDate,
  };

  const addNestedTodoListHandler = () => {
    dispatch(postNestedTodoTasks(existingItemId,data));
    setTitle("");
    setDueDate("");
  };

  return (
    <div className="d-flex flex-row align-items-center justify-content-center" style={{marginTop : '100px'}}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input
      placeholder="Due Date"
        value={dueDate}
        type="date"
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={addNestedTodoListHandler}>Add Todo</button>
    </div>
  );
};

export default NestedView;
