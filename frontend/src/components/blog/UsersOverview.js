import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import firebase from "../../firebase/index";

import RangeDatePicker from "../common/RangeDatePicker";
import Chart from "../../utils/chart";

class UsersOverview extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
    this.state = {
      vaccinations: [],
    };
  }

  getUsers = async () => {
    const that = this
    firebase.db
      .collection("vaccinations")
      .doc('daily')
      .get()
      .then(function(doc) {
        that.setState(state => {
          // Important: read `state` instead of `this.state` when updating.
          console.log(doc.data().data)
          return { vaccinations: doc.data().data};
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
              autoSkip: true,
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
        var vaccinations_data = await this.state.vaccinations;

        while (!vaccinations_data) {
          vaccinations_data = await this.state.vaccinations;
        }

        var labes = []

        for (let i = 1; i <= 30; i ++) {
          labes.push(i)
        }

        const chartData = {
          datasets: [
            {
              label: "Vaccinations",
              data: vaccinations_data, //[10, 20, 30, 40],
              backgroundColor: 'orange',
              borderColor: 'orange',
              fill: false,
              borderWidth: 1,
              pointRadius: 3,
              pointHoverRadius: 6,
            },
          ],
          labels: labes
        };

        const mixedChart = new Chart(this.canvasRef.current, {
          type: "line",
          data: chartData,
          options: chartOptions
        });

        // Render the chart.
        mixedChart.render();
    };

    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Vaccinations in United States over Last Month</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <canvas
            height="100"
            style={{ maxWidth: "100% !important" }}
            ref={this.canvasRef}
            onClick={myFunction()}
          />
        </CardBody>
      </Card>
    );
  }
}

export default UsersOverview;
