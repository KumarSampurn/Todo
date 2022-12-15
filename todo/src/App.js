import './App.css';
import Header from './MyComponents/Header';
import Todolist from './MyComponents/Todolist';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("I am deleted todo ", todo);
  
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

  }
  const [todos, setTodos] = useState([
      {
          sno :1,
          title : "Complete NFS most wanted",
          desc : "Defeat Razor to become the blacklist 1"
      },
      {
          sno :2,
          title : "Complete One Piece",
          desc : "Luffy is going to be the King of the Pirates"
      },
      {
          sno :3,
          title : "Bleach is Sick",
          desc : "How will Ichigo get his new Zanpakutu"
      }
      ] ); 
  
  
  return (
    <div>
  <Header title="My Todo List"  searchBar={false}/>
    <Todolist todos={todos} onDelete={onDelete}/>
    <Footer/>
    
    
      
    </div>
  );
}

export default App;
