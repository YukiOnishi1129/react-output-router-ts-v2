import { createContext, FC, ReactNode } from "react";
import { useTodo } from "../hooks/useTodo";

/**
 * TodoContext
 */
const TodoContext = createContext({});

// TodoContextをエクスポート
export { TodoContext };

type TodoProviderProps = {
  children: ReactNode;
};

/**
 * TodoProvider
 * @param children
 * @constructor
 */
export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  // カスタムフックから状態とロジックを呼び出してコンテキストプロバイダーにあてがう
  const { originTodoList, addTodo, updateTodo, deleteTodo } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        originTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
