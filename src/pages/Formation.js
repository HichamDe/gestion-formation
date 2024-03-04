import { useEffect } from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import { fetcher } from "../utils/crud";
import Row from "../components/_formation/Row";
import Filter from "../components/_formation/Filter";
import Form from "../components/_formation/Form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setFormations } from "../store/action";
import { update } from "../utils/crud";

export default function Formation() {
  const dispatch = useDispatch();

  const { isVisibale, formations, formationFormVisibility } = useSelector(
    (state) => {
      return {
        formationFormVisibility: state.formationFormVisibility,
        isVisibale: state.isVisibale,
        formations: state.formations,
      };
    }
  );

  useEffect(() => {
    fetcher("http://localhost:8000/formations").then((data) => {
      dispatch(setFormations(data));
    });
  }, []);


  function checkFormationContraints(formation) {
    // check if the formation is canceled

    if (formation.state == "CANCELED" || formation.state == "COMPLETED") {
      // view in a none changeable row
      return <Row changeable={false} data={formation} />

    } else {
      // check if the formation is Completed or Active
      // <option>PROGRAMMED</option>
      // <option>ACTIVE</option>
      // <option>COMPLETED</option>

      const startingDate = new Date(formation.starting_date);
      const endingDate = new Date(formation.ending_date);
      const currentDate = new Date();

      if (daysDiff(startingDate, currentDate) <= 0) {
        if (daysDiff(endingDate, currentDate) <= 0) {
          // COMPLETED
          formation.state = "COMPLETED"
          update(`http://localhost:8000/formations/${formation.id}`, {
            title: formation.title,
            level: formation.level,
            starting_date: formation.starting_date,
            ending_date: formation.ending_date,
            state: "COMPLETED",
            assign: formation.assign

          });
          setFormations("")

          return <Row changeable={false} data={formation} />;
        } else {
          // Updating to Active
          formation.state = "ACTIVE"
          update(`http://localhost:8000/formations/${formation.id}`, {
            title: formation.title,
            level: formation.level,
            starting_date: formation.starting_date,
            ending_date: formation.ending_date,
            state: "ACTIVE",
            assign: formation.assign

          });
          setFormations("")

          return <Row changeable={true} data={formation} />;
        }
      } else {
        // Still PROGRAMMED
        return <Row changeable={true} data={formation} />;
      }


    }



  }

  function daysDiff(date1, date2) {
    return (date1 - date2) / (1000 * 60 * 60 * 24);
  }

  return (
    <>
      <div class="xl:h-screen bg-gray-800">
        {isVisibale ? <Slider /> : ""}
        <Nav />
        {formationFormVisibility ? <Form /> : ""}
        <Filter />
        <div className="max-w-screen-xl m-auto">
          <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div class="overflow-x-auto rounded shadow dark:bg-gray-900 bg-white">
              <table class="w-full table-auto">
                <thead class="bg-lightGray-50">
                  <tr class="text-xs text-left text-gray-500 border-b border-gray-200 dark:border-gray-800">

                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                      Title
                    </th>
                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                      Starting Date
                    </th>
                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                      Ending Date
                    </th>
                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                      Level
                    </th>
                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                      State
                    </th>
                    <th class="px-6 py-4 font-medium dark:text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {formations
                    ? formations.map((formation) => checkFormationContraints(formation))
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
