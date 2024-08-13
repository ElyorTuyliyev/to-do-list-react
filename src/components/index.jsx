import List from "./List";
import "./style.css";
import { useState } from "react";

const colors = [
  {
    color: "red",
    value: 1,
  },
  {
    color: "yellow",
    value: 2,
  },
  {
    color: "green",
    value: 3,
  },
];

function TodoList() {
  const [toDo, setToDo] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDate = new Date();
    const year = newDate.getFullYear();
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const formattedMonth = month < 10 ? `0${month + 1}` : month + 1;
    const hour = newDate.getHours();
    const minutes = newDate.getMinutes();

    const { text } = e.target;

    if (text.value && selectedColor) {
      setToDo([
        ...toDo,
        {
          id: Math.random().toString().slice(2),
          text: text.value,
          priority: selectedColor,
          time: `${hour}:${minutes} , ${day}.${formattedMonth}.${year} `,
        },
      ]);
      e.target.reset();
    } else {
      alert("Please fill the fields first");
    }
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

  const getPriorityColor = (priority) => {
    return colors.filter((item) => item.value == priority)[0].color;
  };

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
        {console.log(toDo)}
        {toDo
          .sort(({ priority: a }, { priority: b }) => a - b)
          .map((item, index) => (
            <List
              key={index}
              item={item}
              getPriorityColor={getPriorityColor}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
