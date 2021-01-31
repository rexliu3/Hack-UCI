import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";
import { auth } from "../../firebase/index.js";

import Slider from "@material-ui/core/Slider";

const marks = [
  {
    value: 0,
    label: 'Vaccination',
  },
  {
    value: 25,
    label: '25',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 75,
    label: '75',
  },
  {
    value: 100,
    label: '100 Days Left',
  },
];

const userDetails = {
  jobTitle: "Vulnerable Population",
  performanceReportTitle: "Vaccination Priority",
  performanceReportValue: 74,
  performanceReportTitle2: "Estimated Time of Vaccination",
  performanceReportValue2: 87,
}

const UserDetails = (props) => {
  const { data } = props;
  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-3 mx-auto">
          <img
            className="rounded-circle"
            src={data.photoURL}
            width="110"
          />
        </div>
        <h4 className="mb-0">{data.displayName}</h4>
        <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="px-4">
          <div className="progress-wrapper">
            <strong className="text-muted d-block mb-2">
              {userDetails.performanceReportTitle}
            </strong>
            <Progress
              className="progress-sm"
              value={userDetails.performanceReportValue}
            >
              <span className="progress-value">
                {userDetails.performanceReportValue}%
            </span>
            </Progress>
          </div>
          <div className="progress-wrapper" style={{ marginTop: '1vw' }}>
            <strong className="text-muted d-block mb-2">
              {userDetails.performanceReportTitle2}
            </strong>
            <Slider
              defaultValue={userDetails.performanceReportValue2}
              aria-labelledby="discrete-slider-always"
              step={10}
              disabled='true'
              marks={marks}
              valueLabelDisplay="on"
              style={{ width: '80%', marginLeft: '2vw', marginTop: '1.2vw' }}
            />
          </div>
          <a href="/submit-appeal">
            <Button outline color='secondary' style={{ display: 'inline', margin: '0.5vw auto' }}>
              Apply for Priority Vaccination
          </Button>
          </a>
          <a href="/">
            <Button outline color='secondary' style={{ display: 'inline', margin: '0.5vw auto', float: 'right' }} onClick={() => { auth.signOut() }}>
              Sign Out
            </Button>
          </a>
        </ListGroupItem>
        {/*<ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span>{userDetails.metaValue}</span>
</ListGroupItem>*/}
      </ListGroup>
    </Card>
  )
};
export default UserDetails;
