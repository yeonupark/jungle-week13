const SET_TODO = 'SET_TODO';

export const setTodos = (payload) => {
    return {
        type: SET_TODO,
        payload
    }
};

const initialState = {
    todos: [
        {
            _id: "6728e5d88929e34c03fb9b59",
            title: "하이",
            content: " ",
            user_id: {
                _id: "67284f3c4379ecb76917a904",
                nickname: "dusn"
            },
            created_at: "2024-11-04T15:18:48.312Z"
        }
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                todos: action.payload
            }
        default:
            return state
    }
};

export default todoReducer;