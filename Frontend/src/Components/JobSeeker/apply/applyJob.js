import React, { useState } from "react";
import MainHeader from "../mainHeader";
import { Grid, Divider } from "@material-ui/core";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ApplyJob = (props) => {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const Input = styled("input")({
    display: "none",
  });

  const [expanded, setExpanded] = useState(false);
  const [resumeURI, setResumeURI] = useState(null);
  const [coverLetterURI, setCoverLetterURI] = useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <MainHeader />
      <Grid container direction="row">
        <Grid
          item
          xs={7}
          style={{
            paddingLeft: "200px",
            paddingRight: "200px",
            marginTop: "50px",
          }}
        >
          <React.Fragment>
            <Typography
              variant="h5"
              style={{ textAlign: "left", fontWeight: "bold" }}
            >
              Application Details
            </Typography>
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
              <Grid
                item
                container
                direction="column"
                xs={12}
                style={{ marginBottom: "15px", textAlign: "left" }}
              >
                <Grid item>
                  <Typography
                    style={{ fontWeight: "bold", marginRight: "25px" }}
                  >
                    Upload your resume *
                  </Typography>
                </Grid>
                <Grid item>
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="outlined" component="span">
                    Upload
                  </Button>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                xs={12}
                style={{ marginBottom: "15px", textAlign: "left" }}
              >
                <Grid item>
                  <Typography
                    style={{ fontWeight: "bold", marginRight: "25px" }}
                  >
                    Upload your cover letter
                  </Typography>
                </Grid>
                <Grid item>
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="outlined" component="span">
                    Upload
                  </Button>
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
          </React.Fragment>
        </Grid>
        <Grid
          item
          container
          direction="row"
          xs={5}
          style={{
            backgroundColor: "#FAF9F8",
            height: "750px",
          }}
        >
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Card
              sx={{ maxWidth: 500 }}
              style={{
                marginTop: "50px",
                maxWidth: "640px",
                padding: "8px 8px 0",
                backgroundColor: "#fff",
                border: "1px solid #d8d8d8",
                maxHeight: "631px",
                borderRadius: "8px",
                height: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent style={{ textAlign: "left" }}>
                <Grid container direction="row">
                  <Grid item xs={3}>
                    <div
                      style={{
                        height: "3rem",
                        width: "3rem",
                        minWidth: "3rem",
                        border: "1px solid #ececec",
                        borderRadius: "8px",
                        marginRight: "1rem",
                        padding: "0.5rem",
                      }}
                    >
                      img
                    </div>
                  </Grid>
                  <Grid item xs={9} style={{ marginTop: "15px" }}>
                    <div style={{ fontSize: "14px" }}>
                      <b>Restaurant Server: WAGES PLUS TIPS</b>
                    </div>
                    <div style={{ fontSize: "12px" }}>
                      Old Spaghetti Factory - San Jose, CA 95110
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <p style={{ textAlign: "left", marginBottom: "0px" }}>
                <b>Server</b>
              </p>
              <p
                style={{
                  textAlign: "left",
                  marginTop: "5px",
                  marginBottom: "0px",
                }}
              >
                As a member of the front of house team, you’ll create memorable
                experiences for our guests and work alongside people who are
                just as passionate as you are. We’re looking for energetic,
                engaging, and charismatic servers to join our team! Our recipe
                has remained the same for 51 years. We hire great people,
                provide great service, prepare great food and offer a great
                value.
              </p>
              <CardActions disableSpacing>
                <div
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={handleExpandClick}
                >
                  <b>See {expanded ? "less" : "more"}</b>
                </div>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  style={{
                    color: "blue",
                    fontSize: "16px",
                  }}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ApplyJob;
