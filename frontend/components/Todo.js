import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div onClick={() => {this.props.toggleComplete(this.props.toDo.id)
      console.log(this.props.toDo)}}>
      
        <p>{this.props.toDo.name} {this.props.toDo.completed ? 'Complete' : ''}</p>
      </div>
    )
  }
}
