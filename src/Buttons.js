import { useContext } from "react";
import PetContext from "./PetContext";

function Buttons() {
  //on click, call getRandomDog, render new Dog
  const { dog, getRandomDog } = useContext(PetContext);
  return (
    <div className="flex justify-center space-x-28">
      <div className="">
        <a href={dog.url}>
          <button className="border border-pink-400 text-pink-400 p-2 rounded-lg hover:opacity-50">
            Find out more
          </button>
        </a>
      </div>
      <div className="">
        <button
          onClick={() => getRandomDog()}
          className="border border-pink-400 text-pink-400 p-2 rounded-lg hover:opacity-50 focus:outline-none"
        >
          Show next
        </button>
      </div>
    </div>
  );
}

export default Buttons;
