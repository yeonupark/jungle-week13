import axios from "axios";

const API_URL = "https://week13.hjyoon.me/api/auth/"

export async function registerRequest(nickname, pw, pw_confirm) {
    try {
        const response = await axios.post(API_URL+"register", {
            nickname: nickname,
            password: pw,
            confirmPassword: pw_confirm
        })
        if (response.data.code == 1) {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log("register error: ", error);
        return false;
    }
};

export async function loginRequest(nickname, password) {
    try {
        const response = await axios.post(API_URL+"login", {
            nickname,
            password
        })
        if (response.data.code == 1) {
            return response.data.data.accessToken;
        } else {
            return null;
        }
    } catch (error) {
        console.log("login error: ", error);
        return null;
    }
};