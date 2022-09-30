import React from "react";
import { PropagateLoader } from "react-spinners";
import network from "../network";

function Loading() {
  return (
    <div className="bg-[#091B18]  h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        <img
          className="rounded-full h-20 w-20"
          src="https://betkings.app/wp-content/uploads/2022/09/betk.png"
          alt=""
        ></img>
        <h1 className="text-lg text-white font-bold">
          Connecting to {network}
        </h1>
        <br></br>
        <h1 className="text-lg text-white font-bold">
          Loading the BETKING Lottery...
        </h1>
      </div>
      <PropagateLoader color="white"></PropagateLoader>
    </div>
  );
}

export default Loading;
