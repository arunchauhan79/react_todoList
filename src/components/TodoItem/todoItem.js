import React, { Component } from "react";
import { List, Popconfirm, DatePicker, Empty } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
class todoItem extends Component {
  remove = (index) => {
    this.props.removeTodo(this.props.todo.index);
  };
  cancel = () => {};
  handleDateChange = (date, dateString) => {
    this.props.setDate(this.props.todo.index, date, dateString);
  };
  render() {
    return (
      <List.Item
        actions={[
          <DatePicker
            format="MM/DD/YYYY"
            value={this.props.todo.date}
            onChange={this.handleDateChange}
          />,

          <Popconfirm
            title="Are you want to delete this todo?"
            onConfirm={this.remove}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteTwoTone />
          </Popconfirm>,
        ]}
      >
        {this.props.todo.content}
      </List.Item>
    );
  }
}

export default todoItem;
