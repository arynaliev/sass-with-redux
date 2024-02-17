import React from "react";

const DogCard = ({ imageUrl, breed }) => {
  return (
    <div>
      <img src={imageUrl} alt="dog" width={"300px"} />
      <p>{breed}</p>
    </div>
  );
};

export default DogCard;
