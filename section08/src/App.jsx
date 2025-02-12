import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import Exam from "./components/Exam";
import {
  userState,
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

//App 밖에 놔두는게 새로 안 생성되고 밖에 빼두는 것이 좋음
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  //const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); // id 용

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  // 함수 메모제이션 마운트 될 때만 생성되고 리랜더링 안 됨
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  // TodoContext.Provider로 감싸져 있는 부분의 컴포넌트들은 context에 접근 가능
  // 해당 컨텍스트 하위에 있는Editor , List, TodoItem 컴포넌트는 context에 등록된 value를 쓰기 가능
  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider
        value={{
          todos,
        }}
      >
        <TodoDispatchContext.Provider
          value={{
            memoizedDispatch,
          }}
        >
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
