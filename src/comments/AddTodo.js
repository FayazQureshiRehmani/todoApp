import { useState } from "react";

const AddTodo = ({addTodoSubmit}) => {
  const [newTodo, setNewTodo] = useState("");

  // set new todo functionality
  const todoChangeHandler = (e) => {
    setNewTodo(e.target.value);
  };

  // add form submit functionality
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (newTodo !== '' && newTodo !== null) {
      addTodoSubmit(newTodo);
      setNewTodo("");
    }
  }

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="add-todo">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={newTodo}
              onChange={todoChangeHandler}
            />
            <button className="btn btn-primary">Add Todo</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
