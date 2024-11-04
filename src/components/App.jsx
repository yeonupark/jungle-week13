import React from "react";
import { useSelector } from "react-redux"; 
import "../css/App.css"
import Login from "./Login";
import Todos from "./Todos";

const App = () => {
  
  const user_id = useSelector((state) => state.loginReducer.user_id);
  return user_id ? <Todos /> : <Login />
}

export default App;