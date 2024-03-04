import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import { fetcher } from "../utils/crud";
import Row from "../components/_employee/Row";
import Filter from "../components/_employee/Filter";
import Form from "../components/_employee/Form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setEmployees } from "../store/action";

export default function Employee() {
  const dispatch = useDispatch();

  const { isVisibale, employees, employeeFormVisibility } = useSelector(
    (state) => {
      return {
        employeeFormVisibility: state.employeeFormVisibility,
        isVisibale: state.isVisibale,
        employees: state.employees,
      };
    }
  );

  useEffect(() => {
    fetcher("http://localhost:8000/employees").then((data) => {
      dispatch(setEmployees(data));
    });
  }, []);

  return (
    <>
      <div class="xl:h-screen bg-gray-800">
        {isVisibale ? <Slider /> : ""}
        <Nav />
        {employeeFormVisibility ? <Form /> : ""}
        <Filter />
        <div className="max-w-screen-xl m-auto">
          <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div class="overflow-x-auto rounded shadow dark:bg-gray-900 bg-white">
              <table class="w-full table-auto">
                <thead class="bg-lightGray-50">
                  <tr class="text-xs text-left text-gray-500 border-b border-gray-200 dark:border-gray-800">
                    <th class="flex items-center py-4 pl-6 font-medium dark:text-gray-400">
                      <input class="mr-4" type="checkbox" name="" id="" />
                      <span>Name</span>
                    </th>
                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                      Salary
                    </th>
                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                      Diploma
                    </th>
                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                      Number Of Courses
                    </th>
                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employees
                    ? employees.map((employee) => <Row data={employee} />)
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
