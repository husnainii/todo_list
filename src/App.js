import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeAll, addTodo } from './slices/todoSlice'
import { showAlert } from './slices/alertSlice'
import List from './Components/List'
import Alert from './Components/Alert'
import ThemeToggle from './Components/ThemeToggle'

function App() {
  const [name, setName] = useState('')
  const todoList = useSelector((state) => state.todos.todoList)
  return (
    <div className='app' >
      <div className='content'>
        <ThemeToggle />
        <section className='todo-wrapper'>
          {}
          <div className='todo-container'>
            <div className='todo-top'>
              <h1 className='todo-title'>Todo List</h1>
              {todoList.length > 0 && (
                <div className='todo-count'>{todoList.length} items</div>
              )}
            </div>
            <form className='todo-form'>
              <div className='todo-form-input'>
                <input
                  type='text'
                  value={name}
                  placeholder='enter something...'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button>Add</button>
            </form>
            <List />
            {todoList.length > 1 && (
              <div className='todo-button-group'>
                <button
                  type='button'
                  className='remove-btn'
                >
                  Remove all
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
