import React from 'react'

export default function Todo({ todo, onDelete }) {

let myStyle ={
  width: "18rem",
}


  return (
    <div className='my-5'>
      
      <div className="card text-center" style={myStyle}>
        <div className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <p className="card-text">{todo.desc}</p>
          <button className="btn btn-danger btn-sm " onClick={() => onDelete(todo)}  >Delete</button>
        </div>
      </div>


    </div>
  )
}
