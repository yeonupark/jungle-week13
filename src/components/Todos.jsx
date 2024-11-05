import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { setTodos } from "../redux/modules/todoRedecer";
import { createTodo, fetchTodos, deleteTodo, updateTodo } from "../api/todoApi";
import { logout } from "../redux/modules/loginReducer";
import { Link } from 'react-router-dom';

import "../css/App.css"

const Todos = () => {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoContent, setTodoContent] = useState("");
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const [editId, setEditID] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");

    const [reload, setReload] = useState(false);

    const dispatch = useDispatch();

    const globalTodos = useSelector((state) => state.todoReducer.todos);
    const userId = useSelector((state) => state.loginReducer.user_id);

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
        if (todoTitle.length <= 1) {
            alert("한 글자 이상 입력해주세요 !");
        } else {
            if (await createTodo(todoTitle, todoContent) == true) {
                setReload(!reload);
                setTodoTitle("");
                setTodoContent("");
            }
        }
        setIsCreateModalOpen(false)
    };

    return (
        <div >
        <div>
            <button style={{ fontSize: 10, width: 80, padding: '5px 2px', color: "gray", backgroundColor: "white"}} onClick={() => {
                dispatch(logout());
            }}>로그아웃</button>
            <h3>학식 메뉴 건의함 💌</h3> 
            <button style={{ fontSize: 14, width: 80, padding: '5px 2px', }}
            onClick={() => {
                setIsCreateModalOpen(true)
            }}>
            새 글 작성
            </button>
        </div>

        {isCreateModalOpen && (
            <div className="modal">
            <div className="modalContent">
            <button className="closeButtonStyle" onClick={() => setIsCreateModalOpen(false)}>×</button>
                <h3>새 글 작성</h3>
                <input
                style = {{width: 200}}
                type="text"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
                />
                <textarea style = {{width: 200}}
                value={todoContent}
                onChange={(e) => setTodoContent(e.target.value)}
                />
                <div className="buttonContainer">
                    <button className="saveButtonStyle" onClick={() =>
                        {addTodoHandler()}}>
                    게시
                    </button>
                </div>
            </div>
            </div>
        )}

        <div className="style">
            {globalTodos.map((todo) => {
                const isMine = todo.author._id === userId;
            return (
                <div className="squareStyle">
                    <div className="nicknameBadge">{todo.author.nickname}</div>
                    {/* <button className="detailViewButton" onClick={() => {
                        
                    }}>상세 페이지</button> */}
                    <Link to={`/todos/${todo._id}`}>
                        <div className="detailViewButton">상세페이지</div>
                    </Link>
                    <div className="todoTitle">{todo.title}</div>
                    <div className="todoContent">{todo.content}</div>
                    { isMine &&
                    (<div className="buttonContainer">
                        <button className="editButtonStyle" onClick={() => {
                            setEditID(todo._id);
                            setEditTitle(todo.title);
                            setEditContent(todo.content);
                            setIsUpdateModalOpen(true);
                        }}>수정</button>
                        <button hidden={true} className="deleteButtonStyle" onClick={ async() => {
                            const delete_success = await deleteTodo(todo._id)
                            if (delete_success) {
                                setReload(!reload);
                            };
                        }}>삭제</button>
                    </div>)
                    }
                </div>
            );
            })}
        </div>
        
        {isUpdateModalOpen && (
            <div className="modal">
            <div className="modalContent">
            <button className="closeButtonStyle" onClick={() => setIsUpdateModalOpen(false)}>×</button>
                <h3>수정할 내용 입력</h3>
                <input
                    style = {{width: 200}}
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <textarea style = {{width: 200}}
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                />
                <div className="buttonContainer">
                    <button className="saveButtonStyle" onClick={async() => {
                    if (await updateTodo(editId, editTitle, editContent)) {
                        setReload(!reload);
                    }
                    setIsUpdateModalOpen(false)
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
