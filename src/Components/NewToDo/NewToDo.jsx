import React from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import "./newtodo.css";
const NewToDo = (props) => {
  const getFormData = (formData) => {
    console.log(formData);
    const userToDo = {
      ...formData,
      id: Math.random().toString(),
    };
    props.onDataReceive(userToDo);
  };
  return (
    <div className="new-todo">
      <ToDoForm onSaveClick={getFormData} />
    </div>
  );
};

export default NewToDo;
