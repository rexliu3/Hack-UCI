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

  render() {
    const months = [
      {month: 'February 2020', url: ''},
      {month: 'March 2020', url: ''},
      {month: 'April 2020', url: ''},
      {month: 'May 2020', url: ''},
      {month: 'June 2020', url: ''},
      {month: 'July 2020', url: ''},
      {month: 'August 2020', url: ''},
      {month: 'September 2020', url: ''},
      {month: 'October 2020', url: ''},
      {month: 'November 2020', url: ''},
      {month: 'December 2020', url: ''},
      {month: 'January 2021', url: ''},
    ]
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Pandemic Vulnerability Index Interactive Heatmaps</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <div className="main">
            {months.map(one =>
            <a href={one.url}>
              <button className="main__button">{one.month}</button>
              </a>
              )}
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
