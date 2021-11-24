import React from "react";
import MainHeader from "./mainHeader";
import { Grid, Divider, Typography } from "@material-ui/core";
import {
  Autocomplete,
  TextField,
  Button,
  Stack,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";

const FindJobs = (props) => {
  const jobTittles = [
    { title: "Software development" },
    { title: "Data Analyst" },
    { title: "Business Analyst" },
  ];
  return (
    <div>
      <MainHeader currentTab="findJobs"></MainHeader>

      <Grid container>
        <Grid item md={2}></Grid>
        <Grid item md={3} style={{ margin: 10 }}>
          <Autocomplete
            sx={{ mt: 5 }}
            freeSolo
            size="small"
            id="free-solo-2-demo"
            disableClearable
            options={jobTittles.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={`What Job title, keywords, or company`}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Grid>

        <Grid item md={3} style={{ margin: 10 }}>
          <Autocomplete
            sx={{ mt: 5 }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            size="small"
            options={jobTittles.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Where"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Grid>
        <Grid item style={{ margin: 10 }}>
          <Button
            sx={{ mt: 5 }}
            variant="contained"
            style={{
              textTransform: "none",
            }}
          >
            Find jobs
          </Button>
        </Grid>
      </Grid>
      <Grid flex>
        <Stack sx={{ mt: 3, mb: 3 }}>
          <Typography sx={{ textAlign: "center", lineHeight: 10 }}>
            Post your resume – It only takes a few seconds
          </Typography>
          <Typography sx={{ textAlign: "center", lineHeight: 10 }}>
            Employers: Post a job
          </Typography>
        </Stack>
      </Grid>
      <Divider></Divider>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item>
          <Card
            variant="outlined"
            style={{
              display: "block",
              width: "30vw",
              margin: 15,
              height: "17vw",
              textAlign: "left",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Software Development Engineer
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Amazon.com Services LLC
              </Typography>
              <Typography variant="body2">
                Cupertino, CA
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* display of main job card */}

        <Grid item>
          <Card
            variant="outlined"
            style={{
              display: "block",
              width: "45vw",
              margin: 15,
              height: "80vw",
              textAlign: "left",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Software Development Engineer
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Amazon.com Services LLC
              </Typography>
              <Typography variant="body2">
                Cupertino, CA
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default FindJobs;
