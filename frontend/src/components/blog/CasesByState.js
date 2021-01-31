import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import firebase from "../../firebase/index";

import RangeDatePicker from "../common/RangeDatePicker";
import Chart from "../../utils/chart";

const CasesByState = () => {
  const [cases, setCases] = useState([])
  const canvasRef = React.createRef();

  const getUsers = async () => {
    firebase.db
      .collection("covid-19 vaccine queue")
      .get()
      .then(async querySnapshot => {
        setCases([325, 25, 23, 2]);
        
        querySnapshot.forEach(async doc => {
          //prints the data in the database to the console
          //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          
        });
      })
      .catch(err => {
        console.log(err.message);
      });
      console.log(cases)
  };

  useEffect(() => {
    getUsers();
    console.log(cases)

    const chartData = {
      datasets: [
        {
          label: "Cases",
          data: cases, //[10, 20, 30, 40],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        },
        {
          label: "Growth Rate",
          data: [100, 40, 30, 20],
          fill: false,
          pointStyle: "circle",
          radius: "4",
          pointHoverRadius: "6",
          lineTension: "0",
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1,

          // Changes this dataset to become a line
          type: "line"
        }
      ],
      labels: ["January", "ahaha", "March", "April"]
    };

    const chartOptions = {
      
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                autoSkip: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                beginAtZero: true,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
    };

    const mixedChart = new Chart(canvasRef.current, {
      type: "bar",
      data: chartData,
      options: chartOptions
    });

    // They can still be triggered on hover.
    /*const buoMeta = mixedChart.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[chartData.datasets[0].data.length - 1]._model.radius = 0;*/

    // Render the chart.
    mixedChart.render();
  }, []);

  return (
    <Card small className="h-100">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Chart</h6>
      </CardHeader>
      <CardBody className="pt-0">
        <canvas
          height="120"
          style={{ maxWidth: "100% !important" }}
          ref={canvasRef}
        />
      </CardBody>
    </Card>
  );
};

export default CasesByState;
