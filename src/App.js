import { useState, useEffect } from "react";
import Header from "./components/header/Header";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [todosCount, setTodosCount] = useState();

  useEffect(() => {
    setTodosCount(todos.length);
  }, [todos]);

  const changeTodoInput = (e) => {
    setTodoInput(e.target.value);
  };
  const addTodo = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      const newTodo = {
        id: Math.random(),
        todo: event.target.value,
        completed: false,
      };
      setTodos([...todos, newTodo]);

      setTodoInput("");
    }
  };
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...filteredTodos]);
  };
  const changeStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };
  const clearCompleted = () => {
    const completedTodos = todos.filter((todo) => todo.completed !== true);
    setTodos([...completedTodos]);
  };
  return (
    <>
      <Header
        todoInput={todoInput}
        changeTodoInput={changeTodoInput}
        addTodo={addTodo}
        todos={todos}
        changeStatus={changeStatus}
        deleteTodo={deleteTodo}
        todosCount={todosCount}
        clearCompleted={clearCompleted}
      />
    </>
  );
}

export default App;
