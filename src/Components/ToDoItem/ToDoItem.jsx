import React from "react";
import ToDoDate from "../ToDoDate/ToDoDate";
import "./todoitem.css";
const ToDoItem = ({ title, date, priority }) => {
  return (
    <div className="todo-item">
      <ToDoDate date={date} />
      <div className="todo-description">
        <h2>{title}</h2>
        <div className="todo-priority">{priority}</div>
      </div>
    </div>
  );
};

export default ToDoItem;
