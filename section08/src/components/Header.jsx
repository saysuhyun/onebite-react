import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};
// props가 변경되지 않는 이상 재 랜더링 안 됨
//const memoizedHeader = memo(Header);
export default memo(Header);
