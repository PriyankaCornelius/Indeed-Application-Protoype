import React, { useEffect, useState } from "react";
import MainHeader from "./mainHeader";
import { Grid } from "@material-ui/core";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

const PostReview = (props) => {
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
              variant="h5"
              style={{ textAlign: "left", fontWeight: "bold" }}
            >
              Application Details
            </Typography>
            <form>
              <Grid container style={{ marginTop: "15px" }}>
                <Grid item xs={12} style={{ marginBottom: "15px" }}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    variant="outlined"
                    defaultValue="Anay"
                    disabled
                  />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "15px" }}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    variant="outlined"
                    defaultValue="Naik"
                    disabled
                  />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "15px" }}>
                  <TextField
                    required
                    id="phone"
                    name="phoneNo"
                    label="Phone No."
                    fullWidth
                    autoComplete="family-name"
                    variant="outlined"
                    defaultValue="6693061513"
                    disabled
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

export default connect(mapStateToProps, {})(PostReview);
