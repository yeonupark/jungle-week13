import { jwtDecode } from "jwt-decode";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const login = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

const initialState = {
    user_id: sessionStorage.getItem('authToken'),
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            sessionStorage.setItem('authToken', action.payload);
            const decoded = jwtDecode(action.payload);
            return {
                user_id: decoded.userId
            }
        case LOGOUT:
            sessionStorage.setItem('authToken', "");
            return {
                user_id: ""
            }
        default:
            return state;
    }
};

export default loginReducer;