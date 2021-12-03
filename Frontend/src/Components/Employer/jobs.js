import React, { useState, useEffect } from "react";
import { NODE_HOST, NODE_PORT } from "../../envConfig";
import EmployerDashboard from "./employerDashboard";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const Jobs = (props) => {
  const [showJobApplicants, setShowJobApplicants] = useState([]);
  const [companyJobPostsData, setCompanyJobPostsData] = useState([]);
  const userId = useSelector((state) => state.login.user.id);
  console.log("userid", userId);


  const getCompanyJobPosts = async () => {
    const response = await fetch(
      `http://${NODE_HOST}:${NODE_PORT}/getCompanyJobPosts?id=${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(response => response.json())
      .then(data => {
        console.log(data.result);
        setCompanyJobPostsData(data.result);
      });
  }
  const redirectHandler = (e) => {
    e.preventDefault();
    setShowJobApplicants(
      <Redirect
        to={{
          pathname: '/employerApplicants',
          state: { jobId: e.target.value }
      }}
      />
    )
  }   
  useEffect(() => {
    getCompanyJobPosts();
  }, []);

  return (
    <div>
      <EmployerDashboard currentTab="jobs"></EmployerDashboard>
      <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center"
      > 
      {companyJobPostsData.length !== 0 ? companyJobPostsData.map((job, index) => {
        return (
          <Grid item >
          <Card
            variant="outlined"
            style={{
              display: "block",
              width: "90vw",
              margin: 15,
              textAlign: "left",
            }}
          >
            <CardContent>
                <Button
                onClick={redirectHandler}
                value={job.id}
                >
                {job.jobTitle}
              </Button>
                {showJobApplicants}
              <div
                  style={{
                    textAlign: "left",
                    marginLeft: "10px",
                  }}>
                    {job.city}, {job.state} {job.zip}
                  </div>
            </CardContent>
          </Card>
        </Grid>
        )
        
      }) 
      : (<Typography style={{ justifyContent: "center", fontSize: 30 }}>
      {" "}
      No jobs posted yet
    </Typography>)}
       </Grid>
    </div>
  );
};

export default Jobs;