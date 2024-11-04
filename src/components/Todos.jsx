import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { setTodos } from "../redux/modules/todoRedecer";
import { createTodo, fetchTodos, deleteTodo, updateTodo } from "../api/todoApi";

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
            if (await createTodo(todo, " ") == true) {
                setReload(!reload);
                setTodo("");
            }
        }
    };

    return (
        <div >
        <div>
            <h4>할 일을 입력하세요</h4> 
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
                    <div className="nicknameBadge">{todo.user_id.nickname}</div>
                    <div className="todoTitle">{todo.title}</div>
                    <div className="todoContent">{todo.content}</div>
                    <div className="buttonContainer">
                        <button className="editButtonStyle" onClick={() => {
                            setEditID(todo._id);
                            setEditTitle(todo.title);
                            setIsModalOpen(true);
                        }}>수정</button>
                        <button className="deleteButtonStyle" onClick={ async() => {
                            const delete_success = await deleteTodo(todo._id)
                            if (delete_success) {
                                setReload(!reload);
                            };
                        }}>삭제</button>
                    </div>
                </div>
            );
            })}
        </div>
        
        {isModalOpen && (
            <div className="modal">
            <div className="modalContent">
            <button className="closeButtonStyle" onClick={() => setIsModalOpen(false)}>×</button>
                <h3>수정할 내용 입력</h3>
                <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                />
                <div className="buttonContainer">
                    <button className="saveButtonStyle" onClick={async() => {
                    if (await updateTodo(editId, editTitle)) {
                        setReload(!reload);
                    }
                    setIsModalOpen(false)
                    }}>
                    저장
                    </button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
}

export default Todos;
