import React, { useEffect, useState } from "react";
import MainHeader from "./mainHeader";
import { Grid } from "@material-ui/core";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const PostReview = (props) => {
  const [rating, setRating] = useState(null);
  const [ceoRating, setCeoRating] = useState(null);

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
              Submit a Review
            </Typography>
            <form>
              <Grid container style={{ marginTop: "15px" }}>
                <Grid item xs={12} style={{ marginBottom: "15px" }}>
                  <TextField
                    required
                    id="reviewTitle"
                    name="reviewTitle"
                    label="Review Summary"
                    fullWidth
                    autoComplete="given-name"
                    variant="outlined"
                  />
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
                      label="Your Role"
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
                      label="Your Location"
                      fullWidth
                      autoComplete="family-name"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: "15px" }}>
                  <TextField
                    required
                    id="review"
                    name="review"
                    label="Review"
                    multiline
                    rows={4}
                    fullWidth
                    autoComplete="family-name"
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  style={{ marginBottom: "15px", textAlign: "left" }}
                >
                  <Grid item xs={3}>
                    <Typography component="legend">
                      <b>Overall Rating</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  style={{ marginBottom: "15px", textAlign: "left" }}
                >
                  <Grid item item xs={3}>
                    <Typography component="legend">
                      <b>CEO Rating</b>
                    </Typography>
                  </Grid>
                  <Grid item item xs={9}>
                    <Rating
                      name="simple-controlled"
                      value={ceoRating}
                      onChange={(event, newValue) => {
                        setCeoRating(newValue);
                      }}
                    />
                  </Grid>
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
