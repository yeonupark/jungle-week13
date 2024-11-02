import React from "react";
import { useSelector, useDispatch } from "react-redux"; 

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);

  return <div>
    {number}
    <button onClick={() => {
      // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달됨
      dispatch({ type: "PLUS_ONE"})
    }}>+ 1</button>
    <button onClick={() => {
      dispatch({type: "MINUS_ONE"})
    }}>- 1</button>
  </div>;
}

export default App;