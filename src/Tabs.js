import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faCat, faHome } from "@fortawesome/free-solid-svg-icons";
import PetContext from "./PetContext";

const dogIcon = <FontAwesomeIcon icon={faDog} size="2x" />;
const catIcon = <FontAwesomeIcon icon={faCat} size="2x" />;
const homeIcon = <FontAwesomeIcon icon={faHome} size="2x" />;

const Tabs = ({ changeType }) => {
  const [openTab, setOpenTab] = useState(+sessionStorage.getItem("tab") || 1);
  const { getRandomPet } = useContext(PetContext);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-pink-500"
                    : "text-pink-500 bg-white")
                }
                onClick={(e) => {
                  sessionStorage.setItem("tab", 1);
                  setOpenTab(1);
                }}
                data-toggle="tab"
                to="/"
                role="tablist"
              >
                {homeIcon}
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-pink-500"
                    : "text-pink-500 bg-white")
                }
                onClick={(e) => {
                  sessionStorage.setItem("tab", 2);
                  changeType("dog");
                  getRandomPet("dog");
                  setOpenTab(2);
                }}
                data-toggle="tab"
                to="/dogs"
                role="tablist"
              >
                {dogIcon}
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-pink-500"
                    : "text-pink-500 bg-white")
                }
                onClick={(e) => {
                  sessionStorage.setItem("tab", 3);
                  changeType("cat");
                  getRandomPet("cat");
                  setOpenTab(3);
                }}
                data-toggle="tab"
                to="/cats"
                role="tablist"
              >
                {catIcon}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default function TabsRender({ changeType }) {
  return (
    <>
      <Tabs changeType={changeType} />
    </>
  );
}
