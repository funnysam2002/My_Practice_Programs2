import React, { useState } from "react";

function Image() {
  const imgList = [
    "https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP",
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://img.freepik.com/premium-photo/beautiful-butterfly-images-brighten-your-day_1199394-94530.jpg",
  ];

  const [num, setNum] = useState(0);

  return (
    <div>
      <img src={imgList[num]} height="100" width="100" />
      <div>
        <button disabled={num <= 0} onClick={() => setNum((val) => val - 1)}>
          ⬅️
        </button>
        <button
          disabled={num === imgList.length - 1}
          onClick={() => setNum((val) => val + 1)}
        >
          ➡️
        </button>
      </div>
    </div>
  );
}

export default Image;
