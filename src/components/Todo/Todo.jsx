import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

import TaskForm from "./TaskForm";
import TodoList from "./TodoList";

const Todo = () => {
  // state stuff
  const [inputTodo, setInputTodo] = useState("");
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterdValue, setFilterdValue] = useState("all");
  const [filterdTodos, setFilterdTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect stuff

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterTodoHandler();
    saveLocalTodos();
  }, [todos, filterdValue]);

  // function stuff
  const inputTodoHandler = (e) => {
    setInputTodo(([e.target.name] = e.target.value));
  };
  const searchHandler = (e) => {
    setSearch(([e.target.name] = e.target.value));
  };
  const inputSelectHandler = (e) => {
    setFilterdValue(([e.target.name] = e.target.value));
  };

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!!inputTodo) {
      setTodos([
        ...todos,
        {
          text: inputTodo,
          completed: false,
          id: Math.floor(Math.random() * 1000),
        },
      ]);
      setInputTodo("");
    } else {
      return alert("Please create task");
    }
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const editTodoHandler = (id) => {
    console.log("edit handler");
  };

  const filterTodoHandler = () => {
    switch (filterdValue) {
      case "completed": {
        setFilterdTodos(todos.filter((todo) => todo.completed === true));
        break;
      }
      case "incompleted": {
        setFilterdTodos(todos.filter((todo) => todo.completed === false));
        break;
      }
      default: {
        setFilterdTodos(todos);
      }
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  // pagination stuff
  const todosPerPage = 5;
  const lastIndex = currentPage * todosPerPage;
  const firstIndex = lastIndex - todosPerPage;
  const currentTodo = filterdTodos.slice(firstIndex, lastIndex);
  const totalTodos = filterdTodos.length;
  const totalPage = Math.ceil(totalTodos / todosPerPage);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const prevPaginate = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPaginate = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <div className="todo">
        <h2 className="title">Simple Todo Application</h2>
        <TaskForm
          inputTodo={inputTodo}
          inputTodoHandler={inputTodoHandler}
          addTodoHandler={addTodoHandler}
          filterdValue={filterdValue}
          inputSelectHandler={inputSelectHandler}
          search={search}
          searchHandler={searchHandler}
        />
        <TodoList
          search={search}
          filterdTodos={currentTodo}
          completeTodoHandler={completeTodoHandler}
          deleteTodoHandler={deleteTodoHandler}
          editTodoHandler={editTodoHandler}
        />
        {filterdTodos.length > 4 && (
          <Pagination
            totalTodos={totalTodos}
            totalPage={totalPage}
            todosPerPage={todosPerPage}
            paginate={paginate}
            currentPage={currentPage}
            prevPaginate={prevPaginate}
            nextPaginate={nextPaginate}
          />
        )}
      </div>
    </>
  );
};

export default Todo;
