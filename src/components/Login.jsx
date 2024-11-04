import React, { useState} from "react";
import { useDispatch } from "react-redux";
import "../css/App.css"
import { registerRequest, loginRequest } from "../api/loginApi"
import { login } from "../redux/modules/loginReducer";

function Login() {
    
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwConfirm, setPwConfirm] = useState("");

    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

    const dispatch = useDispatch();

    const idHandler = (e) => {
        setId(e.target.value);
    };

    const pwHandler = (e) => {
        setPw(e.target.value);
    };

    const sendloginRequest = async() => {
        const token = await loginRequest(id, pw);
        if (token != null) {
            alert("login success !");
            dispatch(login(token));
        } else {
            alert("login failed");
        }

    };

    const joinButtonHandler = () => {
        setId("");
        setPw("");
        setPwConfirm("");
        setIsJoinModalOpen(true);
    };

    const sendJoinRequest = async() => {
        if (id.length < 3) {
            alert("id should be longer than 2 letters");
            return;
        }
        if (pw.length < 4) {
            alert("password should be longer than 3 letters");
            return;
        }
        if (pw != pwConfirm) {
            alert("passwords do not match");
            return;
        }

        const result = await registerRequest(id, pw, pwConfirm);
        if (result === true) {
            alert("welcome !");
            setIsJoinModalOpen(false);
        } else {
            alert("join failed");
        }
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: "center"}}>
            <input type="text" onChange={idHandler} placeholder="id"/>
            <input type="password" onChange={pwHandler} placeholder="pw"/>
            <button style={{ fontSize: 14, width: 80, padding: '5px 10px', backgroundColor: 'rgb(138, 199, 239)'}} onClick={sendloginRequest}>로그인</button>
            <button style={{ fontSize: 14, padding: '0px 0px', backgroundColor: 'white'}} onClick={joinButtonHandler}>회원가입</button>
            
            {isJoinModalOpen && (
                <div className="modal">
                <div className="modalContent">
                    <h3>be our member !</h3>
                    <input
                        style={{width : "200px"}}
                        type="text"
                        placeholder="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input
                        style={{width : "200px"}}
                        type="password"
                        placeholder="pw"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                    />
                    <input
                        style={{width : "200px"}}
                        type="password"
                        placeholder="pw confirm"
                        value={pwConfirm}
                        onChange={(e) => setPwConfirm(e.target.value)}
                    />
                    <div style={{alignItems: "horizontal"}}>
                    <button style={{fontSize: 14, width : "80px", padding: '5px 10px', backgroundColor: 'rgb(138, 199, 239)'}} onClick={() => {
                    sendJoinRequest();
                    }}>
                    join
                    </button>
                    <button style={{fontSize: 14, width : "80px"}} onClick={() => setIsJoinModalOpen(false)}>cancel</button>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
};

export default Login;