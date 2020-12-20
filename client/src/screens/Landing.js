import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input";
import NestedDataTable from "../components/NestedViewController/NestedDataTable";
import NestedView from "../components/NestedViewController/NestedView";
import UpdateInput from "../components/NestedViewController/UpdateInput";
import Table from "../components/Table";
import UpdatedInput from "../components/UpdatedInput";

const Landing = ({ existingItemId }) => {
  const [updateState, setUpdateState] = useState(false);
  const [existingTitle, setExistingTitle] = useState("");
  const [existingTitleForNestedTodo, setExistingTitleForNestedTodo] = useState(
    ""
  );
  const [existingIdForNestedTodo, setExistingIdForNestedTodo] = useState("");
  const [existingTodoId, setExistingTodoIdForUpdation] = useState("");
  const [nestedView, setNestedView] = useState(false);
  const [updateInputComponent, setUpdateInputComponent] = useState(false);
  const [
    existingItemIdForNestedView,
    setExistingItemIdForNestedView,
  ] = useState(false);
  //   const dispatch = useDispatch();

  //   console.log('Landing rendered')

  const updateHandler = (data, title, id) => {
    setUpdateState(data);
    setExistingTitle(title);
    setExistingTodoIdForUpdation(id);
  };

  const backToInputHandler = (data) => {
    setUpdateState(data);
  };

  const handleNestedView = (data, existingItemId) => {
    setNestedView(data);
    setExistingItemIdForNestedView(existingItemId);
  };

  const nestedUpdateHandler = (title, id) => {
    setUpdateInputComponent(true);
    setExistingIdForNestedTodo(id);
    setExistingTitleForNestedTodo(title);
    setNestedView(true);
    console.log(title, id);
  };

  const stateAfterUpdationHandler = (data) => {
    setUpdateInputComponent(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 d-flex flex-row align-items-center justify-content-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            {updateState ? (
              <UpdatedInput
                backToInputHandler={backToInputHandler}
                existingTitle={existingTitle}
                listId={existingTodoId}
              />
            ) : (
              <Input />
            )}
            <Table
              updateHandler={updateHandler}
              handleNestedView={handleNestedView}
            />
          </div>
        </div>
        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
          {nestedView && !updateInputComponent ? (
            <NestedView existingItemId={existingItemId} />
          ) : updateInputComponent ? (
            <UpdateInput
              childId={existingIdForNestedTodo}
              existingTitle={existingTitleForNestedTodo}
              existingItemId={existingItemId}
              stateAfterUpdationHandler={stateAfterUpdationHandler}
            />
          ) : (
            ""
          )}
          {nestedView || updateInputComponent ? (
            <NestedDataTable
              existingItemId={existingItemId}
              nestedUpdateHandler={nestedUpdateHandler}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
