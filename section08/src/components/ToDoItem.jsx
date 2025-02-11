import "./ToDoItem.css";
import { memo } from "react";
const ToDoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="ToDoItem">
      <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
      <div className="content">{content} </div>
      <div className="date"> {new Date(date).toLocaleDateString()} </div>
      <button onClick={onClickDelete}> delete </button>
    </div>
  );
};

// export default memo(ToDoItem, (prevProps, nextProps) => {
//   // 반환값에 따라 props가 바뀌었는지 안 바뀌었는지 판단
//   // T -> props가 바뀌지않음 : 리랜더링 x
//   // F -> props가 바뀜 : 리렌더링 o
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });
export default memo(ToDoItem);
