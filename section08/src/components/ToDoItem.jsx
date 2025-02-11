import "./ToDoItem.css";
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

export default ToDoItem;
