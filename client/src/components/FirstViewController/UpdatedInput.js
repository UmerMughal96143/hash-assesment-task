import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateExistingTodoTitle } from "../../actions/todo";

const UpdatedInput = ({ existingTitle, listId, backToInputHandler }) => {
  const [title, setTitle] = useState(existingTitle);
  const dispatch = useDispatch();
  let data = {
    title: title,
  };

  const inputHandler = () => {
    dispatch(updateExistingTodoTitle(data, listId));
    setTitle("");
    backToInputHandler(false);
  };

  useEffect(() => {}, []);

  return (
    <div className="d-flex flex-row justify-content-lg-between" style={{ marginTop: "100px" }}>
      <input 
        className="input-el" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button className="btn btn-success" onClick={inputHandler}>Update</button>
    </div>
  );
};

export default UpdatedInput;
