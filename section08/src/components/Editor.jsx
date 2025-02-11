import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  // 내용 상태 보관용
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 엔터 눌러도 추가되도록
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  // props 실행용
  const onSubmit = () => {
    // 빈문자열이면 추가 안 하도록
    if (content === "") {
      contentRef.current.focus(); // 입력 없으면 포커스 줌
      return;
    }
    onCreate(content);
    setContent(""); // 입력 후 초기화
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef} // input쪽
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 To-Do 리스트를 입력해 주세요 "
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};
export default Editor;
