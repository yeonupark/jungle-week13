import React from "react";
import { useSelector } from "react-redux"; 

const App = () => {
  const counterStore = useSelector((state) => state); 
  const number = useSelector((state) => state.counter.number);
  console.log(number); 

  return <div></div>;
}

export default App;