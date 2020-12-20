import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoList } from "../../actions/todo";

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
    <div
      style={{ marginTop: "100px" }}
      className="d-flex flex-row justify-content-lg-between"
    >
      <input
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-el"
      />
      <button onClick={inputHandler} className="btn btn-success">
        Add Todo
      </button>
    </div>
  );
};

export default Input;
