import axios from "axios";

const API_URL = "https://week13.hjyoon.me/api/posts/"

const api = axios.create({
    baseURL: API_URL,
    // headers: { Authorization: `Bearer ${token}` },
});

export async function fetchTodos() {

    try {
        const response = await api.get('/', {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('authToken')}` }
        });
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
        const response = await api.post('', {'title': title, 'content': content}, 
            { headers: { Authorization: `Bearer ${sessionStorage.getItem('authToken')}` } });
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

export async function deleteTodo(postId) {
    try {
        const response = await api.delete(`${postId}`,
            { headers: { Authorization: `Bearer ${sessionStorage.getItem('authToken')}` } }
        );
        return true;
    } catch (error) {
        console.error("delete error: ", error);
        return false;
    }
}

export async function updateTodo(postId, title, content) {
    try {
        const response = await api.put(`${postId}`, {'title' : title, 'content' : content},
            { headers: { Authorization: `Bearer ${sessionStorage.getItem('authToken')}` } }
        );
        if (response.data.code == 1) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("update error: ", error);
        return false;
    }
}