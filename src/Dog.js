import DefaultDogImg from "./DefaultDogImg";
import Buttons from "./Buttons";
require("dotenv").config();

function Dog({ dog }) {
  console.log(
    dog.tags?.reduce(
      (allCharacteristics, tag) => `${tag}, ${allCharacteristics}`,
      ""
    ),
    dog.tags
  );
  const dogFeatures = [
    { label: "Breed", value: dog.breeds.primary },
    { label: "Age", value: dog.age },
    { label: "Gender", value: dog.gender },
    {
      label: "Spayed/neutered ",
      value: dog.attributes.spayed_neutered ? "yes" : "no",
    },
    {
      label: "Housetrained",
      value: dog.attributes.house_trained ? "yes" : "no",
    },
    {
      label: `Current with shots`,
      value: dog.attributes.shots_current ? "yes" : "no",
    },
    { label: "Status", value: dog.status },
    {
      label: "Characteristics",
      value:
        dog.tags?.reduce(
          (allCharacteristics, tag) => `${tag} ${allCharacteristics}`,
          ""
        ) || "unknown",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center h-3/4">
        <h2>{dog.name}</h2>
        <div className="flex justify-center items-center space-x-8 my-2">
          <div>
            {dog.photos[0] ? (
              <img
                className="rounded-lg h-auto w-max"
                alt={dog.name}
                src={dog.photos[0]?.medium}
              />
            ) : (
              <DefaultDogImg />
            )}
          </div>
          <div className="">
            <ul className="list-none self-start">
              {dogFeatures.map(({ label, value }, i) => (
                <li key={i}>
                  <span className="text-black text-opacity-70">{label}</span>:{" "}
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Buttons />
    </>
  );
}

export default Dog;
