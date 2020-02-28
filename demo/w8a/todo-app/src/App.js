import React from "react";
import './App.css'; 
import todoList from './toDoList.json'; 

// Filter the list based on a checkbox
// Add an input form to allow creting TODO items with content and priority
// Have each item be able to remove itself using a function passed in from the parent 

function TodoItem (props) {
return <p className='card' onClick={() => props.removeTask(props.id)}>{props.content}</p>
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList, 
      hideCompletedItems: false, 
    }
    this.currentId = 4; 
  }
  addTask(event) {
    console.log(this.refs.taskcontent)
    let todoList = this.state.todoList
    todoList.push(
      {"id": this.currentId, "completed": true, "priority": 1, "content": this.refs.taskContent.value})
    this.currentId++
    this.setState({todoList:todoList})
  }
  removeTask(id) {
    console.log(id)
    let todoList = this.state.todoList
    todoList = todoList.filter((value) => value.id != id)
    console.log(todoList)
    this.setState({todoList})
  }
  render() {
    return (
      <>
      <input type = "text" refs="taskContent" /> 
      <input type = "button" value="Add Task" onClick={(event) => this.addTask(event)} />
      <br /> 
      <br />
      <input ref="hideCompletedItemsCheckbox" type="checkbox" id="hideCompletedItems"
      name="hideCompletedItems" value="hideCompletedItems"
      onChange={(event) => this.setState({ hideCompletedItems: event.target.checked})} />
      <label htmlFor = "hideCompletedItems"> Hide </label><br></br>
      {
        ((this.state.hideCompletedItems) ? this.state.todoList
          .filter((value) => !value.completed) : this.state.todoList)
          .map((value) => <TodoItem id={value.id} removeTask ={(id) => this.removeTask.id} key={value.id} content={value.content}
            priority={value.priority}
          completed={value.completed} />)}
          </>)
  }
}

function App(props) {
  return (
    <TodoList /> 
  )
}

export default App; 
