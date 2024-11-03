import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { addTodo } from "./redux/modules/viewer";
import "../src/App.css"

const App = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const globalTodos = useSelector((state) => state.viewer.todos);
  
  const addTodoHandler = () => {
    if (todo.length != 0) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <div >
      <div>
        <h4>Todos의 제목을 입력하세요</h4> 
        <input 
          type="text" 
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }} />
        <button 
          onClick={addTodoHandler}>
          추가하기
        </button>
      </div>

      <div className="style">
        {globalTodos.map((content) => {
          return (
            <div className="squareStyle">
              {content.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;