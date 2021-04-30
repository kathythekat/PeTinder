import { useEffect, useState } from "react";
import getToken from "./get-token";
import generateRandom from "./helpers";
require("dotenv").config();

const { default: axios } = require("axios");
const API_URL = "https://api.petfinder.com/v2";

function Dog() {
  const [dogs, setDogs] = useState(null);
  const [dog, setDog] = useState(null);

  async function getDogs() {
    const token = await getToken();
    const resp = await axios.get(
      "https://api.petfinder.com/v2/animals?type=dog&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("API call", resp.data);
    return resp.data.animals;
  }

  useEffect(() => {
    async function fetchDogsFromApi() {
      const dogData = await getDogs();
      setDogs(dogData);
    }
    if (!dogs) fetchDogsFromApi();
  }, []);

  console.log("DOGS ARRAY", dogs);

  function getRandomDog() {
    let randomIdx = generateRandom(dogs);
    let newDog = dogs[randomIdx];
    setDog(newDog);
  }

  if (!dog && dogs) getRandomDog();

  console.log("WOOF!", dog);

  if (!dog) {
    return <div>Finding your new best furry friend...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h2>{dog.name}</h2>
        <img
          className="rounded-lg h-auto"
          alt={dog.name}
          src={dog.photos[0]?.medium}
        />
        <p>Possible breed: {dog.breeds.primary}</p>
        <p>Spayed/neutered: {dog.attributes.spayed_neutered ? "yes" : "no"} </p>
        <p>Housetrained: {dog.attributes.house_trained ? "yes" : "no"} </p>
        <p>
          Current with shots: {dog.attributes.shots_current ? "yes" : "no"}{" "}
        </p>
        <p>Status: {dog.status} </p>
        <a className="text-pink-500" href={dog.url}>
          Find out more!
        </a>
      </div>
    </div>
  );
}

export default Dog;
