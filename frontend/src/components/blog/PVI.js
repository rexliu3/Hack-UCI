import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";

import Chart from "../../utils/chart";

import Button from "@material-ui/core/Button"

import "./PVI.scss";

class PVI extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartConfig = {
      type: "pie",
      data: this.props.chartData,
      options: {
        ...{
          legend: {
            position: "bottom",
            labels: {
              padding: 25,
              boxWidth: 20
            }
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: "index",
            position: "nearest"
          }
        },
        ...this.props.chartOptions
      }
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Pandemic Vulnerability Index</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <div className="main">
            <Button></Button>
          </div>
        </CardBody>
        <CardFooter className="border-top">
          <Row>
            <Col className="text-right view-report">
              {/* eslint-disable-next-line */}
              <a href="#">View full report &rarr;</a>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}

export default PVI;
