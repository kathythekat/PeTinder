import DefaultImg from "./DefaultImg";
import Buttons from "./Buttons";
import { useContext } from "react";
import PetContext from "./PetContext";
import { useMediaQuery } from "react-responsive";
require("dotenv").config();

function Pet() {
  const { pet } = useContext(PetContext);
  const isLargeScreen = useMediaQuery({
    query: "(min-device-width: 1025px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  function getPetCharStr(pet) {
    const charStr = pet.tags?.reduce(
      (allCharacteristics, tag) => `${tag}, ${allCharacteristics}`,
      ""
    );
    return charStr.slice(0, charStr.length - 2);
  }

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

  return (
    <>
      <div className="flex flex-col items-center justify-center h-4/5">
        <h2 className="text-center lg:mt-4">{pet.name}</h2>
        <div className="flex flex-col justify-center h-4/5 space-x-8 my-4 lg:flex-row items-center overflow-auto">
          <div>
            {pet.photos[0] ? (
              <img
                className="rounded-lg h-auto w-max self-center"
                alt={pet.name}
                src={pet.photos[0]?.medium}
              />
            ) : (
              <DefaultImg type={pet.type} />
            )}
          </div>
          <div className="mt-4">
            <ul>
              {petFeatures.map(({ label, value }, i) => (
                <li key={i} className="break-words md:p-0.5">
                  <span className="text-black text-opacity-70">{label}</span>:{" "}
                  {value}
                </li>
              ))}
              {pet.tags.length && (
                <li>
                  <span className="text-gray-500">Characteristics:</span>
                  {getPetCharStr(pet)}
                </li>
              )}
            </ul>
          </div>
        </div>
        {isLargeScreen && <Buttons />}
      </div>
      {isTabletOrMobile && <Buttons />}
    </>
  );
}

export default Pet;
