import "./style.css";
import { useState } from "react";

const colors = [
  {
    color: "red",
    value: 3,
  },
  {
    color: "yellow",
    value: 2,
  },
  {
    color: "green",
    value: 1,
  },
];

function TodoList() {
  const [toDo, setToDo] = useState([]);
  const [time, setTime] = useState("start");
  const [selectedColor, setSelectedColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { text } = e.target;
    setToDo([
      ...toDo,
      {
        id: Math.random().toString().slice(2),
        text: text.value,
        priority: selectedColor,
      },
    ]);
    e.target.reset();
  };

  const handleDelete = (id) => {
    setToDo(toDo.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const item = toDo.find((item) => item.id === id);
    setToDo(item);
    // setEdit(item);
  };
  const handleColor = (item) => {
    setSelectedColor(item.value);
  };

  const handleBtn = () => {
    setTime("stop");
  };

  console.log(toDo);

  return (
    <div className="wrapper">
      <h2 className="toDo__title">Do List</h2>
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <input
          className="form__inp"
          type="text"
          placeholder="Enter your text"
          name="text"
          id="next"
        />

        {colors.map((item) => {
          return (
            <div
              key={item?.color}
              onClick={() => handleColor(item)}
              className="colors"
              style={{ backgroundColor: item.color }}
            ></div>
          );
        })}

        <button className="form__btn">add</button>
      </form>
      <ul className="list">
        {toDo
          .sort(({ priority: a }, { priority: b }) => b - a)
          .map((item, index) => (
            <li className="item" key={`item-${index}`}>
              <p className="item__text">{item.text}</p>
              <div className="icon__wrapper">
                <p
                  style={{
                    border: "1px solid black",
                    padding: "5px 15px",
                    borderRadius: 5,
                    borderColor: "#7c7c7c",
                  }}
                >
                  {item.priority}
                </p>
                <button onClick={handleBtn} className="form__btn">
                  {time}
                </button>

                <i
                  onClick={() => handleEdit(item.id)}
                  className="fa-solid fa-pen"
                ></i>
                <i
                  onClick={() => handleDelete(item.id)}
                  className="fa-solid fa-trash"
                ></i>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
