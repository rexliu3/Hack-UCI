import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import firebase from "../../firebase/index";

import RangeDatePicker from "../common/RangeDatePicker";
import Chart from "../../utils/chart";

class CasesByState extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
    this.state = {
      cases: [],
      growth: [],
      states:[]
    };
  }

  getUsers = async () => {
    firebase.db
      .collection("covid-cases-growth-by-state")
      .get()
      .then(async querySnapshot => {
        let cases_o = [];
        let growth_o = [];
        let states_o = [];

        querySnapshot.forEach(async doc => {
          //prints the data in the database to the console
          //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          cases_o.push(doc.data().cases)
          growth_o.push(doc.data().growth)
          states_o.push(doc.data().state)
        });

        console.log(cases_o)

        this.setState(state => {
          // Important: read `state` instead of `this.state` when updating.
          return { cases: cases_o, growth: growth_o, states: states_o };
        });

        

      })
      .catch(err => {
        console.log(err.message);
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const chartOptions = {
      responsive: true,
      legend: {
        position: "top",
        display: false,
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
              autoSkip: false,
              padding: 10,
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

    const myFunction = async () => {
        var cases_data = await this.state.cases;

        while (!cases_data) {
          cases_data = await this.state.cases;
        }
        console.log(this.state.cases)

        const chartData = {
          datasets: [
            {
              label: "Cases",
              data: this.state.cases, //[10, 20, 30, 40],
              backgroundColor: [ 
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
              ],
              borderWidth: 1
            },
            /*{
              label: "Growth Rate",
              data: this.state.growth,
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
            }*/
          ],
          labels: this.state.states
        };

        const mixedChart = new Chart(this.canvasRef.current, {
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
    };

    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Covid-19 Cases By State</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <canvas
            height="120"
            style={{ maxWidth: "100% !important" }}
            ref={this.canvasRef}
            onClick={myFunction()}
          />
        </CardBody>
      </Card>
    );
  }
}

export default CasesByState;
