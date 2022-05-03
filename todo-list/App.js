import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import  Forms from './components/todo-list/Forms';
import TodosList from './components/todo-list/TodosList';
import { useEffect } from 'react';
import { UserProvider } from './components/context/UserContext';
import Content from './components/content/Content';
import Header from './components/todo-list/Header';
import Navigation from './components/header/Navigation';
function App() {

  const initialState=JSON.parse(localStorage.getItem("todos")) || []
const [input, setInput]= useState('');
const [todos, setTodos]= useState(initialState)
const [editTodos, setEditTodo]=useState(null);

useEffect(()=>{
  localStorage.getItem("todos", JSON.stringify(todos))
}, [todos]);
  return (
  <>
  <div className=' bg-secondary'>
    <div className='app-wrapper'>
    <div>
      <Header/>
    </div>
    <div>
      <Forms
      input={input}
      setInput={setInput}
      todos= {todos}
      setTodos={setTodos}
      editTodos={editTodos}
      setEditTodo={setEditTodo}
      />
    </div>
    <div>
      <TodosList todos={todos} 
      setTodos={setTodos} 
      setEditTodo={setEditTodo}/>
    </div>
  </div>
  </div>
  <UserProvider value="JAMES">
<main>
  <Navigation/>
  <Content/>
</main>
  </UserProvider>
  </>
  );
}

export default App;
