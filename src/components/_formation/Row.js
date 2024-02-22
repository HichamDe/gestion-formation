import { useDispatch } from "react-redux";
import {
  setFormationFormType,
  setSelectedFormation,
  setFormationFormVisibility,
} from "../../store/action";

export default function Row(props) {
  const dispatch = useDispatch();

  function edit() {
    dispatch(setFormationFormType("update"));
    dispatch(setSelectedFormation(props.data));
    dispatch(setFormationFormVisibility(true));
  }

  return (
    <tr class="border-b border-gray-200 dark:border-gray-800">
     
      <td class="px-6 p-5 text-sm font-medium dark:text-gray-400">
        {props.data.title}
      </td>
      <td class="px-6 text-sm font-medium dark:text-gray-400">
        {props.data.starting_date}
      </td>
      <td class="px-6 text-sm font-medium dark:text-gray-400">
        {props.data.ending_date}
      </td>
      <td class="px-6 text-sm font-medium dark:text-gray-400">
        {props.data.level}
      </td>
      <td class="px-6 text-sm font-medium dark:text-gray-400">
        {props.data.state}
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
