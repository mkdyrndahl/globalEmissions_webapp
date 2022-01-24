import React from "react";

const HomeTable = (props) => {
  const naChildren = props.NADATA.map((country) => {
    return (
      <tr>
        <td key={country.country}>{country.country}</td>
        <td key={country.a2}>{country.a2}</td>
        <td key={country.emissions}>{country.emissions}</td>
      </tr>
    );
  });
  
  const euChildren = props.EUDATA.map((country) => {
    return (
      <tr>
        <td key={country.country}>{country.country}</td>
        <td key={country.a2}>{country.a2}</td>
        <td key={country.emissions}>{country.emissions}</td>
      </tr>
    );
  });

  return (
    <div id="container" key="0">
      <h1 key="01">North American Emissions</h1>
      <table key="12" className="table">
        <thead key="22">
          <tr key="32">
            <th key="42">Country Name</th>
            <th key="52">Alpha-2 Code</th>
            <th key="62">Emissions in MtC02</th>
          </tr>
        </thead>
        <tbody key="7">{naChildren}</tbody>
      </table>
      <br key="03"></br>
      <h1 key="02">European Emissions</h1>
      <table key="1" className="table">
        <thead key="2">
          <tr key="3">
            <th key="4">Country Name</th>
            <th key="5">Alpha-2 Code</th>
            <th key="6">Emissions in MtC02</th>
          </tr>
        </thead>
        <tbody key="7">{euChildren}</tbody>
      </table>
    </div>
  );
};

export default HomeTable;
