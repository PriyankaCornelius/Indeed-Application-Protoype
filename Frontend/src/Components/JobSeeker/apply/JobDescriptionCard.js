import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Divider, Typography } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const JobDescriptionCard = (props) => {
  const [expanded, setExpanded] = useState(false);

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
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
        experiences for our guests and work alongside people who are just as
        passionate as you are. We’re looking for energetic, engaging, and
        charismatic servers to join our team! Our recipe has remained the same
        for 51 years. We hire great people, provide great service, prepare great
        food and offer a great value.
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
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default JobDescriptionCard;
