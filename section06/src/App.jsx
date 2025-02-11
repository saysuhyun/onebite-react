import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";
function App() {
  // 부모단에서 상태를 가지고 있어야함
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  // 해당 컴포넌트가 마운트 되어 있는지 확인
  const isMount = useRef(false);

  // 1. 마운트 : 탄생 , 빈 배열
  useEffect(() => {
    console.log(`mount`);
  }, []);

  // 2. 업데이트 : 변화 , 리렌더링  // 배열 없음 // 변화 있을 때마다 리랜더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true; // 처음 app.js가 랜더링 될때는 안 움직이다가 리랜더링 있으면 밑에 출력
      return;
    }
    console.log("udpate");
  });

  // 3. 언마운트 : 죽음

  // 2번째 배열에 있는 값이 바뀌면 1번째 콜백 함수가 실행됨 : life cycle
  // 2번째 배열에 따라 값이 바뀜 : 의존성 배열 = dependency array = deps

  // 이베트 핸들러를 넘겨줘서 컨트롤러에서 함수 실행시키면 App단에서 상태변화가 일어나고 리랜더링
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter </h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
