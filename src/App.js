import { useState, useEffect } from "react";
import Header from "./components/header/Header";

const URL = "https://murmuring-sierra-02508.herokuapp.com/todos";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [todosCount, setTodosCount] = useState();
  const [filters, setFilters] = useState("All");

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setTodos(res);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setTodosCount(todos.length);
  }, [todos]);

  const changeTodoInput = (e) => {
    setTodoInput(e.target.value);
  };
  const addTodo = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      fetch(URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          TodoItem: event.target.value,
          Completed: false,
        }),
      })
        .then((res) => res.json())
        .then((data) => setTodos([...todos, data]));

      setTodoInput("");
    }
  };
  const deleteTodo = (id) => {
    fetch(`${URL}/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const filteredTodo = todos.filter((todo) => todo.id !== res.id);
        setTodos(filteredTodo);
      });
  };
  const changeStatus = (id, e) => {
    let completed = false;
    if (e.target.checked) {
      completed = true;
    } else {
      completed = false;
    }

    fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Completed: completed,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === data.id) {
            return { ...data, Completed: data.Completed };
          } else {
            return todo;
          }
        });
        setTodos([...updatedTodos]);
      });
  };
  const clearCompleted = () => {
    const completedTodos = todos.filter((todo) => todo.Completed === true);
    const inComplete = todos.filter((todo) => todo.Completed === false);
    completedTodos.forEach((completedTodo) => {
      fetch(`${URL}/${completedTodo.id}`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setTodos([...inComplete]));
    });
  };

  let finalTodos = todos;
  if (filters === "Active") {
    finalTodos = finalTodos.filter((final) => final.Completed === false);
  } else if (filters === "Completed") {
    finalTodos = finalTodos.filter((final) => final.Completed === true);
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
