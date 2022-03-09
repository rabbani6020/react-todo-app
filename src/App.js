import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="todo-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Todo />
            {/* <Posts /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
