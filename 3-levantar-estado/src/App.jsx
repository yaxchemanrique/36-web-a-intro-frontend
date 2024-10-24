import React from 'react'
import Input from './components/Input/Input.jsx'
import ToDoContainer from './components/ToDoContainer/ToDoContainer.jsx'

function App() {
  return (
    <div>
      <Input />
      <ToDoContainer />
    </div>
  )
}

export default App

/* const todos = [
  {
    id: 1,
    content: 'elemento1'
  },
  {
    id: 2,
    content: 'elemento2'
  }
] */