import React from "react";
import { useSelector } from "react-redux"; 
import "../css/App.css"
import Login from "./Login";
import Todos from "./Todos";

const App = () => {
  
  const loginState = useSelector((state) => state.loginReducer.value);
  return loginState ? <Todos /> : <Login />
}

export default App;