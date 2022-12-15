import './App.css';
import Header from './MyComponents/Header';
import Todolist from './MyComponents/Todolist';
import Footer from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import {About} from './MyComponents/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  let initodo = []
  if (localStorage.getItem("todos") !== null) {
    initodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am deleted todo ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log(" adding title and class", title, desc);

    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }

  const [todos, setTodos] = useState(initodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div>

      <Router>

        <Header title="My Todo List" searchBar={false} />

        <Switch>
          <Route exact path="/">
            <AddTodo addTodo={addTodo} />
            <Todolist todos={todos} onDelete={onDelete} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
