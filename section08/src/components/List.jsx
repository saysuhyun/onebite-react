import "./List.css";
import ToDoItem from "./ToDoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🎯</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어 입력해 주세요 "
      />
      <div className="ToDoWrapper">
        {filteredTodos.map((todo) => {
          return (
            <ToDoItem
              onUpdate={onUpdate}
              onDelete={onDelete}
              key={todo.id}
              {...todo}
            />
          );
        })}
      </div>
    </div>
  );
};
export default List;
