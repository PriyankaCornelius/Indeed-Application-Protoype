import React, { useEffect, useState } from "react";
import MainHeader from "../mainHeader";
import { Grid, Button, Divider } from "@material-ui/core";
import CompanyAppbar from "./companyAppbar";
import { useLocation } from "react-router-dom";

const CompanyLandingPage = (props) => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [companyDetails, setCompanyDetails] = useState([]);

  const SelectedTab = () => {
    if (selectedTab === "snapshot") return <div>snapshot</div>;
    else if (selectedTab === "whyjoinus") return <div>whyjoinus</div>;
    else if (selectedTab === "reviews") return <div>reviews</div>;
    else if (selectedTab === "salaries") return <div>salaries</div>;
    else if (selectedTab === "photos") return <div>photos</div>;
    else if (selectedTab === "jobs") return <div>jobs</div>;
    else return null;
  };

  const search = useLocation().search;

  useEffect(() => {
    const tab = new URLSearchParams(search).get("tab");
    if (tab) setSelectedTab(tab);
    else setSelectedTab("snapshot");
  }, [new URLSearchParams(search).get("tab")]);

  return (
    <div>
      <MainHeader currentTab="companyReviews"></MainHeader>
      {companyDetails ? (
        <Grid container direction="column">
          <Grid
            item
            style={{
              height: "288px",
            }}
          >
            <img
              style={{
                boxSizing: "border-box",
                margin: 0,
                minWidth: 0,
                position: "relative",
                width: "100%",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
              src="https://d2q79iu7y748jz.cloudfront.net/s/_headerimage/1960x400/7ddf0e5102834468e93f7022dac2610e"
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            style={{
              height: "103px",
              backgroundColor: "#151514",
              color: "white",
            }}
          >
            <Grid item xs={2} />
            <Grid item container direction="row" xs={6}>
              <Grid item xs={1}>
                <div
                  style={{
                    height: "3rem",
                    width: "3rem",
                    minWidth: "3rem",
                    border: "1px solid #ececec",
                    borderRadius: "8px",
                    marginRight: "1rem",
                    padding: "0.5rem",
                    marginTop: "22px",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src={
                      companyDetails && companyDetails.companyLogo
                        ? companyDetails.companyLogo
                        : "https://forcebrands.com/assets/fallback/company-default-4549373b79625823b56e48c7918608f77be903ad2fd38cfc9b6929d095994013.png"
                    }
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
              </Grid>
              <Grid
                item
                container
                direction="column"
                xs={10}
                style={{ textAlign: "left", marginLeft: "15px" }}
              >
                <Grid
                  item
                  style={{
                    fontWeight: "bold",
                    marginTop: "25px",
                    fontSize: "18px",
                    marginBottom: "15px",
                  }}
                >
                  Best Buy
                </Grid>
                <Grid item container direction="row">
                  <Grid item xs={1}>
                    69 |
                  </Grid>
                  <Grid item xs={4}>
                    3.8
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                size="medium"
                style={{
                  backgroundColor: "white",
                  marginTop: "35px",
                  width: "203px",
                  height: "44px",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                <b>Write a review</b>
              </Button>
            </Grid>
            <Grid item xs={2} />
          </Grid>
          <Grid item container direction="row" style={{ height: "70px" }}>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <CompanyAppbar companyId={companyDetails.id} />
            </Grid>
            <Grid item xs={2} />
          </Grid>
          <Grid item style={{ height: "100%" }}>
            <Divider />
            <SelectedTab />
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
};

export default CompanyLandingPage;
