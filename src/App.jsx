import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { addNumber, subNumber } from "./redux/modules/counter";

const App = () => {
  const dispatch = useDispatch();
  const globalNumber = useSelector((state) => state.counter.number);

  const [num, setNum] = useState(0);
  const inputHandler = (e) => {
    setNum(+e.target.value); // 숫자로 형변환
  };  

  return <div>
    <div>{globalNumber}</div>
    <div><input type="num" onChange={inputHandler} /></div>
    <button onClick={() => {
      // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달됨
      dispatch(addNumber(num)); // Action creator
    }}>+</button>
    <button onClick={() => {
      dispatch(subNumber(num));
    }}>-</button>
  </div>;
}

export default App;