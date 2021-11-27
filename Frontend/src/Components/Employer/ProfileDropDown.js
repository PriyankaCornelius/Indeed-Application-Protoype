import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Reviews from "@mui/icons-material/Reviews";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LogoutIcon from "@mui/icons-material/Logout";
import { Menu, MenuItem, Typography } from "@mui/material";
import { ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";

const ProfileIconData = (props) => {
  return (
    <React.Fragment>
      <Menu
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.onClose}
        onClick={props.onClick}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            width: 250,

            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Typography
          sx={{ textAlign: "center", lineHeight: 4, fontWeight: 600 }}
        >
          company@email.com
        </Typography>
        <Link to="/jobSeekerProfile" style={{ textDecoration: "none" }}>
          <MenuItem>
            <ListItemIcon>
              <DescriptionIcon fontSize="small" />
            </ListItemIcon>
            Company Profile
          </MenuItem>
        </Link>
        <MenuItem>
          <ListItemIcon>
            <ReviewsIcon fontSize="small" />
          </ListItemIcon>
          Reviews
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default ProfileIconData;
