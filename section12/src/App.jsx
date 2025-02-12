import "./App.css";
// Link a태그와 동일 -> 클라이언트 사이드 랜더링으로 제공
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
// 1. "/" : 모든 일기 조회 home page
// 2. "/new" : 새로운 일기 작성
// 3. "/diary" : 일기 상세 조회
function App() {
  const nav = useNavigate();
  // 특정 조건에 따라 페이지 이동시 useNavigate 사용
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <div>
        <Link to={"/"}> Home </Link>
        <Link to={"/diary"}> Diary </Link>
        <Link to={"/new"}> New </Link>
      </div>
      <button onClick={onClickButton}>New 페이지 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/new" element={<New />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
