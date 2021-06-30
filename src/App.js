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
  const [type, setType] = useState(sessionStorage.getItem("petType") || null);
  const [cats, setCats] = useState(null);
  const [dogs, setDogs] = useState(null);
  const [pet, setPet] = useState(
    JSON.parse(sessionStorage.getItem("pet")) || null
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
    fetchDogsFromApi();
    fetchCatsFromApi();
    const interval = setInterval(() => {
      fetchDogsFromApi();
      fetchCatsFromApi();
    }, 180000);
    return () => clearInterval(interval);
  }, []);

  function getRandomPet(type) {
    if (type === "dog" && dogs) {
      const dogData = generateRandom(dogs);
      sessionStorage.setItem("pet", JSON.stringify(dogData));
      setPet(dogData);
    } else if (type === "cat" && cats) {
      const catData = generateRandom(cats);
      sessionStorage.setItem("pet", JSON.stringify(catData));
      setPet(catData);
    }
  }

  function changeType(clickedTab) {
    sessionStorage.setItem("petType", clickedTab);
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
