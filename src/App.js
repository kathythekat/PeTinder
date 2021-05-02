import { BrowserRouter } from "react-router-dom";
import "./App.css";
import TabsRender from "./Tabs";
import Routes from "./Routes";
import { useEffect, useState } from "react";
import PetContext from "./PetContext";
import getCats from "./helpers/get-cats";
import getDogs from "./helpers/get-dogs";
import generateRandom from "./helpers/generate-random";
import LoadingSpinner from "./LoadingSpinner";
require("dotenv").config();

function App() {
  const [type, setType] = useState(null);
  const [cats, setCats] = useState(null);
  const [dogs, setDogs] = useState(null);
  const [pet, setPet] = useState(null);

  useEffect(() => {
    async function fetchCatsFromApi() {
      const petsData = await getCats();
      setCats(petsData);
    }
    async function fetchDogsFromApi() {
      const petsData = await getDogs();
      setDogs(petsData);
    }
    if (!cats) fetchCatsFromApi();
    if (!dogs) fetchDogsFromApi();
  }, []);

  console.log("CATS ARRAY", cats);
  console.log("DOGS ARRAY", dogs);
  console.log("PET", pet);
  console.log("TYPE", type);

  function getRandomPet(type) {
    if (type === "dog") setPet(generateRandom(dogs));
    if (type === "cat") setPet(generateRandom(cats));
  }

  if (!pet && type) {
    getRandomPet(type);
    return <LoadingSpinner />;
  }

  function changeType(clickedTab) {
    setType(clickedTab);
  }

  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        <PetContext.Provider value={{ pet, type, getRandomPet, changeType }}>
          <TabsRender changeType={changeType} />
          <Routes />
        </PetContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
