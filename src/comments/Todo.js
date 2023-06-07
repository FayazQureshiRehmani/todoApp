import React, { useState } from "react";

const Todo = ({todo}) => {
  const [done, setDone] = useState(false);
  let isdoneClass = done ? "todo done" : "todo";

  const setisDone = () => {
    setDone( !done );
  }

  return (
    <div className={isdoneClass}>
      <a href="#" onClick={setisDone}>{todo.title}</a>
    </div>
  )
}

export default Todo;
