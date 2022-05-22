import React, { useState } from "react";
import "./App.css";
import ToDos from "./Components/ToDos/ToDos";
import NewToDo from "./Components/NewToDo/NewToDo.jsx";
function App() {
  const [objArr, setObjArr] = useState([]);
  const dataSaveHandler = (userToDo) => {
    console.log(userToDo);
    setObjArr((prevArr) => {
      return [userToDo, ...prevArr];
    });
  };
  return (
    <div>
      <NewToDo onDataReceive={dataSaveHandler} />
      <ToDos data={objArr} />
    </div>
  );
}

export default App;
