import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNestedTodoTasks } from "../../actions/todo";

const NestedView = ({ existingItemId }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();
  let data = {
    title: title,
    dueDate: dueDate,
  };

  const addNestedTodoListHandler = () => {
    dispatch(postNestedTodoTasks(existingItemId, data));
    setTitle("");
    setDueDate("");
  };

  return (
    <div
      className="d-flex flex-row align-items-center justify-content-justify-content-around"
      style={{ marginTop: "100px" }}
    >
      <input
        className="nested-input"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="nested-input"
        placeholder="Due Date"
        value={dueDate}
        type="date"
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={addNestedTodoListHandler} className="btn btn-success">
        Add Todo
      </button>
    </div>
  );
};

export default NestedView;
