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
    <div className="h-full bg-home bg-center bg-cover bg-no-repeat">
      <div className="h-screen flex flex-col items-center lg:justify-center">
        <div className="lg:m-auto max-w-full mx-8 lg:max-w-lg border bg-white bg-opacity-50 p-6 rounded-md">
          <div className="mb-6">
            <h1 className="my-1 text-center">PeTinder {pawIcon} </h1>
            <p className="text-center">Find your best furriend furrever!</p>
          </div>
          <p>
            How it works: All adoptable pets are obtained from the Petfinder
            API. PeTinder will show you one pet at a time, because every animal
            deserves a chance to be looked at! You may keep clicking next to get
            a new dog or cat, generated randomly. If you feel like they may be
            the one, you have the option to find out more about them on the
            Petfinder site.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
