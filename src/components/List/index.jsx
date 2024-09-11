import { useState } from "react";

const List = ({ item, getPriorityColor, handleDelete, handleEdit }) => {
  const [isTaskStarted, setIsTaskStarted] = useState(false);

  const handleStarted = () => {
    if (isTaskStarted) {
      handleDelete(item.id);
    } else {
      setIsTaskStarted(!isTaskStarted);
    }
  };

  return (
    <li style={{ position: "relative" }} className="item">
      <p className="item__text">{item.text}</p>
      <div className="icon__wrapper">
        <div
          style={{
            padding: "15px 15px",
            borderRadius: 5,
            backgroundColor: getPriorityColor(item.priority),
          }}
        ></div>

        <button onClick={handleStarted} className="form__btn">
          {isTaskStarted ? "complete" : "start"}
        </button>

        <i onClick={() => handleEdit(item.id)} className="fa-solid fa-pen"></i>
        <i
          onClick={() => handleDelete(item.id)}
          className="fa-solid fa-trash"
        ></i>
        <p
          style={{
            position: "absolute",
            right: 10,
            top: 40,
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          Created at time: {item.time}
        </p>
      </div>
    </li>
  );
};

export default List;
