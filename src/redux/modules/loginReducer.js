const LOGGED_IN = "LOGGED_IN";

export const loggedIn = (value)  => {
    return {
        type: LOGGED_IN,
        value
    }
};

const initialState = {
    value: false,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:
            
            return {
                value: action.value
            }
        default:
            return state;
    }
};

export default loginReducer;