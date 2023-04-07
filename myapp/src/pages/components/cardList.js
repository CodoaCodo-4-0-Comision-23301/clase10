// CardList.js

import React from "react";
import fullData from "../api/data/data.js";

const CardList = () => {
  return (
    <div>
      {fullData.map((data) => (
        <div>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
          <img src={data.image} alt={`Imagen de ${data.title}`} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
