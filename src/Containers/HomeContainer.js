import React from "react";
import MainSearch from "../Components/Body/MainSearch";
import HowItWorks from "../Components/Body/HowItWorks";

import "../App.css";

function HomeContainer(props) {
  return (
    <div>
      <MainSearch />
      <HowItWorks />
    </div>
  );
}

export default HomeContainer;
