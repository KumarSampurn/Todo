import React from 'react'
import Todo from './Todo';

export default function Todolist(props) {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos item</h3>
      
      {props.todos.map((todo)=>{
        return <Todo todo= {todo}  onDelete={props.onDelete}/>
      })}

      
    </div>
  )
}
