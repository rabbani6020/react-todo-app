import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { FaTrashAlt } from "react-icons/fa";
const TodoList = ({
  filterdTodos,
  search,
  completeTodoHandler,
  deleteTodoHandler,
}) => {
  return (
    <>
      {filterdTodos.length > 0 && (
        <div className="todo-list">
          {filterdTodos
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.text.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((todo) => (
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
    </>
  );
};

export default TodoList;
