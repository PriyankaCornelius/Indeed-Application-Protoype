import React, { useEffect, useState } from "react";
import MainHeader from "./mainHeader";
import { Grid } from "@material-ui/core";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PostSalary = (props) => {
  const [isCurrent, setIsCurrent] = useState(null);
  return (
    <div>
      <MainHeader currentTab="companyReviews" />
      <Grid
        container
        direction="row"
        style={{
          backgroundColor: "#FAF9F8",
          minHeight: "725px",
        }}
      >
        <Grid item xs={3} />
        <Grid
          item
          xs={6}
          style={{
            marginTop: "50px",
            backgroundColor: "#FFF",
            marginBottom: "50px",
            padding: "50px",
          }}
        >
          <React.Fragment>
            <Typography
              variant="h4"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "25px",
              }}
            >
              Submit a Salary
            </Typography>
            <form>
              <Grid container style={{ marginTop: "15px" }}>
                <Grid item xs={12} style={{ marginBottom: "15px" }}>
                  <TextField
                    required
                    name="companyName"
                    label="What’s your company name?"
                    fullWidth
                    autoComplete="given-name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "15px" }}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <Typography
                        style={{
                          textAlign: "left",
                          fontWeight: "bold",
                          fontSize: "18px",
                          marginBottom: "5px",
                        }}
                      >
                        Are you currently working at this company?
                      </Typography>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={isCurrent}
                        onChange={(e) => setIsCurrent(e.target.value)}
                      >
                        <MenuItem value={"Y"}>Yes</MenuItem>
                        <MenuItem value={"N"}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  {isCurrent === "N" ? (
                    <TextField
                      name="endDate"
                      label="End Date"
                      fullWidth
                      autoComplete="family-name"
                      variant="outlined"
                      style={{ marginTop: "15px" }}
                    />
                  ) : null}
                </Grid>
                <Grid item container direction="row" xs={12}>
                  <Grid
                    item
                    xs={6}
                    style={{ marginBottom: "15px", paddingRight: "10px" }}
                  >
                    <TextField
                      required
                      id="jobTitle"
                      name="jobTitle"
                      label="What’s your job title?"
                      fullWidth
                      autoComplete="family-name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6} style={{ marginBottom: "15px" }}>
                    <TextField
                      required
                      id="location"
                      name="location"
                      label="Where’s your job location?"
                      fullWidth
                      autoComplete="family-name"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid item container direction="row" xs={12}>
                  <Grid
                    item
                    xs={6}
                    style={{ marginBottom: "15px", paddingRight: "10px" }}
                  >
                    <TextField
                      required
                      name="salary"
                      label="Salary"
                      fullWidth
                      autoComplete="family-name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6} style={{ marginBottom: "15px" }}>
                    <TextField
                      name="yearsOfExperience"
                      label="How many years of relevant experience do you have?"
                      fullWidth
                      autoComplete="family-name"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "15px" }}>
                  <Typography
                    style={{
                      textAlign: "left",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Which benefits do you receive here? (Tick the ones that
                    apply)
                  </Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Paid time off"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Health insurance"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Life insurance"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Dental/ vision insurance"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Retirement/ 401(k)"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "15px" }}>
                  <TextField
                    name="otherBenefits"
                    label="Other Benefits"
                    fullWidth
                    autoComplete="family-name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "15px" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{ marginTop: "25px" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </React.Fragment>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps, {})(PostSalary);
