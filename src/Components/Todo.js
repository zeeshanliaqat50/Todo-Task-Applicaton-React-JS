import React, { Component } from "react";
import "./Todo.css";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      description: "",
      isCompleted: false,
      itemsList: [],
    };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  saveItems = (evt) => {
    let itemsList = this.state.itemsList;

    let newItem = {
      title: this.state.title,
      description: this.state.description,
      isCompleted: this.state.isCompleted,
      id: this.state.id,
    };
    this.setState({
      id: this.state.id + 1,
    });
    itemsList.push(newItem);
    this.setState({
      itemsList: itemsList,
    });
    console.log(itemsList);
    const token = localStorage.getItem("jwt");

    const requestOptions = {
      method: "post",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(newItem),
    };
    fetch("https://localhost:7138/api/Account/savetask", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };
  handleDelete = (evt) => {
    const taskId = evt.target.id;
    const token = localStorage.getItem("jwt");

    fetch(`https://localhost:7138/api/Account/deletetask/${taskId}`, {
      method: "delete",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((response) => {
       if(response.status===true)
       {
         alert('Task deleted from the list')
       }
      });
  };

  render() {
    return (
      <div className>
        <h1>Todo List Item</h1>
        <div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="Task Description"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="submit"
              name="save"
              value="Add Task"
              onClick={this.saveItems}
            />
          </div>
        </div>
        <div className="pos">
          <table id="center">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Completed</th>
            </tr>
            {this.state.itemsList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  {" "}
                  {this.state.isCompleted ? (
                    <input
                      type="checkbox"
                      name="isCompleted"
                      value=""
                      id={item.id}
                      checked
                    ></input>
                  ) : (
                    <input
                      type="checkbox"
                      name="isCompleted"
                      value=""
                      id={item.id}
                      onChange={this.handleDelete}
                    ></input>
                  )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
