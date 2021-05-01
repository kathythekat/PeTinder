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
        <h1 className="my-2">Welcome to PeTinder! {pawIcon} </h1>
        <p>Where every pet deserves a chance!</p>
      </div>
    </div>
  );
}

export default Home;
