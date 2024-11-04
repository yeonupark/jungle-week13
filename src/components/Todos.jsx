import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { setTodos } from "../redux/modules/todoRedecer";
import { createTodo, fetchTodos } from "../api/todoApi";

import "../css/App.css"

const Todos = () => {
    const [todo, setTodo] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editId, setEditID] = useState(null);
    const [editTitle, setEditTitle] = useState("");

    const [reload, setReload] = useState(false);

    const dispatch = useDispatch();

    const globalTodos = useSelector((state) => state.todoReducer.todos);

    useEffect(() => {
        // 내부에서 비동기 함수를 별도로 정의하고 호출해야함
        const fetchData = async () => {
            const todos = await fetchTodos();
            if (todos != null) {
                dispatch(setTodos(todos));
            }
        };

        fetchData();
    }, [reload]);
    
    const addTodoHandler = async() => {
        if (todo.length <= 1) {
            alert("5글자 이상 입력해주세요 !");
        } else {
            if (await createTodo(todo, "") == true) {
                setReload(!reload);
                setTodo("");
            }
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
            {globalTodos.map((todo) => {
            return (
                <div className="squareStyle">
                {todo.title}
                <button className="editButtonStyle" onClick={() => {
                    setEditID(todo.id);
                    setEditTitle(todo.title);
                    setIsModalOpen(true);
                    //dispatch(editTodo(content.id, content.title));
                }}>수정</button>
                <button className="deleteButtonStyle" onClick={() => {
                    // dispatch(deleteTodo(todo.id));
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
                // dispatch(editTodo(editId, editTitle))
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

export default Todos;
