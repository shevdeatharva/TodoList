import React from 'react'

 const TodosList = ({todos, setTodos, setEditTodo}) => {

   const handleComplete=(todo)=>{

     setTodos(

todos.map((item)=>{
  
  if(item.id === todo.id){

    return{...item, completed: !item.completed}
  }
  return item;
})
     )
   }
   const handleDelete=({id})=>{
     setTodos(todos.filter((todo)=> todo.id !== id))
   }

   const handleEdit=({id})=>{
const findTools= todos.find((todo)=> todo.id=== id)
 setEditTodo(findTools)
}


  return (
    <div>
      {todos.map((todo)=>{
          return(
            <div className='container col-xl-20 col-xxl-8 bg-dark mb-4'>
<li className='list-item list-unstyled col-12 col-xl-6 row align-items-center g-lg-3 mb-3' key={todo.id}>
<input 
type="text"
value={todo.title}
className={` list ${todo.completed ? "complete" :"" }`}

 onChange={(event)=>event.preventDefault()}
/>
<div>
  <button className='button-complete task-button btn btn-success m-2' onClick={()=>handleComplete(todo)}>
    <i className='fa fa-check-circle'></i>
  </button>
  <button className='button-edit task-button btn btn-warning m-2' onClick={()=> handleEdit(todo)}>
    <i className='fa fa-edit'></i>
  </button>
  <button className='button-delete tast-button btn btn-danger m-2' onClick={()=> handleDelete(todo)}>
    <i className='fa fa-trash'></i>
  </button>
  </div>    
</li> 
</div>
          )
 })
      }
    </div>
  )
}

export default TodosList;