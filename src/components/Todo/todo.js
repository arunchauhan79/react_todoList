import React, { Component } from "react";
import { Input, List, message } from "antd";
import "antd/dist/antd.css";
import ListItem from "../TodoItem/todoItem";
class todo extends Component {
  state = {
    todoList: [],
  };

  handlePressEnter = (e) => {
    const todo = {
      index: this.state.todoList.length,
      content: e.target.value,
      date: null,
      dateString: "",
    };
    const newTodo = this.state.todoList.concat(todo);
    this.setState({ todoList: newTodo });
    e.target.value = "";
  };

  removeTodo = (index) => {
    let newTodos = [...this.state.todoList];
    newTodos.splice(index, 1);

    for (let i = index; i < newTodos.length; i++) {
      newTodos[i].index -= 1;
    }

    this.setState({ todoList: newTodos });
    message.success("To do deleted");
  };

  setDate = (index, date, dateString) => {
    let newTodo = [...this.state.todoList];

    newTodo[index].date = date;
    newTodo[index].dateString = dateString;
    this.setState({ todoList: newTodo });
  };

  render() {
    return (
      <div className="todoContainer">
        <h2>Todo List</h2>
        <Input
          placeholder="Add new todo"
          onPressEnter={this.handlePressEnter}
        />
        <List
          locale={{ emptyText: "No Todo" }}
          dataSource={this.state.todoList}
          renderItem={(item) => (
            <ListItem
              todo={item}
              removeTodo={this.removeTodo}
              setDate={this.setDate}
            ></ListItem>
          )}
        />
      </div>
    );
  }
}

export default todo;
