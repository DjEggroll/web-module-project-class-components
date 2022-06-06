import React from 'react'
import Todo from './Todo.js';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>TodoList</h2>
        {this.props.toDoList.map(toDo => {
         return <Todo toDo={toDo} key={toDo.id} toggleComplete={this.props.toggleComplete}/>
        })}
      </div>
    )
  }
}
