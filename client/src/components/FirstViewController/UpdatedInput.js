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
    <div style={{ marginTop: "100px" }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={inputHandler}>Update</button>
    </div>
  );
};

export default UpdatedInput;
