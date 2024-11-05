import React, { useState } from "react";

function App() {
  const [temp, setTemp] = useState(45);

  return (
    <div>
      <h1>
        State of water is <br />
        {temp === 0 ? (
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*7h_sPvJUQkt-gZLJ3kpdqQ.jpeg"
            width="100px"
            height="100px"
          />
        ) : temp === 90 ? (
          <img
            src="https://siwi.org/wp-content/uploads/2021/09/colorful-water-drop-splash-e1635164525186.jpg"
            width="100px"
            height="100px"
          />
        ) : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9D7KaFRY7Su-PqjSniPTBZk-PoCMQQiS1sg&s"
            width="100px"
            height="100px"
          />
        )}
      </h1>
      <button
        onClick={() => {
          setTemp(0);
        }}
      >
        Solid
      </button>
      <button
        onClick={() => {
          setTemp(90);
        }}
      >
        Liquid
      </button>
      <button
        onClick={() => {
          setTemp(110);
        }}
      >
        Gas
      </button>
    </div>
  );
}

export default App;
