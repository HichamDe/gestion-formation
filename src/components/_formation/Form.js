import { useEffect, useState } from "react";
import { saver, fetcher, update } from "../../utils/crud";
import {
  setFormationFormType,
  setFormations,
  setFormationFormVisibility,
  setSelectedFormation,
} from "../../store/action";

import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();

  const { formationFormType, selectedFormation } = useSelector((state) => {
    return {
      formationFormType: state.formationFormType,
      selectedFormation: state.selectedFormation,
    };
  });

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [state, setState] = useState("PROGRAMMED");

  function addFormation() {
    saver("http://localhost:8000/formations", {
      title: title,
      level: level,
      starting_date: startingDate,
      ending_date: endingDate,
      state: state
    });
    fetcher("http://localhost:8000/formations").then((data) => {
      dispatch(setFormations(data));
    });
    dispatch(setFormationFormVisibility(false));
  }

  function updateFormation() {

    update(`http://localhost:8000/formations/${selectedFormation.id}`, {
      title: title,
      level: level,
      starting_date: startingDate,
      ending_date: endingDate,
      state: state
    });

    fetcher("http://localhost:8000/formations").then((data) => {
      dispatch(setFormations(data));
    });

    dispatch(setFormationFormVisibility(false));

    fetcher("http://localhost:8000/formations").then((data) => {
      dispatch(setFormations(data));
    });
  }

  function close() {
    setTitle("");
    setLevel("");
    setStartingDate("");
    setEndingDate("");

    dispatch(setFormationFormType("add"));
    dispatch(setSelectedFormation(""));
    dispatch(setFormationFormVisibility(false));
  }

  useEffect(() => {
    if (selectedFormation) {
      setTitle(selectedFormation.title);
      setLevel(selectedFormation.level);
      setStartingDate(selectedFormation.starting_date);
      setEndingDate(selectedFormation.ending_date);
    }
  }, [selectedFormation]);

  return (
    <div class="fixed z-20 top-0 left-0 h-[100vh] w-[100%] bg-black/50 flex flex-row-reverse justify-center items-center">
      <svg
        onClick={close}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-white cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <div class="flex flex-wrap justify-center items-center gap-4 border lg:w-[30%] md:w-[40%] w-[60%] p-5 rounded-lg border-gray-700 bg-gray-900 ">
        <form class="max-w-sm mx-auto">
          <h1 className="text-white text-4xl mb-5 text-bold"> Add Formation</h1>

          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Level Number
            </label>
            <input
              onChange={(e) => setLevel(e.target.value)}
              value={level}
              type="number"
              id="password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Starting Date
            </label>
            <input
              onChange={(e) => setStartingDate(e.target.value)}
              value={startingDate}
              type="date"
              id="password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ending Date
            </label>
            <input
              onChange={(e) => setEndingDate(e.target.value)}
              value={endingDate}
              type="date"
              id="password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          {formationFormType == "add" ? (

            <div class="flex items-start mb-5">
              <label
                for="terms"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Note That You Can't Remove Your{" "}
                <a
                  href="#"
                  class="text-red-600 hover:underline dark:text-red-500"
                >
                  Formations !!
                </a>
              </label>
            </div>

          ) : (
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                State
              </label>
              <select
                id="status"
                onChange={(e) => setState(e.target.value)}
                value={state}
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              >
                <option>ACTIVE</option>
                <option>COMPLETED</option>
                <option>CANCELED</option>
                <option>PROGRAMMED</option>
              </select>
            </div>
          )}
          <div class="basis-[100%] flex justify-start items-center">
            {formationFormType == "add" ? (
              <button
                type="button"
                onClick={addFormation}
                class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add Formation
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={updateFormation}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Update Formation
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}