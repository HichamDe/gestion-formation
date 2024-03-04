import { saver, fetcher } from "../../utils/crud";
import { useDispatch, useSelector } from "react-redux";
import { setAssignFormType, setAssignFormVisibility, setFormations } from "../../store/action"
import { useEffect, useState } from "react";

export default function Form() {

    const dispatch = useDispatch();
    const [employees, setEmployees] = useState("");
    const [assignedEmployees, setAssignedEmployees] = useState("");
    const [assignEmployeeId, setAssignEmployeeId] = useState("")
    const { assignFormType, selectedFormationAssign } = useSelector(state => state);


    function assign() {
        saver("http://localhost:8000/assign", {
            formation_id: selectedFormationAssign.id,
            employee_id: assignEmployeeId
        });
        dispatch(setAssignFormVisibility(false));
    }

    function close() {

        // dispatch(setAssignFormType("add"));
        dispatch(setAssignFormVisibility(false));
    }

    useEffect(() => {
        fetcher("http://localhost:8000/employees").then((data) => {
            setEmployees(data);
        }).then(() => {
            fetcher("http://localhost:8000/assign").then((data) => {

                data.forEach((relation) => {
                    
                })
            })
        });


    }, [])


    return (
        <div class="fixed z-20 top-0 left-0 h-[100vh] w-[100%] bg-black/50 flex flex-col justify-center items-center">
            <div className="lg:w-[30%] md:w-[40%] w-[60%]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    onClick={close}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-white cursor-pointer float-right -mr-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
            </div>

            <div class="flex flex-wrap justify-center items-center gap-4 border lg:w-[30%] md:w-[40%] w-[60%] p-5 rounded-lg border-gray-700 bg-gray-900 ">
                <form class="">
                    <h1 className="text-white text-4xl mb-3 text-bold"> Assign Employee</h1>
                    <h2 className="text-white text-3xl mb-5 text-bold"> to <span className="font-bold underline">{selectedFormationAssign.title}</span> </h2>


                    <div class="mb-5">
                        <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Assigned Employee(s)
                        </label>
                        <table class="w-full table-auto">
                            <thead class="bg-lightGray-50">
                                <tr class="text-xs text-left text-gray-500 border-b border-gray-200 dark:border-gray-800">

                                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                                        Employee
                                    </th>
                                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                                        Diploma
                                    </th>
                                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                                        Level
                                    </th>
                                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-200 dark:border-gray-800">
                                    <td class="px-6 text-sm font-medium dark:text-gray-400">
                                        JHON
                                    </td>
                                    <td class="px-6 text-sm font-medium dark:text-gray-400">
                                        DIPLOMA
                                    </td>
                                    <td class="px-6 text-sm font-medium dark:text-gray-400">
                                        LEVEL
                                    </td>
                                    <td class="px-6 text-sm font-medium dark:text-gray-400">
                                        <button>Remove</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mb-5">
                        <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select Employee
                        </label>
                        <select
                            onChange={(e) => setAssignEmployeeId(e.target.value)}
                            id="status"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        >
                            {
                                employees ? employees.map(employee => <option value={employee.id}> {employee.fullName} </option>) : ""
                            }

                        </select>
                    </div>



                    <div class="basis-[100%] flex justify-start items-center">
                        <button
                            onClick={assign}
                            type="button"
                            class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Assign Employee
                        </button>

                    </div>
                </form>
            </div>
        </div >
    );
}