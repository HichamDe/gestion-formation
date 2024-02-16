import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Slider from "../components/_employee/Slider";
import { useSelector } from "react-redux";
import fetcher from "../utils/fetcher";
import Row from "../components/_employee/Row";
import Form from "../components/_employee/Form";

export default function Employee() {
  const isVisibale = useSelector((state) => {
    return state.isVisibale;
  });
  const [employees, setEmployees] = useState("");

  useEffect(() => {
    fetcher("http://localhost:8000/employees").then((data) => {
      setEmployees(data);
    });
  }, []);

  return (
    <>
      <div class="xl:h-screen bg-gray-800">
        {isVisibale ? <Slider /> : ""}
        <Nav />
        <Form />
        <div className="max-w-screen-xl m-auto border-2">
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
                      Job Title
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
