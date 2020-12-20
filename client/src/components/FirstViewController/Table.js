import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoList, getAllTodos } from "../../actions/todo";
import { Link } from "react-router-dom";

const Table = ({ updateHandler, handleNestedView }) => {
  const dispatch = useDispatch();
  const { todos,refresh } = useSelector(
    (state) => state.TodosState
  );

  console.log("table rendered");

  useEffect(() => {
    dispatch(getAllTodos());
    console.log("Run Table Useefeect");
  }, [refresh]);

  const updateListHandler = (title, id) => {
    updateHandler(true, title, id);
  };

  const nestedViewHandler = (existingItemId) => {
    handleNestedView(true, existingItemId);
  };

  return (
    <table className="table table-dark" style={{ marginTop: "150px" }}>
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
          <th scope="col">Add Task</th>
        </tr>
      </thead>

      <tbody>
        {todos?.todos?.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.title}</td>
              <td onClick={() => updateListHandler(item.title, item._id)}>
                <i className="far fa-edit" style={{ cursor: "pointer" }}></i>
              </td>
              <td onClick={() => dispatch(deleteTodoList(item._id))}>
                <i
                  className="fas fa-backspace"
                  style={{ color: "red", cursor: "pointer" }}
                ></i>
              </td>

              <td onClick={() => nestedViewHandler(item._id)}>
                <Link to={`/?item_id=${item._id}`}>
                  <i
                    className="far fa-plus-square"
                    style={{ color: "green", cursor: "pointer" }}
                  ></i>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
