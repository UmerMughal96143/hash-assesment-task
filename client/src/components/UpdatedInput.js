import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoList, updateExistingTodoTitle } from "../actions/todo";
// import { fetchData } from '../redux/actions/todo'

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
