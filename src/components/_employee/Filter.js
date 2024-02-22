import { useState } from "react";
import { setEmployeeFormVisibility, setEmployees } from "../../store/action";
import { useDispatch } from "react-redux";
import { fetcher } from "../../utils/crud";

export default function Filter() {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [salaryStart, setSalaryStart] = useState("");
  const [salaryEnd, setSalaryEnd] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  function filter() {
    fetcher(
      `http://localhost:8000/employees?fullName=${fullName}&salary_gt=${salaryStart}&salary_lt=${salaryEnd}&job_title=${jobTitle}`
    ).then((data) => {
      console.log(data);
      dispatch(setEmployees(data));
    });
  }

  function reset() {
    setSalaryStart("")
    setSalaryEnd("")
    setFullName("")
    fetcher("http://localhost:8000/employees").then((data) => {
      dispatch(setEmployees(data));
    });
  }

  return (
    <div class="w-screen max-w-screen-xl m-auto mt-4">
      <div class="flex flex-col">
        <div class="rounded-xl p-6">
          <div class="">
            <div class="relative mb-10 w-full flex  items-center justify-between rounded-md ">
              <svg
                class="absolute text-white left-2 block h-5 w-5"
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
                name="search"
                class="h-12 w-full cursor-text rounded-md border py-4 pr-40 pl-12 shadow-sm outline-none text-gray-400 bg-gray-900 border-gray-700"
                placeholder="Search by name, job , salary, etc"
              />
              <button
                onClick={() => dispatch(setEmployeeFormVisibility(true))}
                class="rounded-lg ml-5 bg-blue-600 px-8 py-3 font-medium text-white  outline-none hover:opacity-80 focus:ring"
              >
                Employee
              </button>
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div class="flex flex-col">
                <label
                  for="name"
                  class="text-sm font-medium dark:text-gray-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  id="name"
                  placeholder="Jhon Doe"
                  class="mt-2 block w-full rounded-md border px-2 py-2 shadow-sm outline-none text-gray-400 bg-gray-900 border-gray-700"
                />
              </div>

              <div class="flex flex-col">
                <label
                  for="manufacturer"
                  class="text-sm font-medium dark:text-gray-500"
                >
                  Salary From (Dhs)
                </label>

                <input
                  type="number"
                  onChange={(e) => setSalaryStart(e.target.value)}
                  value={salaryStart}
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
                  Salary To (Dhs)
                </label>
                <input
                  onChange={(e) => setSalaryEnd(e.target.value)}
                  value={salaryEnd}
                  type="number"
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
                  Job Title
                </label>

                <select
                  id="status"
                  onChange={(e) => setJobTitle(e.target.value)}
                  class="mt-2 block w-full cursor-pointer rounded-md border  bg-gray-900 text-gray-400 border-gray-700 px-2 py-2 shadow-sm outline-none "
                >
                  <option value="">All</option>
                  <option>DESIGNER</option>
                  <option>DEVELOPER</option>
                  <option>QA</option>
                </select>
              </div>
            </div>

            <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
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