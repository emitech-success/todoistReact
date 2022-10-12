import React from 'react'
import './Todoist.css'
import Ul from './Ul'

const Todoist = () => {
  return (
    <>
     <section className="header">
          <h2>My To Do List</h2>
          <input type="text" id="todo-input" placeholder="Title..." />
          <span id="add-btn">Add</span>
          <span className="edit-btn">Update</span>
        </section>
        <Ul />
    </>
  )
}


export default Todoist
