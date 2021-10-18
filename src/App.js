import { useState, useEffect } from "react";
import Header from "./components/header/Header";

const getLocalStorage = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

// RadioButton ref

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(getLocalStorage());
  const [todosCount, setTodosCount] = useState();
  const [filters, setFilters] = useState("All");

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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Filtering Logic

  let finalTodos = todos;
  if (filters === "Active") {
    finalTodos = finalTodos.filter((final) => final.completed === false);
  } else if (filters === "Completed") {
    finalTodos = finalTodos.filter((final) => final.completed === true);
  } else {
    finalTodos = todos;
  }

  const changeFilter = (filterName) => {
    setFilters(filterName);
  };

  return (
    <>
      <Header
        todoInput={todoInput}
        changeTodoInput={changeTodoInput}
        addTodo={addTodo}
        todos={finalTodos}
        changeStatus={changeStatus}
        deleteTodo={deleteTodo}
        todosCount={todosCount}
        clearCompleted={clearCompleted}
        changeFilter={changeFilter}
        filters={filters}
      />
    </>
  );
}

export default App;
