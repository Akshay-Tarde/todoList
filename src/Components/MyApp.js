import React from "react";
import TodoItem from "./TodoItem";
import todosData from "../todosData.js";

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodo = prevState.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return {
        todos: updatedTodo,
      };
    });
  }

  render() {
    const todoComponent = this.state.todos.map((item) => (
      <TodoItem
        handleChange={this.handleChange}
        key={item.id}
        todosData={item}
      />
    ));
    return (
      <div className="AppStyle">
        <div className="card">{todoComponent}</div>
      </div>
    );
  }
}

export default MyApp;
