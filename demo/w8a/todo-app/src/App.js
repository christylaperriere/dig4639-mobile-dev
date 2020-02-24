import React from 'react';
import './App.css';

    const toDoList = [
      {
        content: 'Task 1', priority: 2, completed: true
      },
      {
        content: 'Task 2', priority: 1, completed: true
      },
      {
        content: 'Task 3', priority: 3, completed: false
      }
    ]

    function toDoItem(props) {
      return <p>Item!</p>
    }

    function App() {
      // Filtering 
      toDoListFiltered = toDoList.filter((value) => value.completed)

      const toDoArray = toDoListFiltered.map(
        (value) => <toDoItem content = {value.content} />
      )
      /*
      const toDoArray = [
          <toDoItem content="Item 1"/>,
          <toDoItem content="Item 2"/>,
          <toDoItem content="Item 3"/>
      ]*/
      return (
          toDoList.filter((value) => value.completed).map(
          (value) => <ToDoItem priority={v.priority} content = {value.content} />)
      )
    }

export default App;
