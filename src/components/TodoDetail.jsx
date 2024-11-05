// TodoDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function TodoDetail() {
    const { id } = useParams(); // URL에서 동적 파라미터로 전달된 id 가져오기
    console.log(id);
    const todo = useSelector((state) => state.todoReducer.todos.find((item) => item._id === id)); // Redux 상태에서 해당 id를 가진 todo 찾기
    console.log(todo);

    if (!todo) {
        return <div>Todo not found</div>;
    }

    return (
        <div className="todoDetail">
            <h2>{todo.title}</h2>
            <p>작성자: {todo.author.nickname}</p>
            <p>내용: {todo.content}</p>
            <p>생성일: {new Date(todo.created_at).toLocaleString()}</p>
        </div>
    );
}

export default TodoDetail;
