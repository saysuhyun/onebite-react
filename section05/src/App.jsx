import "./App.css";
import { useState } from "react";

function App() {
  // 1: 초기값  2:상태변화 함수
  // 보통 구조분해해서 할당 받음
  const [count, setCount] = useState(1);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "OFF" : "ON"}
        </button>
      </div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
