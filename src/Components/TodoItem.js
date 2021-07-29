import React from "react";

function TodoItem(props) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={props.todosData.completed}
        className="button"
      />
      <p className="text">{props.todosData.text}</p>
    </div>
  );
}

export default TodoItem;
