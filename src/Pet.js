import DefaultImg from "./DefaultImg";
import Buttons from "./Buttons";
import { useContext } from "react";
import PetContext from "./PetContext";
require("dotenv").config();

function Pet() {
  const { pet, pets, type } = useContext(PetContext);

  function getPetCharStr(pet) {
    const charStr = pet.tags?.reduce(
      (allCharacteristics, tag) => `${tag}, ${allCharacteristics}`,
      ""
    );
    return charStr.slice(0, charStr.length - 2);
  }
  console.log("CHAR STRING", getPetCharStr(pet));

  const petFeatures = [
    { label: "Breed", value: pet.breeds.primary },
    { label: "Age", value: pet.age },
    { label: "Gender", value: pet.gender },
    {
      label: "Spayed/neutered ",
      value: pet.attributes.spayed_neutered ? "yes" : "no",
    },
    { label: "Size", value: pet.size },
    {
      label: "Housetrained",
      value: pet.attributes.house_trained ? "yes" : "no",
    },
    {
      label: `Current with shots`,
      value: pet.attributes.shots_current ? "yes" : "no",
    },
    { label: "Status", value: pet.status },
  ];

  if (!pet || !type) {
    return <div>Finding your new best furry friend...</div>;
  }
  return (
    <>
      <div className="flex flex-col h-5/6 max-w-full items-center justify-center md:h-3/5">
        <h2 className="text-center">{pet.name}</h2>
        <div className="flex flex-col justify-center items-center space-x-8 my-4 md:flex-row overflow-auto">
          <div>
            {pet.photos[0] ? (
              <img
                className="rounded-lg h-auto w-max"
                alt={pet.name}
                src={pet.photos[0]?.medium}
              />
            ) : (
              <DefaultImg type={pet.type} />
            )}
          </div>
          <div className="mt-4">
            <ul className="list-none self-start">
              {petFeatures.map(({ label, value }, i) => (
                <li key={i}>
                  <span className="text-black text-opacity-70">{label}</span>:{" "}
                  {value}
                </li>
              ))}
              {pet.tags.length > 0 && (
                <li>
                  <span className="text-black text-opacity-70">
                    Characteristics:
                  </span>
                  {getPetCharStr(pet)}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Buttons />
    </>
  );
}

export default Pet;
