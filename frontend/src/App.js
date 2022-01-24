import "./App.css";
import Home from "./components/Home";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import EUEmissionsChart from "./components/EUEmissionsChart"
import NAEmissionsChart from "./components/NAEmissionsChart"
import NewNavBar from "./components/NewNavBar"
import MyFooter from "./components/MyFooter"
import { BrowserRouter } from "react-router-dom";
import AdminNATable from "./tables/AdminNATable";
import AdminEUTable from "./tables/AdminEUTable";


const App = () => {
  const [NADATA, setNAData] = useState([]);
  const [EUDATA, setEUData] = useState([]);

  const getNAData = async () => {
    await axios.get("http://localhost:5000/nacountries").then((response) => {
      setNAData(response.data)
    });
  };
  const getEUData = async () => {
    await axios.get("http://localhost:5000/eucountries").then((response) => {
      setEUData(response.data)
    });
  };
  
  useEffect(() => {
    //All data is pulled from the database and stored as plain json
    getNAData();
    getEUData();
  },[]);

  return (
    <div className="App">
      <NewNavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home NADATA={NADATA} EUDATA={EUDATA} />}></Route>
          <Route
            path="/nacountries"
            element={<NAEmissionsChart NAS={NADATA} />}
          ></Route>
          <Route
            path="/eucountries"
            element={<EUEmissionsChart EUS={EUDATA} />}
          ></Route>
          <Route 
            path="/adminNA"
            element={<AdminNATable NA={NADATA}/>}
          ></Route>
          <Route
            path="/adminEU"
            element={<AdminEUTable EU={EUDATA}/>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <MyFooter />
    </div>
  );
};

export default App;
