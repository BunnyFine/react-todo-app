import React from "react";
import "./tododate.css";
const ToDoDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const yr = date.getFullYear();
  return (
    <div className="todo-date">
      <div className="todo-month">{month}</div>
      <div className="todo-year">{yr}</div>
      <div className="todo-day">{day}</div>
    </div>
  );
};

export default ToDoDate;
