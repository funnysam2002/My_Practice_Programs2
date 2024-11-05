import React, { useState } from "react";

function Showmoreless() {
  const [showMore, setShowMore] = useState(false);

  let content =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum dolore ab velit veniam adipisci repellat esse, quae nobis error qui porro accusantium reprehenderit fuga accusamus officia voluptate commodi a.";

  return (
    <div>
      {content.slice(0, !showMore ? 55 : content.length - 1)}
      <b onClick={() => setShowMore(!showMore)}>
        {!showMore ? "...Show More" : " Show less"}
      </b>
    </div>
  );
}

export default Showmoreless;
