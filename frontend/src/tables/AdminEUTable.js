import React from "react";
import AdminCells from "./AdminCells";
import AdminFormEU from "../forms/AdminFormEU";
const AdminEUTable = (props) => {
  return (
    <div id="container" key="0">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AdminFormEU />
      </div>
      <h1 key="01">European Emissions</h1>
      <table key="12" className="table">
        <thead key="22">
          <tr key="32">
            <th key="42">Country Name</th>
            <th key="52">Alpha-2 Code</th>
            <th key="62">Emissions in MtC02</th>
            <th key="63">Edit/Delete</th>
          </tr>
        </thead>
        <tbody key="7">
          {props.EU.map((place) => {
            return (
              <AdminCells
                country={place.country}
                a2={place.a2}
                emissions={place.emissions}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminEUTable;
