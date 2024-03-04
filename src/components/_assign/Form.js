import { update, fetcher } from "../../utils/crud";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFormationAssign, setAssignFormType, setAssignFormVisibility, setFormations } from "../../store/action"
import { useEffect, useState } from "react";

export default function Form() {

    const dispatch = useDispatch();
    const [employees, setEmployees] = useState(""); // All Employees
    const [assignEmployeeId, setAssignEmployeeId] = useState(""); // the selected emplyee to be assigned
    const { assignFormType, selectedFormationAssign } = useSelector(state => state); // selected Cours
    const [selectedDiploma, setSelectedDiploma] = useState("");

    function assign() {
        if (checkFormationAssignContraints(selectedFormationAssign.assign, assignEmployeeId)) {
            selectedFormationAssign.assign.push(assignEmployeeId)
            update(`http://localhost:8000/formations/${selectedFormationAssign.id}`, {
                title: selectedFormationAssign.title,
                level: selectedFormationAssign.level,
                starting_date: selectedFormationAssign.starting_date,
                ending_date: selectedFormationAssign.ending_date,
                state: selectedFormationAssign.state,
                assign: selectedFormationAssign.assign
            });
            dispatch(setSelectedFormationAssign(""));
            dispatch(setAssignFormVisibility(false));
        } else {
            alert("You Can't add an Employee Twice")
        }

    }

    function close() {

        // dispatch(setAssignFormType("add"));
        dispatch(setAssignFormVisibility(false));
        dispatch(setSelectedFormationAssign("")); 
    }

    useEffect(() => {
        fetcher("http://localhost:8000/employees").then((data) => {
            setEmployees(data);
        })


    }, [])

    function getEmloyee(id) {
        let AssignedEmployee = {};
        employees.forEach((employee) => {
            if (employee.id == id) AssignedEmployee = employee;
        })

        return (
            <tr class="border-b border-gray-200 dark:border-gray-800">
                <td class="px-6 text-sm font-medium dark:text-gray-400">
                    {AssignedEmployee.fullName}
                </td>
                <td class="px-6 text-sm font-medium dark:text-gray-400">
                    {AssignedEmployee.diploma}
                </td>

                <td class="px-6 text-sm font-medium dark:text-gray-400">
                    <button onClick={() => removeAssignedEmployee(AssignedEmployee.id)}>Remove</button>
                </td>
            </tr>
        )


    }

    function removeAssignedEmployee(id) {
        function checkEmployee(assignedId) {
            return assignedId != id;
        }
        update(`http://localhost:8000/formations/${selectedFormationAssign.id}`, {
            title: selectedFormationAssign.title,
            level: selectedFormationAssign.level,
            starting_date: selectedFormationAssign.starting_date,
            ending_date: selectedFormationAssign.ending_date,
            state: selectedFormationAssign.state,
            assign: selectedFormationAssign.assign.filter(checkEmployee)
        });
    }

    function checkFormationAssignContraints(assign, id) {
        // The can be assigned once
        let result = true;
        // Contraint 1
        assign.forEach((employeeId) => {
            if (employeeId == id) result = false;
        })
        return result;

    }

    function assignByDiploma() {
        fetcher(`http://localhost:8000/employees?diploma=${selectedDiploma}`).then((employees) => {
            employees.forEach(employee => {
                if (checkFormationAssignContraints(selectedFormationAssign.assign, employee.id)) {
                    selectedFormationAssign.assign.push(employee.id)
                    update(`http://localhost:8000/formations/${selectedFormationAssign.id}`, {
                        title: selectedFormationAssign.title,
                        level: selectedFormationAssign.level,
                        starting_date: selectedFormationAssign.starting_date,
                        ending_date: selectedFormationAssign.ending_date,
                        state: selectedFormationAssign.state,
                        assign: selectedFormationAssign.assign
                    });
                    dispatch(setSelectedFormationAssign(""));
                    dispatch(setAssignFormVisibility(false));
                } else {
                    alert("One of the diploma owners is already assigned")
                    return false;
                }
            })
        })
    }
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
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    selectedFormationAssign && employees ? selectedFormationAssign.assign.map(employeeId => getEmloyee(employeeId)) : ""
                                }
                            </tbody>
                        </table>
                    </div>

                    <div class="mb-5">

                        {
                            assignFormType == "byDiploma" ?
                                <>
                                    <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Select Diploma
                                    </label>
                                    <select
                                        onChange={(e) => setSelectedDiploma(e.target.value)}
                                        id="status"
                                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    >
                                        <option value="">Not Selected</option>
                                        <option>Technicien</option>
                                        <option>Technicien Spécialisé</option>
                                        <option>Ingenieur</option>

                                    </select>
                                </>
                                :
                                <>
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
                                        <option value="">Not Selected</option>
                                        {
                                            employees ? employees.map(employee => <option value={employee.id}> {employee.fullName} </option>) : ""
                                        }

                                    </select>
                                </>
                        }
                    </div>



                    {
                        assignFormType == "byDiploma" ?
                            <div class="basis-[100%] flex justify-start items-center">
                                <button
                                    onClick={assignByDiploma}
                                    type="button"
                                    class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Assign Employees
                                </button>

                            </div>
                            :
                            <div class="basis-[100%] flex justify-start items-center">
                                <button
                                    onClick={assign}
                                    type="button"
                                    class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    Assign Employee
                                </button>

                            </div>
                    }
                </form>
            </div>
        </div >
    );
}