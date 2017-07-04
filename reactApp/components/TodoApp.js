import React from 'react';
// import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import InputLine from './InputLine';

const dummyData = [
  {taskText:'Get to LA', completed: true},
  {taskText:'Watch MIKE YEUNG PUT THE WHOLE GOSHDURN TEAM ON HIS BACK', completed: true},
  {taskText:'Finish Horizons work', completed: false}
]

class TodoApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    this.setState({todos: dummyData})
  }
  render() {
    return (
      <div>
        <InputLine/>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp;
