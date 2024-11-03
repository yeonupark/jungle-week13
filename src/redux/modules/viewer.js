import { act } from "react";

// Action Value
const ADD_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (payload) => {
    
    return {
        type: ADD_TODO,
        payload,
    };
};

// 초기값 설정
const initialState = {
    todos: [
        {
            id: 1,
            title: "react를 배워봅시다.", 
        },
        {
            id: 2,
            title: "redux를 배워봅시다."
        }
    ],
};

// 리듀서: 변화를 일으키는 함수
const viewer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, {id: state.todos.length+1, title: action.payload} ]
            }
        default:
            return state;
    }
};

export default viewer;