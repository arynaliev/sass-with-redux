import React, { useEffect, useState } from "react";
import DogCard from "../dogCard/DogCard";

const GetDog = () => {
  const [dogList, setDogList] = useState([]);

  const getDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogList([...dogList, data.message]);
    console.log(data);
  };

  const getBreed = (url) => {
    //  const lastSlash = url.lastIndexOf("/");
    //  const breed = url.slice(30, lastSlash);

    const breed = url.split("/")[4];
    return breed;
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <div>
      <button onClick={getDog}>Get Dog</button>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          margin: "auto",
          border: "1px solid black",
        }}
      >
        {dogList.map((el, index) => (
          <DogCard key={index} imageUrl={el} breed={getBreed(el)} />
        ))}
      </div>
    </div>
  );
};

export default GetDog;
