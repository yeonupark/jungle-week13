import { act } from "react";
import { v4 as uuidv4 } from 'uuid';

// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = "EDIT_TODO";

// Action Creator
export const addTodo = (payload) => {
    
    return {
        type: ADD_TODO,
        payload,
    };
};

export const deleteTodo = (id) => {

    return {
        type: DELETE_TODO,
        id,
    };
};

export const editTodo = (id, new_title) => {

    return {
        type: EDIT_TODO,
        id: id,
        payload : new_title,
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
                todos: [...state.todos, {id: uuidv4(), title: action.payload} ]
            }
        case DELETE_TODO:
            // const new_todos = []
            // for (const todo of state.todos) {
            //     if (action.payload != todo.id) {
            //         new_todos.push(todo);
            //     }
            // }
            const new_todos = state.todos.filter(todo => action.id !== todo.id);
            return {
                todos: new_todos
            }
        case EDIT_TODO:
            //const target = state.todos.filter(todo => action.payload === todo.id);
            const new_todos_edit = []
            for (const todo of state.todos) {
                if (action.id != todo.id) {
                    new_todos_edit.push(todo);
                } else {
                    new_todos_edit.push({id: todo.id, title: action.payload});
                }
            }
            return {
                todos: new_todos_edit
            }
        default:
            return state;
    }
};

export default viewer;