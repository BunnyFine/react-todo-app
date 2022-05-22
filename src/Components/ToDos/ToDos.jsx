import React from "react";
import Card from "../Card/Card";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./todos.css";
const ToDos = ({ data: objArr }) => {
  return objArr.length ? (
    <Card className="todos">
      {objArr.map((obj) => (
        <ToDoItem
          date={obj.date}
          title={obj.title}
          priority={obj.priority}
          key={obj.id}
        />
      ))}
    </Card>
  ) : null;
};

export default ToDos;
