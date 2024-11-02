// 초기값 설정
const initialState = {
    number: 0,
};

// 리듀서: 변화를 일으키는 함수
const counter = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default counter;