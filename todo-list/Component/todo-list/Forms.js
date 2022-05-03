
import React, {useEffect  } from 'react'
import {v4 as uuidv4 } from 'uuid'
const Forms = ({input, setInput, todos, setTodos, editTodos, setEditTodo}) => {
 const updateTodo=(title, id, completed)=>{
   const newTodo= todos.map((todo)=>
     
      
     todo.id=== id ? {title, id, completed} : todo
   )
   
   setTodos(newTodo);
   setEditTodo("")
   
 }
 useEffect(()=>{
   if(editTodos){
     setInput(editTodos.title);
   }
   else{
     setInput("")
   }
 },[setInput, editTodos])


  const onInputChange=(event)=>{
    setInput(event.target.value);
  }
  const onFormSubmit=(event)=>{
    event.preventDefault();

    if(!editTodos){
      setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
      setInput("")
    }
  else{
    updateTodo(input, editTodos.id, editTodos.completed)
  }
  }
  return (
    <div className='container col-xl-20 col-xxl-10  bg-secondary'>
      <div className='row align-items-center g-lg-5 py-5'>
     <form onSubmit={onFormSubmit} className=" p-md-3 border rounded-3 bd-highlight">
       <div className=' mt-3 mb-3'>
       <input type="text" 
placeholder='what you want to add....' 
        className=' form-control' 
       value={input}
       required
      
       onChange={onInputChange}/>
       </div>
       <button className='add-button btn btn-primary mb-1 btn-outline btn-lg ' type='submit'>
         {editTodos ? "OK" :"Add"}
       </button>
            </form>
    </div>
    </div>
  )
}
export default Forms;