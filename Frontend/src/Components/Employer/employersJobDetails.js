import React, { useEffect, useState } from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import {
  Autocomplete,
  TextField,
  Button,
  Stack,
  Card,
  CardActions,
  CardContent,
  Box,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';

const EmployersJobDetails = (props) => {
  const [jobTitle, setJobTitle] = useState('Job Title');
  const [jobType, setJobType] = React.useState('');
  const [jobLocation, setjobLocation] = React.useState(" Remote ");
  const [jobDescription, setJobDescription] = React.useState(" Remote ");
  const [whatYouWillDo, setWhatYouWillDo] = React.useState(" Remote ");
  const [whatYouWillNeed, setWhatYouWillNeed] = React.useState(" Remote ");
  const [whatYouWillLoveWorkingFor, setWhatYouWillLoveWorkingFor] = React.useState(" Remote ");

  
  const handleRadioChange = (event) => {
    setJobType(event.target.value);
  }  

  const handleDescriptionChange = e => {
    e.preventDefault();
    setJobDescription(e.target.value);
  }

  const handleWhatYouWillDoChange = e => {
    e.preventDefault();
    setWhatYouWillDo(e.target.value);
  }

  const handleWhatYouWillNeedChange = e => {
    e.preventDefault();
    setWhatYouWillNeed(e.target.value);
  }

  const handleWhatYouWillLoveWorkingForChange = e => {
    e.preventDefault();
    setWhatYouWillLoveWorkingFor(e.target.value);
  }

  
  return <div>
    <Grid container
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
        <Grid item >
          <Card
            variant="outlined"
            style={{
              display: "block",
              width: "50vw",
              margin: 15,
              marginLeft: 70,
              textAlign: "left",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
              >
              <strong>Is this a full-time or part-time job?* </strong> 
              </Typography>
              <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={jobType}
              onClick={handleRadioChange}
            >
              <Box sx={{ border: 1, borderRadius: 2, minWidth: 500, padding: "5px", marginBottom:'10px'}}>
                <FormControlLabel value="Full-time" control={<Radio />} label="Full-time" />
              </Box>
              <Box sx={{ border: 1, borderRadius: 2, minWidth: 500, padding: "5px", marginBottom:'10px'}}>
              <FormControlLabel value="Part-time" control={<Radio />} label="Part-time" defaultChecked/>
              </Box>
              <Box sx={{ border: 1, borderRadius: 2, minWidth: 500, padding: "5px", marginBottom:'10px'}}>
              <FormControlLabel value="Either full-time or part-time" control={<Radio />} label="Either full-time or part-time" defaultChecked/>
              </Box>
            </RadioGroup>
            </CardContent>
            
          </Card>
          <Card
            variant="outlined"
            style={{
              display: "block",
              width: "50vw",
              margin: 15,
              marginLeft: 70,
              // height: "17vw",
              textAlign: "left",
            }}
          >
            <CardContent>
            <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
              >
              <strong>Job Description: </strong><br></br>
              Describe the responsibilities of this job, required work experience, skills, or education.
              </Typography>
            <TextField
              style={{ paddingRight: "20px", width: "45vw", height: "20vw" }}
              onChange={handleDescriptionChange}
            ></TextField>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            style={{
              display: "block",
              width: "50vw",
              margin: 15,
              marginLeft: 70,
              textAlign: "left",
            }}
          >
            <CardContent>
            <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
              >
               <strong>What you will do</strong>
            </Typography>
            <TextField
              style={{ paddingRight: "20px", width: "45vw", height: "20vw" }}
              onChange={handleWhatYouWillDoChange}
            ></TextField>
            </CardContent>
          </Card>
          
          <Card
            variant="outlined"
            style={{
              display: "block",
              width: "50vw",
              margin: 15,
              marginLeft: 70,
              textAlign: "left",
            }}
          >
          <CardContent>
          <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
              >
               <strong>What you will need</strong>
            </Typography>
            <TextField
              style={{ paddingRight: "20px", width: "45vw", height: "20vw" }}
              onChange={handleWhatYouWillNeedChange}
            ></TextField>
            </CardContent>
          </Card>

          <Card
            variant="outlined"
            style={{
              display: "block",
              width: "50vw",
              margin: 15,
              marginLeft: 70,
              textAlign: "left",
            }}
          >
          <CardContent>
          <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
              >
               <strong>What you will love working for</strong>
            </Typography>
            <TextField
              style={{ paddingRight: "20px", width: "45vw", height: "20vw" }}
              onChange={handleWhatYouWillLoveWorkingForChange}
            ></TextField>
            </CardContent>
          </Card>

          <Card
            variant="outlined"
            style={{
              display: "block",
              width: "50vw",
              margin: 15,
              marginLeft: 70,
              textAlign: "left",
            }}
          >
            <CardContent>
            <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
            >
              <Button
                    variant="outlined"
                    size="large"
                    style={{ margin: 10 }}
                  >
                    Back
              </Button>
               <Button
                  variant="contained"
                  size="large"
                  style={{ float: "right", margin: 10}}
                >
                  <a href={'#'} style={{ color: "white" }}>
                    {" "}
                    Save and Continue
                  </a>
                </Button>
            </Typography>
            </CardContent>
          </Card>
      </Grid>

      
        <Grid item>
          <Card
            variant="outlined"
            style={{
              display: "block",
              width: "25vw",
              margin: 15,
              // height: "17vw",
              textAlign: "left",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
              >
              <strong>About this job </strong> <br></br>
              We use this information to find the best candidates for this job.
              </Typography>
              
              <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
              >
              <BusinessCenterIcon/>
              {jobTitle}
              </Typography>
              <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
              >
                <div>
                <LocationOnIcon />
                {jobLocation}
                </div>
            </Typography>
          </CardContent>
        </Card>
        </Grid>
      </Grid>
  </div>
};

export default EmployersJobDetails;