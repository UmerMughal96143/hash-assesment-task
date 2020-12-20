import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoList } from "../actions/todo";
// import { fetchData } from '../redux/actions/todo'

const Input = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  let data = {
    title: title,
  };

  const inputHandler = () => {
    dispatch(addTodoList(data));
    setTitle("");
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={inputHandler}>Add Todo</button>
    </div>
  );
};

export default Input;
