import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const TaskForm = ({
  inputTodo,
  inputTodoHandler,
  addTodoHandler,
  filterdValue,
  inputSelectHandler,
  search,
  searchHandler,
}) => {
  return (
    <>
      <form className="todo-form">
        <div className="form-group text-group">
          <input
            name="todo"
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
        <div className="form-group search-group">
          <input
            name="search"
            value={search}
            onChange={searchHandler}
            type="text"
            className="form-control"
            placeholder="Search todo..."
          />
        </div>
      </form>
    </>
  );
};

export default TaskForm;
