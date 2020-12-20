import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteNestedTasks, getNestedTaskById, updateNestedListTasks } from "../../actions/todo";
import Moment from "react-moment";

const NestedDataTable = ({ existingItemId , nestedUpdateHandler}) => {
  const dispatch = useDispatch();
  const { nestedTaskData, loading, error } = useSelector(
    (state) => state.TodosState
  );

  useEffect(() => {
    dispatch(getNestedTaskById(existingItemId));
  }, [existingItemId]);

  const deleteTaskHandler = (id) => {
    dispatch(deleteNestedTasks(existingItemId, id));
  };

   let data = {
     markAsDone : true
   }

  const markAsDoneHandler  = (id) => {
    dispatch(updateNestedListTasks(existingItemId , id , data))
  }

  const updateExistedTodoNestedTask = (title,id) => {
    console.log('update edit run')
    nestedUpdateHandler(title,id)
  }
  return (
    <table class="table table-dark" style={{ marginTop: "150px" }}>
      <thead>
        <tr>
          <th scope="col">Mark As Done</th>
          <th scope="col">Title</th>
          <th scope="col">Date</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>

      <tbody>
        {nestedTaskData &&
          nestedTaskData?.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  {item.markAsDone ? (
                    <i
                      class="far fa-check-circle"
                      style={{ cursor: "pointer", color: "green" }}
                      
                    ></i>
                  ) : (
                    <i class="fas fa-times" style={{cursor: "pointer"}} onClick={() => markAsDoneHandler(item._id)}></i>
                  )}
                </td>
                <td>{item.title}</td>
                <td>{<Moment date={item.dueDate} />}</td>
                <td onClick={() => updateExistedTodoNestedTask(item.title , item._id)}>
                  <i class="far fa-edit" style={{ cursor: "pointer" }}></i>
                </td>
                <td onClick={() => deleteTaskHandler(item._id)}>
                  <i
                    class="fas fa-backspace"
                    style={{ color: "red", cursor: "pointer" }}
                  ></i>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default NestedDataTable;
