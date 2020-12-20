import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNestedTodoTasks, updateNestedListTasksTitleDueDate } from "../../actions/todo";

const UpdateInput = ({ existingItemId , childId , existingTitle,stateAfterUpdationHandler}) => {
  const [title, setTitle] = useState(existingTitle);
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  console.log(existingItemId, childId , existingTitle);
  let data = {
    title: title,
    dueDate: dueDate,
  };

  const addNestedTodoListHandler = () => {
    dispatch(updateNestedListTasksTitleDueDate(existingItemId,childId,data));
    setTitle("");
    setDueDate("");
    stateAfterUpdationHandler(false)
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
      <button onClick={addNestedTodoListHandler} >Update</button>
    </div>
  );
};


export default UpdateInput ;
