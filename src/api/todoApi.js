import axios from "axios";

const API_URL = "https://week13.hjyoon.me/api/posts/"
const token = sessionStorage.getItem('authToken'); 

export const api = axios.create({
    baseURL: API_URL,
    headers: { Authorization: `Bearer ${token}` },
});

export async function fetchTodos() {

    try {
        const response = await api.get();
        console.log(response.data.data);
        if (response.data.code == 1) {
            return response.data.data;
        } else {
            return null;
        }
    }
    catch (error) {
        console.error("fetch error: ", error);
        return null;
    }
};

export async function createTodo(title, content) {
    try {
        const response = await api.post('', {'title': title, 'content': content});
        console.log(response);
        if (response.data.code == 1) {
            return true;
        } else {
            return false;
        }
    }
    catch (error) {
        console.error("create error: ", error);
        return false;
    }
};
