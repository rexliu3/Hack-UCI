import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import { makeStyles } from "@material-ui/core/styles";
import "./questions.scss";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

const questions = [
  {
    question: "What is a novel coronavirus",
    answer:
      "A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.",
    num: 1
  },
  {
    question:
      "Why is the disease being called coronavirus disease 2019, COVID-19",
    answer: `On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, CO stands for corona, VI for virus, and D for disease. Formerly, this disease was referred to as 2019 novel coronavirus or 2019-nCoV. There are many types of human coronaviruses including some that commonly cause mild upper-respiratory tract illnesses. COVID-19 is a new disease, caused by a novel (or new) coronavirus that has not previously been seen in humans.`,
    num: 2
  },
  {
    question:
      "How does the virus spread?",
    answer: `The virus that causes COVID-19 most commonly spreads between people who are in close contact with one another (within about 6 feet, or 2 arm lengths). It spreads through respiratory droplets or small particles, such as those in aerosols, produced when an infected person coughs, sneezes, sings, talks, or breathes.
    These particles can be inhaled into the nose, mouth, airways, and lungs and cause infection. This is thought to be the main way the virus spreads.
    Droplets can also land on surfaces and objects and be transferred by touch. A person may get COVID-19 by touching the surface or object that has the virus on it and then touching their own mouth, nose, or eyes. Spread from touching surfaces is not thought to be the main way the virus spreads.
    It is possible that COVID-19 may spread through the droplets and airborne particles that are formed when a person who has COVID-19 coughs, sneezes, sings, talks, or breathes. There is growing evidence that droplets and airborne particles can remain suspended in the air and be breathed in by others, and travel distances beyond 6 feet (for example, during choir practice, in restaurants, or in fitness classes). In general, indoor environments without good ventilation increase this risk.`,
    num: 3
  }
];

const Questions = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel0");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Card small className="mb-3">
      {questions.map(question => (
        <Accordion
          expanded={expanded === "panel" + question.num}
          onChange={handleChange("panel" + question.num)}
          id="accordian"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading} style={{width: '100%'}}>
              {question.question}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {question.text}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "white" }}>
            <Typography style={{ backgroundColor: "white" }}>
              {question.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default Questions;
