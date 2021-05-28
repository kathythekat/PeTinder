import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPaw } from "@fortawesome/free-solid-svg-icons";

const pawIcon = (
  <FontAwesomeIcon
    icon={faPaw}
    size="2x"
    className="fill-current text-pink-500"
  />
);

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4 lg:my-8 rounded-lg p-4">
        <h1 className="my-2">PeTinder {pawIcon} </h1>
        <p>Find your best furriend furrever!</p>
      </div>
      <div className="max-w-full mx-8 md:max-w-md border border-gray-300 shadow p-6 rounded-lg">
        <p>
          How it works: All adoptable pets are obtained from the Petfinder API.
          PeTinder will show you one pet at a time, because every animal
          deserves a chance to be looked at! You may keep clicking next to get a
          new dog or cat, generated randomly. If you feel like they may be the
          one, you have the option to find out more about them on the Petfinder
          site.{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
