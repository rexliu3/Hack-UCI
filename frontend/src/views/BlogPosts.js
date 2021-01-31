/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import LinkIcon from '@material-ui/icons/Link';

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/articles/article1.png"),
          category: "Facts",
          categoryTheme: "dark",
          authorAvatar: require("../images/articles/article12.png"),
          title: "COVID-19 vaccines: Get the facts",
          body:
            "Looking to get the facts about the new COVID-19 vaccines? Here's what you need to know about the different vaccines and the benefits of getting vaccinated.",
          date: "30 January 2021",
          link: "https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/coronavirus-vaccine/art-20484859"
        },
        {
          backgroundImage: require("../images/articles/article2.jpg"),
          category: "Benefits",
          categoryTheme: "info",
          authorAvatar: require("../images/articles/article22.png"),
          title: "Benefits of Getting a COVID-19 Vaccine",
          body:
            "Summary of the benefits of COVID-19 vaccination based on what we currently know. CDC will continue to update this page as more data become available.",
          date: "5 January 2021",
          link: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-benefits.html"
        },
        {
          backgroundImage: require("../images/articles/article3.png"),
          category: "Side Effects",
          categoryTheme: "royal-blue",
          authorAvatar: require("../images/articles/article32.jpg"),
          title: "Should I Get the Vaccine if I’ve Already Had COVID-19 — and Would My Side Effects Be Worse?",
          body:
            "The short answer from a pulmonary and critical care specialist.",
          date: "28 January 2021",
          link: "https://health.clevelandclinic.org/should-i-get-the-vaccine-if-ive-already-had-covid-19-and-would-my-side-effects-be-worse/"
        },
        {
          backgroundImage: require("../images/articles/article4.png"),
          category: "Other",
          categoryTheme: "warning",
          authorAvatar: require("../images/articles/article42.png"),
          title: "VERIFY: Should you wait to get the COVID-19 vaccine if you're currently sick?",
          body:
            "Should someone who is currently sick wait to recover before getting the COVID-19 vaccine? Our Verify team gets to the bottom of it.",
          date: "28 January 2021",
          link: "https://www.wusa9.com/article/news/verify/can-i-get-the-covid-vaccine-i-am-sick-or-had-covid-vaccine-explainers-101-fact-check/65-6ae7a5d1-f2e8-4d8d-b359-511e3980df6d"
        },
      ],

      // Second list of posts.
      PostsListTwo: [
        {
          backgroundImage: require("../images/articles/article5.png"),
          category: "Other",
          categoryTheme: "warning",
          authorAvatar: require("../images/articles/article52.png"),
          title: "Improving the pace of vaccine distribution through technology",
          body:
            "The Microsoft Vaccination Management platform includes a growing collection of vaccination specific solutions from Microsoft and our partner ecosystem. They are designed to...",
          date: "27 January 2021",
          link: "https://cloudblogs.microsoft.com/industry-blog/health/2021/01/27/improving-the-pace-of-vaccine-distribution-through-technology/"
        },
        {
          backgroundImage: require("../images/articles/article6.png"),
          category: "Other",
          categoryTheme: "warning",
          authorAvatar: require("../images/articles/article62.png"),
          title: "How Google's helping get vaccines to more people",
          body:
            "During the pandemic, Google has helped people get the information they need to keep their families safe and healthy. We’ve supported small businesses and partnered with Apple to...",
          date: "25 January 2021",
          link: "https://blog.google/technology/health/vaccines-how-were-helping/"
        },
      ],

      // Third list of posts.
      PostsListThree: [
        {
          authorAvatar: require("../images/articles/article72.png"),
          title: "Unemployment in Today’s Recession Compared to the Global Financial Crisis",
          body:
            "In particular, we find that while teleworkable jobs are indeed more secure than non-teleworkable occupations during the current pandemic-related recession, this pattern has also been observed during the global financial crisis of 2007–09—meaning that something more than pandemic-related restrictions is at play.",
          date: "23 July 2020",
          link: "https://blogs.imf.org/2020/07/23/unemployment-in-todays-recession-compared-to-the-global-financial-crisis/"
        },
        {
          authorAvatar: require("../images/articles/article72.png"),
          title: "The COVID-19 Gender Gap",
          body:
            "Well-designed policies to foster recovery can mitigate the negative effects of the crisis on women and prevent further setbacks for gender equality. What is good for women is ultimately good for addressing income inequality, economic growth, and resilience.",
          date: "21 July 2020",
          link: "https://blogs.imf.org/2020/07/21/the-covid-19-gender-gap/"
        },
        {
          authorAvatar: require("../images/articles/article72.png"),
          title: "How Pandemics Leave the Poor Even Farther Behind",
          body:
            "Behind this dire statistic is an even grimmer possibility: if past pandemics are any guide, the toll on poorer and vulnerable segments of society will be several times worse. Indeed, a recent poll of top economists found that the vast majority felt the COVID-19 pandemic will worsen inequality, in part through its disproportionate impact on low-skilled workers.",
          date: "11 May 2020",
          link: "https://blogs.imf.org/2020/05/11/how-pandemics-leave-the-poor-even-farther-behind/"
        },
      ],
    };
  }

  render() {
    const {
      PostsListOne,
      PostsListTwo,
      PostsListThree,
      PostsListFour
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Learn About Covid-19 " subtitle="Education" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
              <a
                      href={post.link} target="_blank">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  
                  <div className="card-post__author d-flex">
                    <a
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                    </a>
                  </div>
                </div>
                </a>
                <CardBody>
                  <h5 className="card-title">
                    <a href={post.link} target="_blank" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Second Row of Posts */}
        <Row>
          {PostsListTwo.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <a
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                  href={post.link}
                  target="_blank"
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                    </a>
                  </div>
                </a>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href={post.link} target="_blank">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Third Row of Posts */}
        <Row>
          {PostsListThree.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <a href={post.link}><h5 className="card-title">{post.title}</h5></a>
                  <p className="card-text text-muted">{post.body}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {post.author}
                      </span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <a href={post.link} target='_blank'>
                      <Button size="sm" theme="white">
                        <LinkIcon fontSize='small' style={{transform:'rotate(-45deg)'}}/> Read More
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;
