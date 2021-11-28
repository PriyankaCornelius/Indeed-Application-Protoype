import React, { useState, useEffect } from "react";
import MainHeader from "./mainHeader";
import { NODE_HOST, NODE_PORT } from "../../envConfig";
import { Grid, Divider, Typography } from "@material-ui/core";
import StarIcon from "@mui/icons-material/Star";
import { Route, Link } from "react-router-dom";
import CompanyRating from "./companyRating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Autocomplete,
  TextField,
  Button,
  Stack,
  Card,
  CardActions,
  CardContent,
  IconButton,
  CardActionArea,
} from "@mui/material";

const FindJobs = (props) => {
  const [showJobs, setShowJobs] = useState(false);
  const [jobCards, setJobCards] = useState([]);
  const [jobDetails, setJobDetails] = useState({});
  const [jobFilterWhat, setJobFilterWhat] = useState("");
  const [jobFilterWhere, setJobFilterWhere] = useState("");
  const [jobWhatTypeaheadList, setWhatTypeaheadList] = useState([]);
  const [jobWhereTypeaheadList, setWhereTypeaheadList] = useState([]);
  const [jobWhatTypeaheadValue, setJobWhatTypeaheadValue] = useState("");
  const [jobWhereTypeaheadValue, setJobWhereTypeaheadValue] = useState("");
  const [cardColor, setCardColor] = useState({ 0: "blue" });
  const val = " days ago";
  var today = new Date();
  const oneDay = 24 * 60 * 60 * 1000;

  const renderBulletList = (text) => {
    let textList = text?.split("· ");
    console.log("Hello", textList);
    return textList?.map((detail) => {
      if (detail.length > 0) {
        return <li>{detail}</li>;
      } else return null;
    });
  };

  const onClickHandler = () => {
    setShowJobs(true);
    getJobsList();
  };

  const getJobsList = async () => {
    const response = await fetch(
      `http://${NODE_HOST}:${NODE_PORT}/getJobsList`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          what: jobWhatTypeaheadValue,
          where: jobFilterWhere,
        }),
      }
    );

    const data = await response.json();

    setCardColor({ 0: "blue" });
    if (data && data.length > 0) {
      setJobCards(data);
      setJobDetails(data[0]);
    }
  };

  const saveJob = async (jobId) => {
    const response = await fetch(`http://${NODE_HOST}:${NODE_PORT}/saveJob`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobId: jobId,
        applicantId: 1, //jobseeker Id from redux
      }),
    });

    const data = await response.json();
  };

  const getWhatTypeAheadList = async () => {
    const response = await fetch(
      `http://${NODE_HOST}:${NODE_PORT}/getWhatTypeAheadList?what=${jobFilterWhat}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("list of typeahead what received", data);
    setWhatTypeaheadList(data);
  };

  const getWhereTypeAheadList = async () => {
    const response = await fetch(
      `http://${NODE_HOST}:${NODE_PORT}/getWhereTypeAheadList?where=${jobFilterWhere}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("list of typeahead where received", data);
    setWhereTypeaheadList(data);
  };

  useEffect(() => {
    getWhatTypeAheadList();
  }, [jobFilterWhat]);

  useEffect(() => {
    getWhereTypeAheadList();
  }, [jobFilterWhere]);

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
            options={jobWhatTypeaheadList}
            value={jobWhatTypeaheadValue}
            onChange={(event, newValue) => {
              setJobWhatTypeaheadValue(newValue);
            }}
            inputValue={jobFilterWhat}
            onInputChange={(event, newInputValue) => {
              setJobFilterWhat(newInputValue);
            }}
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
            options={jobWhereTypeaheadList}
            value={jobWhereTypeaheadValue}
            onChange={(event, newValue) => {
              setJobWhereTypeaheadValue(newValue);
            }}
            inputValue={jobFilterWhere}
            onInputChange={(event, newInputValue) => {
              setJobFilterWhere(newInputValue);
            }}
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
            onClick={onClickHandler}
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

      {showJobs ? (
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item>
            {jobCards?.map((jobs, index) => {
              let secondDate = new Date(jobs.createdAt);
              let numDays = Math.round(Math.abs((today - secondDate) / oneDay));
              return (
                <Card
                  variant="outlined"
                  style={{
                    borderColor: cardColor[index],
                    display: "block",
                    width: "30vw",
                    margin: 15,
                    height: "17vw",
                    textAlign: "left",
                  }}
                  onClick={() => {
                    setCardColor({ [index]: "blue" });
                    setJobDetails(jobs);
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                        {jobs.jobTitle}
                      </Typography>
                      <Stack direction="row">
                        <Typography style={{ marginRight: 10, fontSize: 14 }}>
                          {jobs.companyName}
                        </Typography>
                        <Typography style={{ marginRight: 10, fontSize: 14 }}>
                          {jobs.averageRating ? jobs.averageRating : 0}
                          <StarIcon
                            style={{ fontSize: "small", color: "grey" }}
                          />
                        </Typography>
                      </Stack>
                      <Typography style={{ marginRight: 10, fontSize: 14 }}>
                        {jobs.address}

                        <br />
                      </Typography>
                      <p></p>
                      <Typography style={{ fontSize: 13 }} sx={{ mb: 2 }}>
                        {jobs.fulldescription.substring(0, 200) + "..."}
                      </Typography>
                      <p></p>
                      <Typography style={{ fontSize: 13 }} sx={{ mb: 2 }}>
                        {numDays + val}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions></CardActions>
                </Card>
              );
            })}{" "}
          </Grid>

          {/* display of main job card */}

          <Grid item>
            <Card
              variant="outlined"
              style={{
                overflow: "auto",
                display: "block",
                width: "45vw",
                margin: 15,
                height: "80vw",
                textAlign: "left",
              }}
            >
              <CardContent>
                <Typography style={{ fontSize: 16, fontWeight: 600 }}>
                  {jobDetails.jobTitle}
                </Typography>

                <Stack direction="row">
                  <Link to="/company" style={{ marginRight: 10 }}>
                    {jobDetails.companyName}
                  </Link>
                  <CompanyRating rating={jobDetails.averageRating} />
                  <Link to="/company" style={{ marginRight: 10 }}>
                    {jobDetails.totalReviews + " reviews"}
                  </Link>
                </Stack>
                <Typography
                  style={{ marginRight: 10, marginTop: 5, fontSize: 14 }}
                >
                  {jobDetails.address}

                  <br />
                </Typography>
                <Typography style={{ marginRight: 10, fontSize: 14 }}>
                  {jobDetails.type}
                </Typography>
                <Typography
                  style={{ marginRight: 10, marginBottom: 10, fontSize: 12 }}
                >
                  Employer actively reviewed job 3 days ago
                </Typography>

                <Button
                  variant="contained"
                  style={{
                    textTransform: "none",
                    marginBottom: 10,
                    marginRight: 10,
                  }}
                >
                  <a href={jobDetails.jobWebsite} style={{ color: "white" }}>
                    {" "}
                    Apply on company site
                  </a>
                </Button>

                <Button onClick={() => saveJob(jobDetails.id)}>
                  <FavoriteBorderIcon style={{ color: "grey" }} />
                </Button>
                <Divider></Divider>

                <Stack>
                  <Typography
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      marginTop: 10,
                      marginBottom: 5,
                    }}
                  >
                    Job details
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      marginBottom: 5,
                    }}
                  >
                    Salary
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 13,
                      marginBottom: 5,
                    }}
                  >
                    {jobDetails.salaryDetails}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      marginBottom: 5,
                    }}
                  >
                    Job Type
                  </Typography>

                  <Typography
                    style={{
                      fontSize: 13,
                      marginBottom: 10,
                    }}
                  >
                    {jobDetails.type}
                  </Typography>
                </Stack>

                <Divider></Divider>

                <Stack>
                  <Typography
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      marginTop: 10,
                      marginBottom: 5,
                    }}
                  >
                    Full Job Description
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 13,
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  >
                    {jobDetails.fulldescription}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 13,
                      marginBottom: 10,
                    }}
                  >
                    <b size="3">Location :</b>{" "}
                    {jobDetails.streetAddress +
                      ", " +
                      jobDetails.city +
                      ", " +
                      jobDetails.state +
                      ", " +
                      jobDetails.zip}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 13,
                      marginBottom: 10,
                    }}
                  >
                    <b size="3">Compenstaion :</b> {jobDetails.compensation}
                  </Typography>

                  <Typography
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      marginTop: 10,
                      marginBottom: 5,
                    }}
                  >
                    What You’ll Do{" "}
                  </Typography>

                  <Typography
                    style={{
                      fontSize: 13,
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  >
                    {renderBulletList(jobDetails.whatYouWillDo)}
                  </Typography>

                  <Typography
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      marginTop: 10,
                      marginBottom: 5,
                    }}
                  >
                    What You’ll Need{" "}
                  </Typography>

                  <Typography
                    style={{
                      fontSize: 13,
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  >
                    {renderBulletList(jobDetails.whatYouWillNeed)}
                  </Typography>

                  <Typography
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      marginTop: 10,
                      marginBottom: 5,
                    }}
                  >
                    {"Why You'll Love Working for a " + jobDetails.jobTitle}
                  </Typography>

                  <Typography
                    style={{
                      fontSize: 13,
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  >
                    {renderBulletList(jobDetails.whatYouWillLoveWorkingFor)}
                  </Typography>

                  <Typography
                    style={{
                      fontSize: 13,
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  >
                    {jobDetails.website}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
};

export default FindJobs;
