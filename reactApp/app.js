import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
// const dummyData = [
//   {taskText:'Get to LA', completed: true},
//   {taskText:'Watch TSM lose', completed: true},
//   {taskText:'Laugh', completed: false}
// ]

// class Todo extends React.Component{
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <li><button>(/._.)/(/._.)/(/._.)/</button>{this.props.completed ? <strike>{this.props.task}</strike> : this.props.task }</li>
//     )
//   }
// }

// class TodoList extends React.Component{
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//         <ul>
//           {this.props.todos.map((item) => <Todo task={item.taskText} completed={item.completed}/>)}
//         </ul>
//     )
//   }
// }

// class InputLine extends React.Component{
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         <input type="text"/>
//         <input type="submit" value="Submit"/>
//       </div>
//     )
//   }
// }

// class TodoApp extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: []
//     }
//   }
//   componentDidMount() {
//     this.setState({todos: dummyData})
//   }
//   render() {
//     return (
//       <div>
//         <InputLine/>
//         <TodoList todos={this.state.todos}/>
//       </div>
//     )
//   }
// }

ReactDOM.render(<TodoApp />, document.getElementById('root'));
