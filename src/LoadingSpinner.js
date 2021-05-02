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
    <div className="flex flex-col items-center justify-center h-1/2">
      {spinIcon}
      <h3 className="my-4">Finding your best furriend...</h3>
    </div>
  );
}

export default LoadingSpinner;
