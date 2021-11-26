import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  noOfReviews,
  topReviewedCompanies,
  avgRatingsChart,
  jobSeekersReviews,
  topCEO,
  topCompanies
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={noOfReviews.data}
                type="Line"
                options={noOfReviews.options}
                listener={noOfReviews.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Number of Reviews Per Day</h4>
              <p className={classes.cardCategory}>
                {/* <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "} */}
                Last 7 days.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated right now
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={topReviewedCompanies.data}
                type="Bar"
                options={topReviewedCompanies.options}
                responsiveOptions={topReviewedCompanies.responsiveOptions}
                listener={topReviewedCompanies.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Most Reviewed Companies</h4>
              <p className={classes.cardCategory}>Top 5 Companies Based on Most Reviews.</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Based on all reviews
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={avgRatingsChart.data}
                type="Pie"
                options={avgRatingsChart.options}
                listener={avgRatingsChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Average Ratings</h4>
              <p className={classes.cardCategory}>Top 5 Companies based on Avg Ratings.</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> refreshed now
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={12} md={5}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={jobSeekersReviews.data}
                type="Pie"
                options={jobSeekersReviews.options}
                listener={jobSeekersReviews.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Top Job Seeker Reviewers</h4>
              <p className={classes.cardCategory}>Top 5 Job Seekers based on Accepted Reviews.</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> refreshed now
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={7}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={topCompanies.data}
                type="Bar"
                options={topCompanies.options}
                listener={topCompanies.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Top CEOs</h4>
              <p className={classes.cardCategory}>Top 10 CEOs based on ratings. </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> refreshed just now
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={12} md={7}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={topCompanies.data}
                type="Line"
                options={topCompanies.options}
                listener={topCompanies.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Top Company Views</h4>
              <p className={classes.cardCategory}>
                {/* <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "} */}
                Top Companies based on Views per day.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated right now
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
