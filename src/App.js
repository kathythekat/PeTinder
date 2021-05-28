import { BrowserRouter } from "react-router-dom";
import "./App.css";
import TabsRender from "./Tabs";
import Routes from "./Routes";
import { useEffect, useState } from "react";
import PetContext from "./PetContext";
import getCats from "./helpers/get-cats";
import getDogs from "./helpers/get-dogs";
import { generateRandom } from "./helpers/generate-random";
import LoadingSpinner from "./LoadingSpinner";
require("dotenv").config();

function App() {
  const [type, setType] = useState(null);
  const [cats, setCats] = useState(null);
  const [dogs, setDogs] = useState(null);
  const [pet, setPet] = useState(
    JSON.parse(localStorage.getItem("pet")) || null
  );

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
    // eslint-disable-next-line
  }, []);

  // console.log("CATS ARRAY", cats);
  // console.log("DOGS ARRAY", dogs);
  // console.log("PET", pet);
  // console.log("TYPE", type);

  function getRandomPet(type) {
    if (type === "dog" && dogs) {
      const dogData = generateRandom(dogs);
      localStorage.setItem("pet", JSON.stringify(dogData));
      setPet(dogData);
    } else if (type === "cat" && cats) {
      const catData = generateRandom(cats);
      localStorage.setItem("pet", JSON.stringify(catData));
      setPet(catData);
    }
  }

  function changeType(clickedTab) {
    localStorage.setItem("petType", clickedTab);
    setType(clickedTab);
  }
  if (!dogs || !cats) {
    return <LoadingSpinner />;
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
