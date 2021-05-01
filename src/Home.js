import { useContext, useEffect, useState } from "react";
import getToken from "./get-token";
import generateRandom from "./helpers";
import Dog from "./Dog";
import PetContext from "./PetContext";
require("dotenv").config();

const { default: axios } = require("axios");
const API_URL = "https://api.petfinder.com/v2";

function Home() {
  const [dogs, setDogs] = useState(null);
  const [dog, setDog] = useState(null);

  async function getDogs() {
    const token = await getToken();
    const resp = await axios.get(`${API_URL}/animals?type=dog&page=1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    let newDog = generateRandom(dogs);
    setDog(newDog);
  }

  if (!dog && dogs) getRandomDog();

  console.log("WOOF!", dog);

  if (!dog || !dogs) {
    return <div>Finding your new best furry friend...</div>;
  }

  return (
    <PetContext.Provider value={{ dog, getRandomDog }}>
      <Dog dog={dog} />
    </PetContext.Provider>
  );
}

export default Home;
