import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['Get to LA', 'Watch TSM Lose', 'Laugh']

class Todo extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li><button>( Y )</button>{this.props.task}</li>
    )
  }
}

class TodoList extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul>
        {dummyData.map((item) => <Todo task={item}/>)}
      </ul>
    )
  }
}

class InputLine extends React.Component{
  constructor(props) {
    super(props)
  }
}

class TodoApp extends React.Component{
  constructor(props) {
    super(props)
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));
