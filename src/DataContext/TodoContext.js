import React, { useState, createContext, useReducer } from 'react'


// dataContext is a way of injecting data into the application 

export const ToDoContext = createContext()

const TodoContextProvider = ({ children }) => {
    const [ todoData, setTodoData ] = useState('My Todo Details') // added property subscription

    return (
        <ToDoContext.Provider value={{ todoData, setTodoData }}>
            { children }
        </ToDoContext.Provider>
    )

}

export default TodoContextProvider