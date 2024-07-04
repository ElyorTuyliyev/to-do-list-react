import "./style.css";
import { useState } from "react";

function TodoList() {
  const [toDo, setToDo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { text } = e.target;
    setToDo([...toDo, text.value]);
    e.target.reset();
  };

  return (
    <div>
      <h2 className="toDo__title">Do List</h2>
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <input
          className="form__inp"
          type="text"
          placeholder="Enter your text"
          name="text"
          id="next"
        />

        <button className="form__btn">add</button>
      </form>
      <ul className="list">
        {toDo.map((item, index) => (
          <li className="item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
