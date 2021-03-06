import HighMaps from "highcharts/highmaps";
import { Component } from "react";
import { findDOMNode } from "react-dom";
var maps = require("../mapdata/european-union.js");

// As the map is rendered as soon as it is mounted, the DOM does not have enough time to get the data from the props.
// the data needs to be hardcoded until I can find a solution
const EUDATA = [
  {
    country: "Austria",
    a2: "at",
    schengen: true,
    eurozone: true,
    accessionDate: "1/1/1995",
    emissions: "73,764,112",
  },
  {
    country: "Belgium",
    a2: "be",
    schengen: true,
    eurozone: true,
    accessionDate: "3/25/1957",
    emissions: "94,722,813",
  },
  {
    country: "Bulgaria",
    a2: "bg",
    schengen: false,
    eurozone: false,
    accessionDate: "1/1/2007",
    emissions: "50,872,910",
  },
  {
    country: "Croatia",
    a2: "hr",
    schengen: false,
    eurozone: false,
    accessionDate: "7/1/2013",
    emissions: "19,408,194",
  },
  {
    country: "Cyprus",
    a2: "cy",
    schengen: false,
    eurozone: true,
    accessionDate: "5/1/2004",
    emissions: "6,872,427",
  },
  {
    country: "Czech Republic",
    a2: "cz",
    schengen: true,
    eurozone: false,
    accessionDate: "5/1/2004",
    emissions: "111,825,428",
  },
  {
    country: "Denmark",
    a2: "dk",
    schengen: true,
    eurozone: false,
    accessionDate: "1/1/1973",
    emissions: "38,007,645",
  },
  {
    country: "Estonia",
    a2: "ee",
    schengen: true,
    eurozone: true,
    accessionDate: "5/1/2004",
    emissions: "22,402,414",
  },
  {
    country: "Finland",
    a2: "fi",
    schengen: true,
    eurozone: true,
    accessionDate: "1/1/1995",
    emissions: "51,183,960",
  },
  {
    country: "France",
    a2: "fr",
    schengen: true,
    eurozone: true,
    accessionDate: "3/25/1957",
    emissions: "331,533,320",
  },
  {
    country: "Germany",
    a2: "de",
    schengen: true,
    eurozone: true,
    accessionDate: "3/25/1957",
    emissions: "775,752,190",
  },
  {
    country: "Greece",
    a2: "gr",
    schengen: true,
    eurozone: true,
    accessionDate: "1/1/1981",
    emissions: "67,840,662",
  },
  {
    country: "Hungary",
    a2: "hu",
    schengen: true,
    eurozone: false,
    accessionDate: "5/1/2004",
    emissions: "51,018,899",
  },
  {
    country: "Ireland",
    a2: "ie",
    schengen: false,
    eurozone: true,
    accessionDate: "1/1/1973",
    emissions: "39,086,565",
  },
  {
    country: "Italy",
    a2: "it",
    schengen: true,
    eurozone: true,
    accessionDate: "3/25/1957",
    emissions: "358,139,550",
  },
  {
    country: "Latvia",
    a2: "lv",
    schengen: true,
    eurozone: true,
    accessionDate: "5/1/2004",
    emissions: "8,157,157",
  },
  {
    country: "Lithuania",
    a2: "lt",
    schengen: true,
    eurozone: true,
    accessionDate: "5/1/2004",
    emissions: "13,685,264",
  },
  {
    country: "Luxembourg",
    a2: "lu",
    schengen: true,
    eurozone: true,
    accessionDate: "3/25/1957",
    emissions: "10,144,632",
  },
  {
    country: "Malta",
    a2: "mt",
    schengen: true,
    eurozone: true,
    accessionDate: "5/1/2004",
    emissions: "2,257,870",
  },
  {
    country: "Netherlands",
    a2: "nl",
    schengen: true,
    eurozone: true,
    accessionDate: "3/25/1957",
    emissions: "163,419,285",
  },
  {
    country: "Poland",
    a2: "pl",
    schengen: true,
    eurozone: false,
    accessionDate: "5/1/2004",
    emissions: "296,659,670",
  },
  {
    country: "Portugal",
    a2: "pt",
    schengen: true,
    eurozone: true,
    accessionDate: "1/1/1986",
    emissions: "50,142,844",
  },
  {
    country: "Romania",
    a2: "ro",
    schengen: false,
    eurozone: false,
    accessionDate: "1/1/2007",
    emissions: "78,770,824",
  },
  {
    country: "Slovakia",
    a2: "sk",
    schengen: true,
    eurozone: true,
    accessionDate: "5/1/2004",
    emissions: "36,817,242",
  },
  {
    country: "Slovenia",
    a2: "si",
    schengen: true,
    eurozone: true,
    accessionDate: "5/1/2004",
    emissions: "14,722,601",
  },
  {
    country: "Spain",
    a2: "es",
    schengen: true,
    eurozone: true,
    accessionDate: "1/1/1986",
    emissions: "251,892,320",
  },
  {
    country: "Sweden",
    a2: "se",
    schengen: true,
    eurozone: false,
    accessionDate: "1/1/1995",
    emissions: "44,694,415",
  },
];

var newData = [];


// Props to hold EU data
EUDATA.forEach((country) => {
  let newArray = [];
  newArray.push(country.a2);
  let str = country.emissions;
  var num = parseInt(str.replace(/,/g, ""));
  newArray.push(num);
  newData.push(newArray);
});

class EUEmissionsChart extends Component {
  constructor(props) {
    super(props)
    this.state = {"EUDATA" : props.EUDATA}
  }

  componentDidMount() {
    var newData = [];

    EUDATA.forEach((country) => {
      let newArray = [];
      newArray.push(country.a2);
      let str = country.emissions;
      var num = parseInt(str.replace(/,/g, ""));
      newArray.push(num);
      newData.push(newArray);
    });
    
    const options = {
      chart: {
        map: "custom/european-union",
      },

      title: {
        text: "The European Union",
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
          name: "Emissions in MtCO2",
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
    return(
    <div className="eu-highchart"></div>
    
    )
  }
}

export default EUEmissionsChart;
