import React from 'react';
import TodoList from './TodoList.js';
import Form from './Form.js';

const toDoList = [
  {}
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    }
  }

  toggleComplete = (todoId) => {
    console.log(todoId);
    this.setState({
      toDoList: this.state.toDoList.map(todo => {
        if (todoId === todo.id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    });
  }

  addTodo = (todo) => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      toDoList: [...this.state.toDoList, newTodo]
    });
  }

  clearCompleted = () => {
    const newList = this.state.toDoList.filter(todo => {
      return !todo.completed;
    });

    this.setState({
      toDoList: newList
    })
  }

  render() {
    return (
      <div>
        <TodoList toDoList={this.state.toDoList} toggleComplete={this.toggleComplete} />

        <Form addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    )
  }
}
