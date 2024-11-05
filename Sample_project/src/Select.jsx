import React, { useState } from "react";

function Select() {
  const [val, setVal] = useState("");
  const Veggies = [
    "Bitter Gourd",
    "Potato",
    "Beans",
    "Carrot",
    "Tomato",
    "Lady Finger",
  ];
  const Fruits = [
    "Mango",
    "Apple",
    "Banana",
    "Grapes",
    "Custard Apple",
    "Papaya",
  ];
  const Diary = ["Paneer", "Milk", "Curd", "Cheese", "Butter", "Kohva"];

  return (
    <div>
      <h1>Select one option here</h1>
      <select onChange={(e) => setVal(e.target.value)}>
        <option value="None" selected>
          Select an option
        </option>
        <option value="Veggies">Vegetables</option>
        <option value="Fruits">Fruits</option>
        <option value="Diary">Diary</option>
      </select>
      <h1>
        The list is:
        {val === "Veggies" ? (
          <ul>
            {Veggies.map((e, id) => (
              <li key={id}>{e}</li>
            ))}
          </ul>
        ) : val === "Fruits" ? (
          <ul>
            {Fruits.map((e, id) => (
              <li key={id}>{e}</li>
            ))}
          </ul>
        ) : val === "Diary" ? (
          <ul>
            {Diary.map((e, id) => (
              <li key={id}>{e}</li>
            ))}
          </ul>
        ) : (
          <ul></ul>
        )}
      </h1>
    </div>
  );
}

export default Select;
