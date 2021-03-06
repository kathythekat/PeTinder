import { useContext } from "react";
import PetContext from "./PetContext";

function Buttons() {
  const { pet, getRandomPet, type } = useContext(PetContext);
  return (
    <div className="flex justify-center space-x-28 pb-2">
      <div className="">
        <a href={pet.url} target="_blank" rel="noreferrer">
          <button className="border border-pink-400 text-pink-400 p-2 rounded-lg hover:bg-pink-500 hover:text-white focus:outline-none">
            Find Out More
          </button>
        </a>
      </div>
      <div className="">
        <button
          onClick={() => getRandomPet(type)}
          className="bg-pink-400 text-white p-2 rounded-lg lg:hover:bg-pink-500 focus:outline-none"
        >
          Next Pet
        </button>
      </div>
    </div>
  );
}

export default Buttons;
