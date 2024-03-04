import { useEffect } from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import { fetcher } from "../utils/crud";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setFormations, setAssignFormVisibility, setSelectedFormationAssign } from "../store/action";
import Form from "../components/_assign/Form";

export default function Formation() {
    const dispatch = useDispatch();

    const { isVisibale, formations, assignFormVisibility } = useSelector(state => state);

    useEffect(() => {
        fetcher("http://localhost:8000/formations?state=PROGRAMMED").then((data) => {
            dispatch(setFormations(data));
        });
    }, []);


    return (
        <>
            <div class="xl:h-screen bg-gray-800">
                {isVisibale ? <Slider /> : ""}
                <Nav />
                {assignFormVisibility ? <Form /> : ""}
                <div className="max-w-screen-xl m-auto">
                    <div class="justify-center flex-1 max-w-7xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                        <div class=" w-[90%] grid grid-cols-2  gap-4 justify-center items-center">
                            {
                                formations ? formations.map(formation =>
                                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <img class="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                        <div class="flex flex-col justify-between p-4 leading-normal">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {formation.title} </h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This cours is presented localy for level: {formation.level} to improve the sets of our Employees</p>
                                            <div>
                                                <button onClick={() => {
                                                    dispatch(setSelectedFormationAssign(formation))
                                                    dispatch(setAssignFormVisibility(true))

                                                }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Assign Employee</button>
                                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Assign By Diploma</button>


                                            </div>
                                        </div>

                                    </a>) : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

