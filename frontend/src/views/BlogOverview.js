import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";

import CasesByState from "./../components/blog/CasesByState";
import PVI from "./../components/blog/PVI";
import Search from "./../components/blog/Search";

import firebase from "../firebase/index";

const BlogOverview = ({ smallStats }) => {
  const [stats, setStats] = useState([]);

  useEffect(() => {

    firebase.db
      .collection("dashboard")
      .doc("general")
      .get()
      .then(function(doc) {
        var stats_edit = [
          {
            label: "Population Receiving One or More Doses",
            value: 0,
            increase: true,
            decrease: false,
            attrs: { md: "6", sm: "6" },
            chartLabels: [null, null, null, null, null, null, null],
            percentage: '',
            datasets: [
              {
                label: "Today",
                fill: "start",
                borderWidth: 1.5,
                backgroundColor: "rgba(0, 184, 216, 0.1)",
                borderColor: "rgb(0, 184, 216)",
                data: [1, 2, 3, 3, 3, 4, 4]
              }
            ]
          },
          {
            label: "Population Receiving Two Doses",
            value: 0,
            increase: true,
            decrease: false,
            attrs: { md: "6", sm: "6" },
            chartLabels: [null, null, null, null, null, null, null],
            percentage: '',
            datasets: [
              {
                label: "Today",
                fill: "start",
                borderWidth: 1.5,
                backgroundColor: "rgba(23,198,113,0.1)",
                borderColor: "rgb(23,198,113)",
                data: [1, 2, 3, 3, 3, 4, 4]
              }
            ]
          },
          {
            label: "Total Covid Cases in US",
            value: 0,
            increase: true,
            decrease: false,
            attrs: { md: "6", sm: "6" },
            chartLabels: [null, null, null, null, null, null, null],
            percentage: '',
            datasets: [
              {
                label: "Today",
                fill: "start",
                borderWidth: 1.5,
                backgroundColor: "rgba(255,180,0,0.1)",
                borderColor: "rgb(255,180,0)",
                data: [2, 3, 3, 3, 4, 3, 3]
              }
            ]
          },
          {
            label: "Total Covid-Related Deaths",
            value: 0,
            increase: true,
            decrease: false,
            attrs: { md: "6", sm: "6" },
            chartLabels: [null, null, null, null, null, null, null],
            percentage: '',
            datasets: [
              {
                label: "Today",
                fill: "start",
                borderWidth: 1.5,
                backgroundColor: "rgba(255,65,105,0.1)",
                borderColor: "rgb(255,65,105)",
                data: [1, 7, 1, 3, 1, 4, 8]
              }
            ]
          },
          {
            label: "Total Covid Cases",
            value: 0,
            increase: true,
            decrease: false,
            attrs: { md: "6", sm: "6" },
            chartLabels: [null, null, null, null, null, null, null],
            percentage: '',
            datasets: [
              {
                label: "Today",
                fill: "start",
                borderWidth: 1.5,
                backgroundColor: "rgb(0,123,255,0.1)",
                borderColor: "rgb(0,123,255)",
                data: [3, 2, 3, 2, 4, 5, 4]
              }
            ]
          }
        ];
        console.log(stats_edit)
        stats_edit[0].value = doc.data().numberReceivingOneOrMoreDoses
        stats_edit[1].value = doc.data().numberReceivingTwoDoses
        stats_edit[2].value = doc.data().totalCovidCasesUS
        stats_edit[3].value = doc.data().totalDeaths
        stats_edit[4].value = doc.data().totalDosesAdministered
        console.log(stats_edit)
        
        setStats(stats_edit)
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          title="Covid-19 Vaccination Dashboard"
          subtitle="The state of vaccinations in the US"
          className="text-sm-left mb-3"
        />
      </Row>

      {/* Small Stats Blocks */}
      <Row>
        {stats.map((stat) => (
          <Col className="col-lg mb-4" {...stats.attrs}>
            <SmallStats
              variation="1"
              chartData={stat.datasets}
              chartLabels={stat.chartLabels}
              label={stat.label}
              value={stat.value}
              percentage={stat.percentage}
              increase={stat.increase}
              decrease={stat.decrease}
            />
          </Col>
        ))}
      </Row>

      <Row>
        <Col lg="8" md="12" sm="12" className="mb-4">
          <CasesByState />
        </Col>
        <Col lg="4" md="6" sm="12" className="mb-4">
          <PVI />
        </Col>
      </Row>

      <Row>
        <Col lg="4" md="6" sm="12" className="mb-4">
          <UsersByDevice />
        </Col>
        <Col lg="8" md="12" sm="12" className="mb-4">
          <Search />
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12" sm="12" className="mb-4">
          <UsersOverview />
        </Col>
      </Row>
    </Container>
  );
};

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Your Vaccine Date Countdown",
      value: "20 Days",
      percentage: "",
      increase: false,
      decrease: true,
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: []
        }
      ]
    },
    {
      label: "Total Doses Administered",
      value: "30.5 Million",
      percentage: "",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Fully Vaccinated Individuals",
      value: "3.35 Million",
      percentage: "",
      increase: true,
      decrease: false,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: "Shots Per Day",
      value: "1.3 Million",
      percentage: "",
      increase: false,
      decrease: false,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgb(255,65,105)",
          data: [1, 7, 1, 3, 1, 4, 8]
        }
      ]
    },
    {
      label: "One dose recieved",
      value: "7.2%",
      percentage: "",
      increase: true,
      decrease: false,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(0,123,255,0.1)",
          borderColor: "rgb(0,123,255)",
          data: [3, 2, 3, 2, 4, 5, 4]
        }
      ]
    }
  ]
};

export default BlogOverview;
