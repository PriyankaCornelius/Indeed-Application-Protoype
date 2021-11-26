import React, { useEffect, useState } from "react";
import MainHeader from "./mainHeader";
import { Grid, Divider, Button } from "@material-ui/core";
import MyJobsAppbar from "./myJobsAppbar";
import noData from "../../Images/noData.png";
import noDataApplied from "../../Images/noDataApplied.png";
import crossIcon from "../../Images/baseline_close_black_24dp.png";
import clockIcon from "../../Images/baseline_query_builder_black_24dp.png";
import { useLocation } from "react-router-dom";

const JobSeekerProfile = (props) => {
  const [savedList, setSavedList] = useState(false);
  const [savedListData, setSavedListData] = useState(null);
  const [appliedList, setAppliedList] = useState(false);
  const [appliedListData, setAppliedListData] = useState(null);

  const ReturnJobList = () => {
    if (savedList) {
      if (savedListData)
        return (
          <>
            <Grid item xs={1}>
              <img
                src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/5abe00d629e40745c7f3ffb6aa792c7b"
                style={{ width: "55px", height: "55px" }}
              />
            </Grid>
            <Grid item xs={5}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "left",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                Embedded Software Engineer
              </div>
              <div
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  marginTop: "5px",
                  marginLeft: "10px",
                }}
              >
                Britelab, Inc
              </div>
              <div
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  marginTop: "5px",
                  marginLeft: "10px",
                }}
              >
                San Jose, CA
              </div>
            </Grid>
            <Grid item xs={5}>
              <Button
                style={{
                  height: "44px",
                  width: "228.22px",
                  backgroundColor: "rgb(37, 87, 167)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  lineHeight: 0,
                  letterSpacing: 0,
                  textTransform: "none",
                }}
                variant="contained"
              >
                Apply now
              </Button>
              <Button
                style={{
                  height: "44px",
                  width: "154.55px",
                  color: "rgb(37, 87, 167)",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  lineHeight: 0,
                  letterSpacing: 0,
                  textTransform: "none",
                  marginLeft: "15px",
                }}
                variant="outlined"
              >
                Update status
              </Button>
            </Grid>
            <Grid item xs={1} style={{ marginTop: "10px", cursor: "pointer" }}>
              <img src={crossIcon} />
            </Grid>
          </>
        );
      else
        return (
          <>
            <Grid item container direction="column" style={{}}>
              <Grid item style={{ textAlign: "center" }}>
                <img src={noData} style={{ width: "204px", height: "139px" }} />
              </Grid>
              <Grid
                item
                style={{
                  color: "#2d2d2d",
                  fontSize: "1rem",
                  fontWeight: "700",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                No jobs saved yet
              </Grid>
              <Grid
                item
                style={{
                  marginTop: "15px",
                  color: "#595959",
                  fontSize: ".875rem",
                  textAlign: "center",
                  marginTop: "0.5rem",
                }}
              >
                Jobs you choose to save during a job search will be shown here.
              </Grid>
              <Grid item>
                <Button
                  style={{
                    height: "44px",
                    width: "153.33px",
                    backgroundColor: "rgb(37, 87, 167)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: 0,
                    letterSpacing: 0,
                    textTransform: "none",
                    marginTop: "25px",
                  }}
                  variant="contained"
                >
                  Find jobs
                </Button>
              </Grid>
            </Grid>
          </>
        );
    } else if (appliedList) {
      if (appliedListData)
        return (
          <>
            <Grid item xs={1}>
              <img
                src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/5abe00d629e40745c7f3ffb6aa792c7b"
                style={{ width: "55px", height: "55px" }}
              />
            </Grid>
            <Grid item xs={5}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "left",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                Embedded Software Engineer
              </div>
              <div
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  marginTop: "5px",
                  marginLeft: "10px",
                }}
              >
                Britelab, Inc
              </div>
              <div
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  marginTop: "5px",
                  marginLeft: "10px",
                }}
              >
                San Jose, CA
              </div>
            </Grid>
            <Grid item xs={5} style={{ marginTop: "10px" }}>
              {/* <img src={clockIcon} /> */}
              <span
                style={{
                  height: "44px",
                  width: "228.22px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  lineHeight: 0,
                  letterSpacing: 0,
                  textTransform: "none",
                }}
              >
                Application submitted
              </span>
              <Button
                style={{
                  height: "44px",
                  width: "154.55px",
                  color: "rgb(37, 87, 167)",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  lineHeight: 0,
                  letterSpacing: 0,
                  textTransform: "none",
                  marginLeft: "25px",
                }}
                variant="outlined"
              >
                Update status
              </Button>
            </Grid>
            <Grid item xs={1} style={{ marginTop: "10px", cursor: "pointer" }}>
              <img src={crossIcon} />
            </Grid>
          </>
        );
      else
        return (
          <>
            <Grid item container direction="column" style={{}}>
              <Grid item style={{ textAlign: "center" }}>
                <img
                  src={noDataApplied}
                  style={{ width: "204px", height: "139px" }}
                />
              </Grid>
              <Grid
                item
                style={{
                  color: "#2d2d2d",
                  fontSize: "1rem",
                  fontWeight: "700",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                No applications yet
              </Grid>
              <Grid
                item
                style={{
                  marginTop: "15px",
                  color: "#595959",
                  fontSize: ".875rem",
                  textAlign: "center",
                  marginTop: "0.5rem",
                }}
              >
                Once you apply to jobs, you can track the status of the
                applications here.
              </Grid>
              <Grid item>
                <Button
                  style={{
                    height: "44px",
                    width: "153.33px",
                    backgroundColor: "rgb(37, 87, 167)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: 0,
                    letterSpacing: 0,
                    textTransform: "none",
                    marginTop: "25px",
                  }}
                  variant="contained"
                >
                  Find jobs
                </Button>
              </Grid>
            </Grid>
          </>
        );
    } else return null;
  };

  const search = useLocation().search;

  useEffect(() => {
    const tab = new URLSearchParams(search).get("tab");
    if (tab) {
      if (tab === "saved") {
        setSavedList(true);
        setAppliedList(false);
      }
      if (tab === "applied") {
        setAppliedList(true);
        setSavedList(false);
      }
    } else setSavedList(true);
  }, [new URLSearchParams(search).get("tab")]);

  return (
    <div>
      <MainHeader currentTab="profile"></MainHeader>
      <Grid container direction="row">
        <Grid item xs={2} />
        <Grid item container direction="column" xs={8}>
          <Grid
            item
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              textAlign: "left",
              marginTop: "16px",
            }}
          >
            My jobs
          </Grid>
          <Grid item>
            <MyJobsAppbar />
            <Divider />
          </Grid>
          <Grid item container direction="row" style={{ marginTop: "15px" }}>
            <ReturnJobList />
          </Grid>
          <br />
          <Divider />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
};

export default JobSeekerProfile;
