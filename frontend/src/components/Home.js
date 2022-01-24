import HomeTable from "../tables/HomeTable";
import React from "react";

const Home = (props) => {
  return (
    <div id="main">
      <HomeTable NADATA={props.NADATA} EUDATA={props.EUDATA} />
    </div>
  );
}

export default Home;
