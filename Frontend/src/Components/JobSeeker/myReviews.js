import React, { useEffect, useState } from "react";
import MainHeader from "./mainHeader";
import { NODE_HOST, NODE_PORT } from "../../envConfig";
import { Grid, Stack, Card, CardContent, Button } from "@mui/material";
import { Typography } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";

const MyReviews = (props) => {
  const [jobSeekerReviews, setJobSeekerReviews] = useState();

  const getJobSeekerReviews = async () => {
    const response = await fetch(
      `http://${NODE_HOST}:${NODE_PORT}/getJobSeekerReviews?id=${1}`,
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
    setJobSeekerReviews();

    console.log("jobSeekerReviews", jobSeekerReviews);
  };

  useEffect(() => {
    getJobSeekerReviews();
  }, []);

  return (
    <div>
      {" "}
      <MainHeader currentTab="profile"></MainHeader>
      <Grid container sx={{ mt: 3, mb: 3 }} alignItems="left">
        <Grid item md={3}></Grid>
        <Grid item md={6}>
          <Stack>
            <Typography
              align="left"
              md={5}
              style={{ fontSize: 35, fontWeight: 650 }}
            >
              My reviews and contributions
            </Typography>
            <Typography
              align="left"
              md={5}
              style={{ fontSize: 18, fontWeight: 450 }}
            >
              Company reviews
            </Typography>
            <p />

            <Typography align="left" style={{ fontSize: 12, fontWeight: 300 }}>
              Reviews appear on the employer's Company Page. They are never
              associated with your name, resume or job applications.
            </Typography>
            <p />
            <Typography
              align="left"
              md={5}
              style={{ fontSize: 18, fontWeight: 450 }}
            >
              Company name
            </Typography>
            <Card
              variant="outlined"
              style={{
                display: "block",
                width: "52vw",
                margin: 15,
                height: "13vw",
                textAlign: "left",
              }}
            >
              <CardContent>
                <Stack direction="row">
                  <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                    Review Details
                  </Typography>
                  {/* Adding white spaces */}
                  <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp;
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    Review Date
                  </Typography>
                </Stack>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  style={{ margin: 3 }}
                >
                  Review Title
                </Typography>
                <Typography variant="body2" style={{ margin: 3 }}>
                  Amazing experience, The company pushes you to do better.
                  Everything about this company is amazing and I won’t say
                  anything less. Great people. Amazing leadership and superb
                  balance
                  <br />
                </Typography>
                <Typography
                  variant="caption"
                  style={{ fontSize: 16, fontWeight: 400 }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      textTransform: "none",
                      margin: 10,
                    }}
                  >
                    View on Company Page
                  </Button>
                  <Button>
                    <DeleteIcon />
                    <font
                      size="2"
                      style={{
                        textTransform: "none",
                      }}
                    >
                      Delete{" "}
                    </font>
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyReviews;
