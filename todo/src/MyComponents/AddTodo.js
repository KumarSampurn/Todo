import React from 'react'
import { useState } from 'react';

function AddTodo({addTodo}) {

    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if (!title || !desc) {
            alert("Ttile or description cannot be blank");
            return;
        }
        addTodo(title,desc);
        
        settitle("")
        setdesc("")
    }


    return (
        <div className='container my-3'>
            <h3> Add a Todo </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="title" value={title} onChange= {(e)=>settitle(e.target.value)}  className="form-control" id="title"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc"   className="form-label">To-Do Description</label>
                    <input type="text" value={desc} onChange= {(e)=>setdesc(e.target.value)} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo