import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToDoContext } from '../DataContext/TodoContext'


// data context --> val 
const Todo = (props) => {
    const { todoData, setTodoData } = useContext(ToDoContext)

    return (
        <div>
            <h2>Todo Details</h2>
            <p>{todoData}</p>
            <input type="text" value={todoData} onChange={(evt) => { setTodoData(evt.target.value)}} />
        </div>
    )
}

export default Todo