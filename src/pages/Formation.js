import { useState } from "react";
import Nav from "../components/Nav";
import Slider from "../components/_employee/Slider";
import { useSelector } from "react-redux";

export default function Dashboard() { 
  const isVisibale = useSelector((state) => {
    return state.isVisibale;
  });

  return (
    <>
      <div class="xl:h-screen bg-gray-800">
        {isVisibale ? <Slider /> : ""}
        <Nav />
        <div className="h-full"></div>
      </div>
    </>
  );
}
