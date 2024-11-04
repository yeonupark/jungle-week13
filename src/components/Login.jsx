import React, { useState } from "react";
import "../css/App.css"

function Login() {
    
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

    const idHandler = (e) => {
        setId(e.target.value);
    };

    const pwHandler = (e) => {
        setPw(e.target.value);
    };

    const loginButtonHandler = () => {
        
    };

    const joinButtonHandler = () => {
        setIsJoinModalOpen(true);
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <input type="text" onChange={idHandler} placeholder="id"/>
            <input type="password" onChange={pwHandler} placeholder="pw"/>
            <button style={{ padding: '5px 10px', backgroundColor: 'yellow'}} onClick={loginButtonHandler}>로그인</button>
            <button style={{ padding: '0px 0px', backgroundColor: 'white'}} onClick={joinButtonHandler}>회원가입</button>
            
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
                    <button style={{width : "80px"}} onClick={() => {
                    // dispatch(editTodo(editId, editTitle))
                    setIsJoinModalOpen(false)
                    }}>
                    join
                    </button>
                    <button style={{width : "80px"}} onClick={() => setIsJoinModalOpen(false)}>cancel</button>
                </div>
                </div>
            )}
        </div>
    );
};

export default Login;