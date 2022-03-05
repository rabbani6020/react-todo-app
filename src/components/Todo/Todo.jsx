import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";

const Todo = () => {
  // state stuff
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterdValue, setFilterdValue] = useState("all");
  const [filterdTodos, setFilterdTodos] = useState([]);

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

  return (
    <>
      <div className="todo">
        <h2 className="title">Simple Todo Application</h2>
        <form className="todo-form">
          <div className="form-group text-group">
            <input
              value={inputTodo}
              onChange={inputTodoHandler}
              type="text"
              className="form-control"
              placeholder="your task"
            />
            <button className="plus-btn" onClick={addTodoHandler}>
              <AiOutlinePlus />
            </button>
          </div>
          <div className="form-group select-group">
            <select
              onChange={inputSelectHandler}
              value={filterdValue}
              className="form-select form-control"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incompleted">Incompleted</option>
            </select>
          </div>
        </form>
        {filterdTodos.length > 0 && (
          <div className="todo-list">
            {filterdTodos.map((todo) => (
              <div className="todo-item" key={todo.id}>
                <div className="text-area">
                  <span
                    className={`task-text ${todo.completed ? "complete" : ""}`}
                  >
                    {todo.text}
                  </span>
                </div>

                <div className="btn-wrap">
                  <button
                    className="complete-btn"
                    onClick={() => completeTodoHandler(todo.id)}
                  >
                    <GiCheckMark />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTodoHandler(todo.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Todo;
