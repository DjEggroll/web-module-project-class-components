import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoText: ""
    }
  }

  handleChange = (evt) => {
    this.setState({
      toDoText: evt.target.value
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo(this.state.toDoText);
    this.setState({
      toDoText: ""
    });
  };


  render() {
    return (
      <div>
      
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text' 
            name='todo' 
            value={this.state.toDoText} 
            onChange={this.handleChange}
            />

          <button>Add Todo</button>
        </form>
          <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    )
  }
}
