import React, { useState } from "react";
import "./todoform.css";
const ToDoForm = (props) => {
  var utc = new Date().toJSON().slice(0, 10);
  const [userInput, setUserInput] = useState({
    title: "",
    date: utc,
    priority: "Medium",
  });
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState(null);
  // const [priority, setPriority] = useState("");
  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };
  const dateChangeHandler = (e) => {
    console.log(e.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value,
      };
    });
  };
  const priorityChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        priority: e.target.value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInput.date);
    props.onSaveClick({ ...userInput, date: new Date(userInput.date) });
    setUserInput({
      title: "",
      date: utc,
      priority: "Medium",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="todo-controls">
        <div className="todo-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={userInput.title}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="todo-control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="todo-control">
          <label htmlFor="priority">Priority</label>
          <select onChange={priorityChangeHandler} value={userInput.priority}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      <div className="todo-actions">
        <button className="btn" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
