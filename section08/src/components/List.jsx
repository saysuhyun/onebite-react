import "./List.css";
import ToDoItem from "./ToDoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
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

  // 의존성 배열 : deps
  // 콜백함수를 반화해서 변수로 사용 가능 , 결과를 두번째 파라미터 배열에 넣어줌 한 번만 !
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🎯</h4>

      <div> total : {totalCount}</div>
      <div> done : {doneCount}</div>
      <div> notDone : {notDoneCount}</div>

      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어 입력해 주세요 "
      />
      <div className="ToDoWrapper">
        {filteredTodos.map((todo) => {
          return <ToDoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};
export default List;
