import React, {useState, useEffect} from "react";
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
import firebase from "../../firebase/index";


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

  const [prio, setPrio] = useState(100);
  const [eta, setEta] = useState(100);

  function calculateWAP(age, healthWorker, careWorker, essentialWorker, pregnant) {
    if (healthWorker) {
      healthWorker = 1
    } else {
      healthWorker = 0
    }
    if (careWorker) {
      careWorker = 1
    } else {
      careWorker = 0
    }
    if (essentialWorker) {
      essentialWorker = 1
    } else {
      essentialWorker = 0
    }
    if (pregnant) {
      pregnant = 1
    } else {
      pregnant = 0
    }

    let elderly = 0
    if (age >= 65) {
      elderly = 1
    } 
    return 2 * elderly + 3 * healthWorker + 2 * careWorker + essentialWorker - 2 * pregnant + age / 65;
  }

  useEffect(() => {
    firebase.db
    .collection("users")
    .doc(data.uid)
    .get()
    .then(function(doc) {
      setPrio(calculateWAP(doc.data().age, doc.data().health, doc.data().care, doc.data().essential, doc.data().pregnant)*10)
      setEta(Math.round((5 / Math.max(calculateWAP(doc.data().age, doc.data().health, doc.data().care, doc.data().essential, doc.data().pregnant), 1))  * 12))
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
  }, []);

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
              defaultValue={userDetails.performanceReportValue}
              value={prio}
            >
              <span className="progress-value">
                {Math.round(prio)}%
            </span>
            </Progress>
          </div>
          <div className="progress-wrapper" style={{ marginTop: '1vw' }}>
            <strong className="text-muted d-block mb-2">
              {userDetails.performanceReportTitle2}
            </strong>
            <Slider
              defaultValue={userDetails.performanceReportValue2}
              value={eta}
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
      </ListGroup>
    </Card>
  )
};
export default UserDetails;
