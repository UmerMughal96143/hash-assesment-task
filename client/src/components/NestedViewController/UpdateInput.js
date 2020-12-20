import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNestedListTasksTitleDueDate } from "../../actions/todo";

const NestedUpdateInput = ({ existingItemId , childId , existingTitle,stateAfterUpdationHandler}) => {
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
      <input className="nested-input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input
      className="nested-input"
      placeholder="Due Date"
        value={dueDate}
        type="date"
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button className="btn btn-success" onClick={addNestedTodoListHandler} >Update</button>
    </div>
  );
};


export default NestedUpdateInput ;
