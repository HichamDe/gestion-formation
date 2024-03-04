import { useState } from "react";
import { setFormationFormVisibility, setFormations } from "../../store/action";
import { useDispatch } from "react-redux";
import { fetcher } from "../../utils/crud";

export default function Filter() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [state, setState] = useState("");

  function filter() {
    fetcher(
      `http://localhost:8000/formations?level=${level}&state=${state}`
    ).then((data) => {
      const result = [];
      const pattern = new RegExp(title, "i");

      data.forEach((formation) => {
        if (pattern.test(formation.title)) {
          result.push(formation);
        }
      })

      dispatch(setFormations(!result ? data : result));
    });
  }

  function reset() {
    setTitle("");
    setLevel("");
    setStartingDate("");
    setEndingDate("");
    fetcher("http://localhost:8000/formations").then((data) => {
      dispatch(setFormations(data));
    });
  }

  function printResult() {
    window.print();
  }

  return (
    <div class="w-screen max-w-screen-xl m-auto mt-4 print:hidden">
      <div class="flex flex-col">
        <div class="rounded-xl p-6">
          <div class="">
            <div class="relative mb-10 w-full text-white flex  items-center justify-between rounded-md ">
              <svg
                class="absolute left-2 block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" class=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
              </svg>
              <input
                type="name"
                disabled
                name="search"
                class="h-12 w-full cursor-text rounded-md border py-4 pr-40 pl-12 shadow-sm outline-none text-gray-400 bg-gray-800 border-gray-700"
                placeholder="Replaced with Formation Title"
              />
              <button
                onClick={() => dispatch(setFormationFormVisibility(true))}
                class="rounded-lg ml-5 bg-blue-600 px-8 py-3 font-medium text-white  outline-none hover:opacity-80 focus:ring"
              >
                Formation
              </button>
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div class="flex flex-col">
                <label
                  for="name"
                  class="text-sm font-medium dark:text-gray-500"
                >
                  Title
                </label>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  id="name"
                  placeholder="Web Developement In Deepth"
                  class="mt-2 block w-full rounded-md border px-2 py-2 shadow-sm outline-none text-gray-400 bg-gray-900 border-gray-700"
                />
              </div>

              <div class="flex flex-col">
                <label
                  for="manufacturer"
                  class="text-sm font-medium dark:text-gray-500"
                >
                  Starting Date
                </label>

                <input
                  type="date"
                  onChange={(e) => setStartingDate(e.target.value)}
                  value={startingDate}
                  id="date"
                  placeholder="ex: 3000"
                  class="mt-2 block w-full cursor-pointer rounded-md border  px-2 py-2 shadow-sm outline-none text-gray-400 bg-gray-900 border-gray-700"
                />
              </div>

              <div class="flex flex-col">
                <label
                  for="date"
                  class="text-sm font-medium dark:text-gray-500"
                >
                  Ending Date To (Dhs)
                </label>
                <input
                  onChange={(e) => setEndingDate(e.target.value)}
                  value={endingDate}
                  type="date"
                  id="date"
                  placeholder="ex: 5000"
                  class="mt-2 block w-full cursor-pointer rounded-md border  px-2 py-2 shadow-sm outline-none text-gray-400 bg-gray-900 border-gray-700"
                />
              </div>

              <div class="flex flex-col">
                <label
                  for="status"
                  class="text-sm font-medium dark:text-gray-500"
                >
                  Status
                </label>

                <select
                  id="status"
                  onChange={(e) => setState(e.target.value)}
                  class="mt-2 block w-full cursor-pointer rounded-md border  bg-gray-900 text-gray-400 border-gray-700 px-2 py-2 shadow-sm outline-none "
                >
                  <option value="">All</option>
                  <option>ACTIVE</option>
                  <option>COMPLETED</option>
                  <option>CANCELED</option>
                  <option>PROGRAMMED</option>
                </select>
              </div>
            </div>

            <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button
                onClick={printResult}
                class="rounded-lg bg-gray-200 px-5 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 0 0 3 3h.27l-.155 1.705A1.875 1.875 0 0 0 7.232 22.5h9.536a1.875 1.875 0 0 0 1.867-2.045l-.155-1.705h.27a3 3 0 0 0 3-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0 0 18 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM16.5 6.205v-2.83A.375.375 0 0 0 16.125 3h-8.25a.375.375 0 0 0-.375.375v2.83a49.353 49.353 0 0 1 9 0Zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 0 1-.374.409H7.232a.375.375 0 0 1-.374-.409l.526-5.784a.373.373 0 0 1 .333-.337 41.741 41.741 0 0 1 8.566 0Zm.967-3.97a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H18a.75.75 0 0 1-.75-.75V10.5ZM15 9.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H15Z" clip-rule="evenodd" />
                </svg>
              </button>
              <button
                onClick={reset}
                class="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
              >
                Reset
              </button>
              <button
                onClick={filter}
                class="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white  outline-none hover:opacity-80 focus:ring"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
