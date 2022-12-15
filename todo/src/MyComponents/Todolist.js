import React from 'react'
import Todo from './Todo';

export default function Todolist(props) {

  let mystyle= {
    minHeight : "100vh"
  }

  return (
    <div className='container'  style ={mystyle}>
      <h3 className=' my-3'>Todos item</h3>
      {props.todos.length===0 ?  "No To-dos to Display": 
      props.todos.map((todo)=>{
        return (
         
        <Todo todo= {todo} key={todo.sno} onDelete={props.onDelete}/>
        
          
        )
      })
      }
    </div>
  )
}
