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
            userId: "idepix",
            title: "",
            content: "",
            id: "",
            createdAt: ""
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