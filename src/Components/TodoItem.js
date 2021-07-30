import React from "react";

function TodoItem(props) {
  const completedList = {
    color: "#cdcdcd",
    textDecoration: "line-through",
    fontStyle: "italic",
  };
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={props.todosData.completed}
        className="button"
        onChange={() => props.handleChange(props.todosData.id)}
      />
      <p
        className="text"
        style={props.todosData.completed ? completedList : null}
      >
        {props.todosData.text}
      </p>
    </div>
  );
}

export default TodoItem;
