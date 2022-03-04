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

  //   useEffect(() => {
  //     filterTodoHandler();
  //   }, []);
  useEffect(() => {
    filterTodoHandler();
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
    setTodos([
      ...todos,
      {
        text: inputTodo,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInputTodo("");
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
    //   const allTodos = [...todos];

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

  console.log(todos);

  return (
    <>
      <div className="todo">
        <form className="todo-form">
          <div className="form-group text-group">
            <input
              value={inputTodo}
              onChange={inputTodoHandler}
              type="text"
              className="form-control"
              placeholder="your task"
            />
            <button
              className="plus-btn btn btn-primary"
              onClick={addTodoHandler}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className="form-group select-group">
            <select
              onChange={inputSelectHandler}
              value={filterdValue}
              className="form-select"
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
                <span className="text">{todo.text}</span>
                <button
                  className="btn btn-success"
                  onClick={() => completeTodoHandler(todo.id)}
                >
                  <GiCheckMark />
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodoHandler(todo.id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Todo;
