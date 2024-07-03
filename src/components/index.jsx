import "./style.css";

function TodoList() {
  return (
    <form className="form__wrapper">
      <input
        className="form__inp"
        type="text"
        placeholder="Enter your text"
        name=""
        id="todo"
      />
      <button className="form__btn">add</button>
    </form>
  );
}

export default TodoList;
