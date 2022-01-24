import HighMaps from "highcharts/highmaps";
import { Component } from "react";
import { findDOMNode } from "react-dom";
var maps = require("../mapdata/north-america.js");

// As the map is rendered as soon as it is mounted, the DOM does not have enough time to load the data from the properties.
// the data needs to be hardcoded until I can find a workaround
const NADATA = [
  {
    country: "United States",
    a2: "us",
    emissions: "5,011,686,600",
    CUSMA: true,
  },
  {
    country: "Mexico",
    a2: "mx",
    emissions: "441,412,750",
    CUSMA: true,
  },
  {
    country: "Canada",
    a2: "ca",
    emissions: "675,918,610",
    CUSMA: true,
  },
  {
    country: "Guatemala",
    a2: "gt",
    emissions: "18,539,316",
    CUSMA: false,
  },
  {
    country: "Haiti",
    a2: "ht",
    emissions: "3,086,897",
    CUSMA: false,
  },
  {
    country: "Cuba",
    a2: "cu",
    emissions: "30,389,116",
    CUSMA: false,
  },
  {
    country: "Honduras",
    a2: "hn",
    emissions: "9,320,279",
    CUSMA: false,
  },
  {
    country: "Nicaragua",
    a2: "ni",
    emissions: "5,325,447",
    CUSMA: false,
  },
  {
    country: "El Salvador",
    a2: "sv",
    emissions: "6,853,766",
    CUSMA: false,
  },
  {
    country: "Costa Rica",
    a2: "cr",
    emissions: "8,328,890",
    CUSMA: false,
  },
  {
    country: "Panama",
    a2: "pa",
    emissions: "11,599,764",
    CUSMA: false,
  },
  {
    country: "Jamaica",
    a2: "ja",
    emissions: "8,946,575",
    CUSMA: false,
  },
  {
    country: "Trinidad and Tobago",
    a2: "tt",
    emissions: "34,974,263",
    CUSMA: false,
  },
  {
    country: "Belize",
    a2: "bz",
    emissions: "1,114,105",
    CUSMA: false,
  },
  {
    country: "Bahamas",
    a2: "bs",
    emissions: "4,404,247",
    CUSMA: false,
  },
  {
    country: "Barbados",
    a2: "bb",
    emissions: "1,541,447",
    CUSMA: false,
  },
  {
    country: "Saint Lucia",
    a2: "lc",
    emissions: "608,182",
    CUSMA: false,
  },
  {
    country: "Grenada",
    a2: "gd",
    emissions: "554,848",
    CUSMA: false,
  },
  {
    country: "Saint Vincent and the Grenadines",
    a2: "vc",
    emissions: "362,414",
    CUSMA: false,
  },
  {
    country: "Antigua and Barbuda",
    a2: "ag",
    emissions: "438,763",
    CUSMA: false,
  },
  {
    country: "Saint Kitts and Nevis",
    a2: "kn",
    emissions: "203,036",
    CUSMA: false,
  },
  {
    country: "Greenland",
    a2: "gl",
    emissions: "1530",
    CUSMA: "false",
  },
]

class NAEmissionsMap extends Component {
  constructor(props) {
    super(props)
    this.state = { 
    }
  }
  
  componentDidMount() {
    var newData = []
    NADATA.forEach((country) => {
      let newArray = [];
      newArray.push(country.a2);
      let str = country.emissions;
      var num = parseInt(str.replace(/,/g, ""));
      newArray.push(num);
      newData.push(newArray);
    });

    const options = {
      chart: {
        map: "custom/north-america",
      },

      title: {
        text: "North America",
      },

      subtitle: {
        text: "Carbon Dioxide Emissions Data",
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: "bottom",
        },
      },
      colorAxis: {
        min: 0,
      },
      series: [
        {
          data: newData,
          name: "Emissions in MtC02",
          states: {
            hover: {
              color: "#BADA55",
            },
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
          },
        },
      ],
    };

    this.chart = new HighMaps["Map"](findDOMNode(this), options);
  }

  render() {
    return <div className="na-highchart"></div>;
  }
}

export default NAEmissionsMap;
