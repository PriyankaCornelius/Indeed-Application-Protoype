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
  Checkbox,
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

const EmployersJobCompensation = (props) => {
  const [jobTitle, setJobTitle] = useState('Job Title');
  const [jobType, setJobType] = React.useState('');
  const [jobLocation, setjobLocation] = React.useState(" Remote ");
  
  const [rate, setRate] = React.useState("per hour");
  const [amount, setAmount] = React.useState("");
  const [salaryCriteria, setSalaryCriteria] = React.useState("");
  const [supplementalPay, setSupplementalPay] = React.useState("");
  const [checked, setChecked] = React.useState(true);


  const handleRateChange = (event) => {
    setRate(event.target.value);
  }  

 const handleAmountChange = e => {
    e.preventDefault();
    setAmount(e.target.value);
  }
  
 const handleSalaryCriteriaChange = e => {
    e.preventDefault();
    setSalaryCriteria(e.target.value);
 }
    
 const handleSupplementalPayChange=e=>{
    e.preventDefault();
    setSupplementalPay( e.target.value);
     console.log("sup", supplementalPay);
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
              <strong>What is the pay? </strong> 
              </Typography>
              
              <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
              >
              Show pay by
              </Typography>
              <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
                > 
                <Select labelId="label" id="select" placeholder={salaryCriteria} onChange={handleSalaryCriteriaChange} value={salaryCriteria} sx={{ minWidth: 540, borderRadius: 2 }}>
                    {/* <MenuItem value="Range">Range</MenuItem> */}
                    <MenuItem value="At Least">Starting Amount</MenuItem>
                    <MenuItem value="Qatar">Maximum Amount</MenuItem>
                    <MenuItem value="India">Exact Amount</MenuItem>
                </Select>
                </Typography>
                
                
            <Grid container spacing={12}>
              <Grid item xs={6}>
                <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
                >
                Amount
                </Typography>
                <TextField label="$" type="number" value={amount} onChange={handleAmountChange}></TextField>
                </Grid>
                
                <Grid item xs={6}>
                <Typography
                sx={{ fontSize: 14, }}
                color="text.secondary"
                gutterBottom
                >
                Rate
                </Typography>
                <Select labelId="label" id="select" placeholder={rate} onChange={handleRateChange} value={rate} sx={{ borderRadius: 2 }}>
                    <MenuItem value="per hour" defaultChecked>per hour</MenuItem>
                    <MenuItem value="per day">per day</MenuItem>
                    <MenuItem value="per week">per week</MenuItem>
                    <MenuItem value="per month">per month</MenuItem>
                    <MenuItem value="per year">per year</MenuItem>
                </Select>
                </Grid>
                </Grid>
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
              <strong>Do you offer any of the following supplemental pay? </strong>
            </Typography>
            <Box sx={{ border: 1, borderRadius: 2, minWidth: 500, padding: "5px", marginBottom:'10px'}}>
                <FormControlLabel
                control={<Checkbox checked={checked} value="Signing bonus" onChange={handleSupplementalPayChange} />}
                // value="Signing bonus"
                // label="Signing bonus"
                // onChange={handleSupplementalPayChange}
                // control={
                //     <Checkbox
                //     />
                // }
                />
            </Box>
            <Box sx={{ border: 1, borderRadius: 2, minWidth: 500, padding: "5px", marginBottom:'10px'}}>
                <FormControlLabel
                value="Commission pay"
                label="Commission pay"
                onChange={handleSupplementalPayChange}
                control={
                    <Checkbox
                    />
                }
                />
            </Box>
            <Box sx={{ border: 1, borderRadius: 2, minWidth: 500, padding: "5px", marginBottom:'10px'}}>
                <FormControlLabel
                value="Bonus pay"
                label="Bonus pay"
                onChange={handleSupplementalPayChange}
                control={
                    <Checkbox
                    />
                }
                />
            </Box>
            <Box sx={{ border: 1, borderRadius: 2, minWidth: 500, padding: "5px", marginBottom:'10px'}}>
                <FormControlLabel
                value="Tips"
                label="Tips"
                onChange={handleSupplementalPayChange}
                control={
                    <Checkbox
                    />
                }
                />
            </Box>
            <Box sx={{ border: 1, borderRadius: 2, minWidth: 500, padding: "5px", marginBottom:'10px'}}>
                <FormControlLabel
                value="Other Benefits"
                label="Other Benefits"
                onChange={handleSupplementalPayChange}
                control={
                    <Checkbox
                    />
                }
                />
            </Box>
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

export default EmployersJobCompensation;