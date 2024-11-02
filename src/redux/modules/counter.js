import { act } from "react";

// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const SUB_NUMBER = "SUB_NUMBER";

// Action Creator
export const addNumber = (payload) => {
    return {
        type: ADD_NUMBER,
        payload,
    };
};

export const subNumber = (payload) => {
    return {
        type: SUB_NUMBER,
        payload,
    };
};

// 초기값 설정
const initialState = {
    number: 0,
};

// 리듀서: 변화를 일으키는 함수
const counter = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                number: state.number + action.payload,
            }
        case SUB_NUMBER:
            return {
                number: state.number - action.payload,
            }
        default:
            return state;
    }
};

export default counter;