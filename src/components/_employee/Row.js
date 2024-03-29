import { useDispatch } from "react-redux";
import {
  setEmployeeFormType,
  setSelectedEmployee,
  setEmployeeFormVisibility,
} from "../../store/action";

export default function Row(props) {
  const dispatch = useDispatch();

  function edit() {
    dispatch(setEmployeeFormType("update"));
    dispatch(setSelectedEmployee(props.data));
    dispatch(setEmployeeFormVisibility(true));
  }

  return (
    <tr class="border-b border-gray-200 dark:border-gray-800">
      <td class="flex items-center px-6 py-3 font-medium">
        <input class="mr-4" type="checkbox" name="" id="" />
        <div class="flex">
          <img
            class="object-cover w-10 h-10 mr-4 rounded-full"
            src="https://i.postimg.cc/WbPKvgBr/pexels-italo-melo-2379005.jpg"
            alt=""
          />
          <div>
            <p class="text-sm font-medium dark:text-gray-400">
              {props.data.fullName}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-500">
              jhon@gmail.com
            </p>
          </div>
        </div>
      </td>
      <td class="px-6 text-sm font-medium dark:text-gray-400">
        {props.data.salary}
      </td>
      <td class="px-6 text-sm font-medium dark:text-gray-400">
        {props.data.diploma}
      </td>
      <td class="px-6 text-sm font-medium dark:text-gray-400">
      </td>
      <td class="px-6">
        <div class="flex ">
          <button
            onClick={() => {
              edit();
            }}
            class="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
          >
            Edit
          </button>
          <a
            href="#"
            class="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
          >
            View
          </a>
        </div>
      </td>
    </tr>
  );
}
