import { useEffect, useState } from "react";
import { saver, fetcher, update } from "../../utils/crud";
import {
  setEmployeeFormType,
  setEmployees,
  setEmployeeFormVisibility,
  setSelectedEmployee,
} from "../../store/action";

import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();

  const { employeeFormType, selectedEmployee } = useSelector((state) => {
    return {
      employeeFormType: state.employeeFormType,
      selectedEmployee: state.selectedEmployee,
    };
  });

  const [fullName, setFullName] = useState("");
  const [diploma, setDiploma] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [salary, setSalary] = useState("");

  function addEmployee() {
    saver("http://localhost:8000/employees", {
      fullName: fullName,
      diploma: diploma,
      img_url: imgUrl,
      salary: salary,
    });

    dispatch(setEmployeeFormVisibility(false));

    fetcher("http://localhost:8000/employees").then((data) => {
      dispatch(setEmployees(data));
    });
  }

  function updateEmployee() {
    const obj = {
      fullName: fullName,
      diploma: diploma,
      img_url: imgUrl,
      salary: salary,
    };

    update(`http://localhost:8000/employees/${selectedEmployee.id}`, obj);

    dispatch(setEmployeeFormVisibility(false));

    fetcher("http://localhost:8000/employees").then((data) => {
      dispatch(setEmployees(data));
    });
  }

  function close() {
    setFullName("");
    setDiploma("");
    setImgUrl("");
    setSalary("");
    dispatch(setEmployeeFormType("add"));
    dispatch(setSelectedEmployee(""));
    dispatch(setEmployeeFormVisibility(false));
  }

  useEffect(() => {
    if (selectedEmployee) {
      setFullName(selectedEmployee.fullName);
      setDiploma(selectedEmployee.diploma);
      setImgUrl(selectedEmployee.img_url);
      setSalary(selectedEmployee.salary);
    }
  }, [selectedEmployee]);

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
          <h1 className="text-white text-4xl mb-5 text-bold">{employeeFormType == "add" ? "Add" : "Update"} Employee</h1>

          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
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
              Diploma
            </label>
            <select
              id="status"
              onChange={(e) => setDiploma(e.target.value)}
              value={diploma}
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            >
              <option value="">Select Your Diploma</option>
              <option>Technicien</option>
              <option>Technicien Spécialisé</option>
              <option>Ingenieur</option>
            </select>
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Profile IMG Url
            </label>
            <input
              onChange={(e) => setImgUrl(e.target.value)}
              value={imgUrl}
              type="text"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Salary
            </label>
            <input
              onChange={(e) => { setSalary(parseInt(e.target.value)) }}
              value={salary}
              type="number"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          {employeeFormType == "add" ? (
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
                  Employees !!
                </a>
              </label>
            </div>
          ) : (
            ""
          )}
          <div class="basis-[100%] flex justify-start items-center">
            {employeeFormType == "add" ? (
              <button
                type="button"
                onClick={addEmployee}
                class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add Employee
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={updateEmployee}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Update Employee
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
