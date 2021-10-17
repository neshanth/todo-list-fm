import { useState } from "react";
import Header from "./components/header/Header";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const changeTodoInput = (e) => {
    setTodoInput(e.target.value);
  };
  const addTodo = (event) => {
    if (event.key === "Enter") {
      const newTodo = {
        id: Math.random(),
        todo: event.target.value,
        completed: false,
      };
      setTodos([...todos, newTodo]);

      setTodoInput("");
    }
  };
  const changeStatus = (id, e) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          let status = todo.completed ? true : false;
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <>
      <Header
        todoInput={todoInput}
        changeTodoInput={changeTodoInput}
        addTodo={addTodo}
        todos={todos}
        changeStatus={changeStatus}
      />
    </>
  );
}

export default App;
