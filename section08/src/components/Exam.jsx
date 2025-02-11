// useReducer로 외부에 로직을 빼서 사용이 가능
import { useReducer } from "react";

// 변환기 : 상태를 실제로 변화시키는 함수
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch : 발송하다 , 상태변화가 있어야한다는 사실을 발송하는 함수
  // useReducer 안의 밖의 함수에게 요청을 주는 것 !
  // state 초기값 은 0
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수로 상태가 어떻게 변했으면 하는지 넣어줌
    // {} 이 객체를 액션 객체라고 함 = action
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
