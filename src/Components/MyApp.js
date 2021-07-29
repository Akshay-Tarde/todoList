import React from "react";
import TodoItem from "./TodoItem";
import todosData from "../todosData.js";

function MyApp() {
  const todoComponent = todosData.map((item) => (
    <TodoItem key={item.id} todosData={item} />
  ));
  return (
    <div className="AppStyle">
      <div className="card">{todoComponent}</div>
    </div>
  );
}

export default MyApp;
