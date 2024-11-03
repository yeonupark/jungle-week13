import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { addTodo, deleteTodo, editTodo } from "./redux/modules/viewer";
import "../src/App.css"

const App = () => {
  const [todo, setTodo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditID] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const dispatch = useDispatch();

  const globalTodos = useSelector((state) => state.viewer.todos);
  
  const addTodoHandler = () => {
    if (todo.length <= 4) {
      alert("5글자 이상 입력해주세요 !")
    } else {
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
              <button className="editButtonStyle" onClick={() => {
                setEditID(content.id);
                setEditTitle(content.title);
                setIsModalOpen(true);
                //dispatch(editTodo(content.id, content.title));
              }}>수정</button>
              <button className="deleteButtonStyle" onClick={() => {
                dispatch(deleteTodo(content.id));
              }}>삭제</button>
            </div>
          );
        })}
      </div>
      
      {isModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <h3>수정할 내용 입력</h3>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <button onClick={() => {
              dispatch(editTodo(editId, editTitle))
              setIsModalOpen(false)
              }}>
              저장
            </button>
            <button onClick={() => setIsModalOpen(false)}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;