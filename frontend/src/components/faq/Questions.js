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
    question: "What is a novel coronavirus?",
    answer: [
      "A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold."
    ],
    num: 1
  },
  {
    question:
      "Why is the disease being called coronavirus disease 2019, COVID-19?",
    answer: [
      `On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, CO stands for corona, VI for virus, and D for disease. Formerly, this disease was referred to as 2019 novel coronavirus or 2019-nCoV.`,
      "There are many types of human coronaviruses including some that commonly cause mild upper-respiratory tract illnesses. COVID-19 is a new disease, caused by a novel (or new) coronavirus that has not previously been seen in humans."
    ],
    num: 2
  },
  {
    question: "How does the virus spread?",
    answer: [
      "The virus that causes COVID-19 most commonly spreads between people who are in close contact with one another (within about 6 feet, or 2 arm lengths).",
      "It spreads through respiratory droplets or small particles, such as those in aerosols, produced when an infected person coughs, sneezes, sings, talks, or breathes.",
      "These particles can be inhaled into the nose, mouth, airways, and lungs and cause infection. This is thought to be the main way the virus spreads.",
      "Droplets can also land on surfaces and objects and be transferred by touch. A person may get COVID-19 by touching the surface or object that has the virus on it and then touching their own mouth, nose, or eyes. Spread from touching surfaces is not thought to be the main way the virus spreads.",
      "It is possible that COVID-19 may spread through the droplets and airborne particles that are formed when a person who has COVID-19 coughs, sneezes, sings, talks, or breathes. There is growing evidence that droplets and airborne particles can remain suspended in the air and be breathed in by others, and travel distances beyond 6 feet (for example, during choir practice, in restaurants, or in fitness classes). In general, indoor environments without good ventilation increase this risk."
    ],
    num: 3
  },
  {
    question: "Am I at risk for COVID-19 from mail, packages, or products?",
    answer: [
      "There is still a lot that is unknown about COVID-19 and how it spreads. Coronaviruses are thought to be spread most often by respiratory droplets. Although the virus can survive for a short period on some surfaces, it is unlikely to be spread from domestic or international mail, products or packaging. However, it may be possible that people can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads."
    ],
    num: 4
  },
  {
    question:
      "What should I do if I get sick or someone in my house gets sick?",
    answer: [
      "Stay home when you are sick, except to get medical care.",
      "Use a separate room and bathroom for sick household members (if possible).",
      "Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food.",
      "If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol. Always wash hands with soap and water if hands are visibly dirty.",
      "Provide your sick household member with clean disposable facemasks to wear at home, if available, to help prevent spreading COVID-19 to others. Everyone else should wear masks at home. Masks offer some protection to the wearer and are also meant to protect those around the wearer, in case they are infected with the virus that causes COVID-19.",
      "Clean the sick room and bathroom, as needed, to avoid unnecessary contact with the sick person.",
      "Look for emergency warning signs* for COVID-19. If someone is showing any of these signs, seek emergency medical care immediately      "
    ],
    num: 5
  },
  {
    question:
      "Who is at increased risk for developing severe illness from COVID-19?",
    answer: [
      `People at increased risk include:

      Older adults
      People of all ages with certain underlying medical conditions
      Pregnant people are also at increased risk for severe illness from COVID-19.
      
      Long-standing systemic health and social inequities have put many people from racial and ethnic minority groups at increased risk of getting sick and dying from COVID-19.`
    ],
    num: 6
  },
  {
    question:
      "Where is this data retrieved from?",
    answer: [`Data on vaccines distributed and administered comes from the Centers for Disease Control and Prevention, which updates data daily.
    The federal data may differ from that reported by states and territories, which may post on different schedules. Providers have 72 hours to report doses administered and it can take additional time for jurisdictions and the C.D.C. to receive this information.`],
    num: 7
  },
  {
    question: "How is my vaccine date calculated?",
    answer: [`The vaccine date takes into account an individual's geographical region, the number of distribution centers around them, an individual's age and occupation, medical history, and the PVI score to just name a few. This helps determine the most at risk individuals who need the vaccine.`],
    num: 8
  },
  {
    question: "How quickly are vaccines distributed?",
    answer: [`Providers are administering about 1.3 million doses per day on average. President Biden has promised to administer 100 million vaccines by his 100th day in office, and recently suggested the nation could soon reach an average of 1.5 million shots a day.
    Federal regulators have given emergency approval to vaccines developed by Pfizer-BioNTech and Moderna. Both vaccines require patients to receive two doses spaced weeks apart.
    The federal government has delivered about 49.2 million doses to states, territories and federal agencies.`,
  ],
  num: 9
  },

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
            <Typography className={classes.heading} style={{ width: "100%" }}>
              {question.question}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {question.text}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "white" }}>
            <Typography style={{ backgroundColor: "white" }}>
              {question.answer.length == 1 && question.answer[0]}

              {question.answer.length > 1 && (
                <ul>
                  {question.answer.map(point => (
                    <li>{point}</li>
                  ))}
                </ul>
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Card>
  );
};

export default Questions;
