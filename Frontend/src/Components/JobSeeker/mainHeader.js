import React from "react";
import { Tabs, Tab, Divider, Grid } from "@material-ui/core";
import SignIn from "./signIn";
import EmployersJobPost from "../Employer/employersJobPost";
import indeedLogo from "../../Images/IndeedIcon.png";
import { Link } from "react-router-dom";
import UploadResume from "./uploadResume";

const MainHeader = (props) => {
  const LEFT_PROFILE_TABS = [
    {
      icon: <img alt={"logo"} width="115" height="40" src={indeedLogo} />,
      to: "/",
      value: "",
    },
    {
      label: "Find Jobs",
      to: "/",
      value: "findJobs",
    },

    {
      label: "Company Reviews",
      to: "/companyReviews",
      value: "companyReviews",
    },
    {
      label: "Find Salaries",
      to: "/findSalaries",
      value: "findSalaries",
    },
  ];

  const RIGHT_PROFILE_TABS = [
    {
      label: "Upload your resume",
      href: "/uploadResume",
      component: <UploadResume />,
      value: "uploadResume",
      style: {
        textTransform: "none",
        padding: 0,
        margin: 10,
        minWidth: "20px",
        color: "black",
      },
    },
    {
      label: "Sign in",
      href: "/signIn",
      component: <SignIn />,
      value: "signIn",
      style: {
        textTransform: "none",
        padding: 0,
        margin: 10,
        minWidth: "20px",
        color: "#121858",
        fontWeight: 600,
      },
    },
    {
      label: "Employers / Post Job",
      href: "/employersPostJobs",
      component: <EmployersJobPost />,
      value: "employersPostJobs",
      style: {
        textTransform: "none",
        padding: 0,
        margin: 10,
        minWidth: "20px",
        color: "black",
      },
    },
  ];

  return (
    <div>
      <Grid container>
        <Grid item md={5}>
          <Tabs
            value={props.currentTab}
            scrollButtons="false"
            indicatorColor="primary"
          >
            {LEFT_PROFILE_TABS.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                component={Link}
                to={tab.to}
                label={tab.label}
                color={tab.color}
                style={{
                  textTransform: "none",
                  padding: 0,
                  margin: 10,
                  minWidth: "20px",
                }}
                icon={tab.icon}
                indicatorColor="primary"
                textColor="primary"
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item md={3}>
          <Tabs>
            <Tab
              style={{
                textTransform: "none",
                padding: 0,
                margin: 10,
                minWidth: "20px",
              }}
            ></Tab>
          </Tabs>
        </Grid>
        <Grid item md={4}>
          <Tabs value={props.currentTab} scrollButtons="false">
            {RIGHT_PROFILE_TABS.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                href={tab.href}
                label={tab.label}
                style={tab.style}
              />
            ))}
          </Tabs>
        </Grid>
      </Grid>
      <Divider></Divider>
    </div>
  );
};

export default MainHeader;
