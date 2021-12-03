import React, { useState, useEffect } from "react";
import { NODE_HOST, NODE_PORT } from "../../envConfig";
import MainHeader from "./mainHeader";
import {
  Grid,
  Avatar,
  Stack,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import { TextField, Typography, Box } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";

const JobSeekerProfile = (props) => {
  let id = 1;
  const [jobSeekerDetails, setJobSeekerDetails] = useState({});
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 9)) & 0xff;
      color += `00${value.toString(20)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const getJobSeekerDetails = async () => {
    const response = await fetch(
      `http://${NODE_HOST}:${NODE_PORT}/getJobSeekerDetails?id=${1}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: session.token,
        },
      }
    );

    const data = await response.json();
    console.log("jobseeker details", data);
    setJobSeekerDetails({
      firstName: data.firstName ? data.firstName : " ",
      lastName: data.lastName ? data.lastName : " ",
      email: data.email,
      phoneNo: data.phoneNo ? data.phoneNo : " ",
    });
  };

  const updateJobSeekerDetails = async () => {
    const response = await fetch(
      `http://${NODE_HOST}:${NODE_PORT}/updateJobSeekerDetails`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          firstName: jobSeekerDetails.firstName,
          lastName: jobSeekerDetails.lastName,
          email: jobSeekerDetails.email,
          phoneNo: jobSeekerDetails.phoneNo ? jobSeekerDetails.phoneNo : 0,
        }),
      }
    );

    const data = await response.json();
    console.log("Data received", data);
    // setJobSeekerDetails(data);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setJobSeekerDetails((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(jobSeekerDetails);
    updateJobSeekerDetails();
  };

  useEffect(() => {
    getJobSeekerDetails();
  }, []);
  return (
    <div>
      <MainHeader currentTab="profile"></MainHeader>
      <Grid container sx={{ mt: 3, mb: 3 }}>
        <Grid item md={3}></Grid>
        <Grid style={{ margin: 10 }}>
          <Stack
            justifyContent="left"
            spacing={2}
            direction="row"
            style={{ margin: 13 }}
          >
            <Avatar {...stringAvatar("Archita Chakraborty")} />

            <h2>
              {jobSeekerDetails.firstName
                ? jobSeekerDetails.firstName
                : "Add Name"}
              {jobSeekerDetails.middleName ? jobSeekerDetails.middleName : ""}
              {jobSeekerDetails.lastName ? jobSeekerDetails.lastName : ""}
            </h2>
          </Stack>
          <Stack justifyContent="center" spacing={1} direction="row">
            <Card
              variant="outlined"
              style={{
                width: "42vw",
                // margin: 15,
                height: "12vw",
                textAlign: "left",
              }}
            >
              <CardContent>
                <Typography style={{ fontSize: 20, fontWeight: 600 }}>
                  Get started
                </Typography>
                <Stack justifyContent="center" direction="row">
                  <Button
                    variant="outlined"
                    size="medium"
                    style={{ margin: 10 }}
                  >
                    Upload a resume
                  </Button>
                  <Button
                    variant="outlined"
                    size="medium"
                    style={{ margin: 10 }}
                  >
                    Build a resume
                  </Button>
                </Stack>

                <Typography style={{ fontSize: 12 }} color="text.secondary">
                  By continuing, you agree to create a public resume and agree
                  to receiving job opportunities from employers.
                </Typography>
              </CardContent>
            </Card>
          </Stack>

          <Stack justifyContent="center" spacing={2} direction="row">
            <Card
              variant="outlined"
              style={{
                display: "block",
                width: "42vw",
                margin: 15,
                textAlign: "left",
              }}
            >
              <CardContent>
                <Stack direction="row">
                  <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                    Contact Information
                  </Typography>
                  {/* 
                  <Button
                    sx={{ ml: 37 }}
                    onClick={() => setContactInfoShow(true)}
                  >
                    <EditIcon />
                  </Button> */}

                  {/* <JobSeekerEditDetails
                    show={true}
                    onHide={() => setContactInfoShow(false)}
                    jobSeekerDetails={jobSeekerDetails}
                  /> */}
                </Stack>
                <Typography style={{ fontSize: 16, fontWeight: 400 }}>
                  * Required fields
                </Typography>
                <p> </p>
                <form onSubmit={onSubmitHandler}>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 4, width: "25ch" },
                    }}
                  >
                    <TextField
                      name="firstName"
                      variant="outlined"
                      margin="dense"
                      required
                      label="First Name"
                      value={
                        jobSeekerDetails.firstName
                          ? jobSeekerDetails.firstName
                          : ""
                      }
                      onChange={onChangeHandler}
                      // InputProps={{
                      //   disableUnderline: true,
                      //   readOnly: true,
                      // }}
                      // onChange={}
                    ></TextField>
                    <TextField
                      name="lastName"
                      variant="outlined"
                      margin="dense"
                      required
                      label="Last Name"
                      value={
                        jobSeekerDetails.lastName
                          ? jobSeekerDetails.lastName
                          : ""
                      }
                      // value="hello"
                      onChange={onChangeHandler}
                    ></TextField>
                  </Box>
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <TextField
                      name="email"
                      variant="outlined"
                      margin="dense"
                      required
                      type="email"
                      label="Email Id"
                      value={
                        jobSeekerDetails.email ? jobSeekerDetails.email : ""
                      }
                      onChange={onChangeHandler}
                    ></TextField>
                  </Box>
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <TextField
                      name="phoneNo"
                      variant="outlined"
                      margin="dense"
                      label="Phone Number"
                      value={
                        jobSeekerDetails.phoneNo ? jobSeekerDetails.phoneNo : ""
                      }
                      onChange={onChangeHandler}
                    ></TextField>
                  </Box>

                  <Button variant="contained" color="primary" type="submit">
                    Save
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Stack>

          <Stack justifyContent="center" spacing={2} direction="row">
            <Card
              variant="outlined"
              style={{
                display: "block",
                width: "42vw",
                margin: 15,
                height: "9vw",
                textAlign: "left",
              }}
            >
              <CardContent>
                <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                  Job preferences
                  <Button sx={{ ml: 40 }}>
                    <EditIcon />
                  </Button>
                </Typography>
                <p></p>
                <Typography
                  variant="caption"
                  style={{ fontSize: 14, fontWeight: 400 }}
                >
                  Save specific details like desired pay and schedule that help
                  us match you with better jobs
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default JobSeekerProfile;
