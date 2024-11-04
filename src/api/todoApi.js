import axios from "axios";

const API_URL = "https://week13.hjyoon.me/api/posts/"

const api = axios.create({
    baseURL: API_URL,
    // headers: { Authorization: `Bearer ${token}` },
});

// 요청 인터셉터 추가
// api.interceptors.request.use(
//     (config) => {
//         // 매 요청 시마다 최신 토큰을 가져와 설정
//         const token = sessionStorage.getItem('authToken');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

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