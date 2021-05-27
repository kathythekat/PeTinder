import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const spinIcon = (
  <FontAwesomeIcon
    icon={faSpinner}
    size="10x"
    className="fill-current text-pink-200"
    pulse
  />
);
function LoadingSpinner() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col m-auto items-center">
        <h3 className="p-2 text-center">Searching for your best furriend...</h3>
        {spinIcon}
      </div>
    </div>
  );
}

export default LoadingSpinner;
