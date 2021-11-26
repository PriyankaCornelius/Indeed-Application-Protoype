import React from "react";
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
import { ListItem, Typography } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";

const JobSeekerProfile = (props) => {
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
            <h2>Archita Chakraborty</h2>
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
                {/* <Typography variant="h5" component="div"></Typography> */}
                <Typography style={{ fontSize: 12 }} color="text.secondary">
                  By continuing, you agree to create a public resume and agree
                  to receiving job opportunities from employers.
                </Typography>

                <br />
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Stack>

          <Stack justifyContent="center" spacing={2} direction="row">
            <Card
              variant="outlined"
              style={{
                display: "block",
                width: "42vw",
                margin: 15,
                height: "12vw",
                textAlign: "left",
              }}
            >
              <CardContent>
                <Stack direction="row">
                  <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                    Contact Information
                  </Typography>

                  <EditIcon sx={{ ml: 38 }} />
                </Stack>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  style={{ margin: 3 }}
                >
                  Archita Chakraborty
                </Typography>
                <Typography variant="body2" style={{ margin: 3 }}>
                  archita22ind@gmail.com
                  <br />
                </Typography>
                <Typography
                  variant="caption"
                  style={{ fontSize: 16, fontWeight: 400 }}
                >
                  Add phone number
                  <br />
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
                height: "9vw",
                textAlign: "left",
              }}
            >
              <CardContent>
                <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                  Job preferences
                  <EditIcon sx={{ ml: 40 }} />
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
