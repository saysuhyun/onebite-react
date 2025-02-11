import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { userState, useState, useRef } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "react1",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "react2",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "react3",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3); // id 용

  const onCreate = (content) => {
    // content는 하위 에디터에서 받음
    const newTodo = {
      id: idRef.current++, // idRef값을 증가 시키고 전역적으로 관리 useRef
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos state값들 중 id와 일치하는 isDone을 변경

    // 해당하는 todo만 바꾸고 새 배열 변환
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
