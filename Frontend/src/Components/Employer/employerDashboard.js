import React from "react";
import { Tabs, Tab, Divider, Grid } from "@material-ui/core";
//import SignIn from "./signIn";
import EmployersHeader from "./EmployersHeader";
import { Link } from "react-router-dom";
//import UploadResume from "./uploadResume";
//import ProfileDropDown from "./ProfileDropDown";

const EmployerDashboard = (props) => {
  let RIGHT_PROFILE_TABS;
  let user = "Signed In";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const LEFT_PROFILE_TABS = [
    {
      label: "Jobs",
      to: "/employerJobs",
      value: "jobs",
    },

    {
      label: "Applicants",
      to: "/employerApplicants",
      value: "applicants",
    },
    {
      label: "Analytics",
      to: "/employerAnalytics",
      value: "analytics",
    },
  ];

  return (
    <div>
      <EmployersHeader currentTab="dashboard"></EmployersHeader>
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
      </Grid>
      <Divider></Divider>
    </div>
  );
};

export default EmployerDashboard;
