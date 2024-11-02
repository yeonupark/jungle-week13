const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE"

export const plusOne = () => {
    return {
        type: PLUS_ONE,
    };
};

export const minusOne = () => {
    return {
        type: MINUS_ONE,
    };
};

// 초기값 설정
const initialState = {
    number: 0,
};

// 리듀서: 변화를 일으키는 함수
const counter = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number + 1,
            }
        case MINUS_ONE:
            return {
                number: state.number - 1,
            }
        default:
            return state;
    }
};

export default counter;