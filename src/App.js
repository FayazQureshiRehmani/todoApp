import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./comments/TodoList";
import AddTodo from "./comments/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  
  //default set of arrays
  const [theTodos, setTheTodos] = useState([
    { id: 1, title: "Learn reactjs" },
    { id: 2, title: "Know about what is life" },
    { id: 3, title: "What is the new thing to do" },
  ]);

  useEffect( () => {
    setTodos(theTodos);
  }, []);
  
  const [searchtxt, setSearchtxt] = useState("");

  // set search term
  const onChangeSearchHandler = (e) => {
    setSearchtxt(e.target.value.toLowerCase());
  }

  // search form submit functionality
  const searchformSubmitHandler = (e) => {
    e.preventDefault();
    
    const filteredTodos = todos.filter( todo => ( 
      todo.title.toLowerCase().includes(searchtxt)
    ));
    if (searchtxt.trim().length > 0) {
      setTodos(filteredTodos);
    } else {
      setTodos(theTodos);
    }
  }

  // add todo functionality
  const addTodoSubmitHandler = (e) => {
    const theNTodos = {id: theTodos.length + 1, title: e}
    setTodos( [...todos, theNTodos ]);
  }

  return (
    <div className="App">
      <div className="container search-box">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <form onSubmit={searchformSubmitHandler}>
              <label>Search</label>
              <div className="input-group">
                <input type="text" className="form-control" value={searchtxt} onChange={onChangeSearchHandler} />
                <button className="btn btn-primary input-group-addon">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <AddTodo addTodoSubmit={addTodoSubmitHandler} />
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
