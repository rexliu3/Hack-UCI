import React, { useContext } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import { auth, provider } from "../firebase/index";

import { UserContext } from "../firebase/UserProvider";

import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button
} from "shards-react";

let logged_in = false;

const UserProfileLite = () => {
  const user = useContext(UserContext);
  
  if (user) {
    const { email, displayName, uid, photoURL } = user;
    console.log('ljlakjglajglakgj' + user.email + user.displayName + user.uid + '|||' + user.photoURL);
  } else {
    const email = null
    const displayName = null
    const uid = null
    const photoURL = null
  }
  

  const onSignInHandler = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <div style={{ height: "100%" }}>
      {user && (
        <Container fluid className="main-content-container px-4">
          <div>
            <Row noGutters className="page-header py-4">
              <PageTitle
                title="User Profile"
                subtitle="Overview"
                md="12"
                className="ml-sm-auto mr-sm-auto"
              />
            </Row>
            <Row>
              <Col lg="4">
                <UserDetails data={{photo: user.photoURL, name: user.displayName}}/>
              </Col>
              <Col lg="8">
                <UserAccountDetails />
              </Col>
            </Row>{" "}
          </div>
        </Container>
      )}

      {!user && (
        <Container
          fluid
          className="main-content-container px-4"
          style={{ height: "35vh" }}
        >
          <Card
            small
            className="mb-3"
            style={{ width: "30%", margin: "10vw auto 0vw auto" }}
          >
            <CardHeader className="border-bottom">
              <h4 className="m-0">Login for User Profile</h4>
            </CardHeader>

            <CardBody className="p-0">
              <ListGroup flush>
                <h5 style={{ margin: "0.5rem 0 0.5rem 1rem" }}>
                  Features of Account
                </h5>
                <ul style={{ fontWeight: "normal" }}>
                  <li>Submit an Appeal Request</li>
                  <li>Estimated Vaccination Date</li>
                  <li>Phone SMS Updates</li>
                </ul>
              </ListGroup>
              <Button
                outline
                style={{ margin: "2vw auto", display: "flex" }}
                onClick={() => onSignInHandler()}
              >
                Google Authentication
              </Button>
            </CardBody>
          </Card>
        </Container>
      )}
    </div>
  );
};

export default UserProfileLite;
