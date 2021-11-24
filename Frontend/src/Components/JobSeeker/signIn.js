import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import indeedLogo from "../../Images/IndeedIcon.png";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#f3f2f1",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        style={{
          marginTop: "100px",
          marginBottom: "100px",
          marginLeft: "450px",
        }}
      >
        <Paper
          variant="outlined"
          style={{
            borderRadius: "0.5rem",
            border: "1px solid #d4d2d0",
            padding: "24px",
            width: "480px",
            height: "500px",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <h1
              style={{
                fontSize: "26px",
                margin: "0px 0px 8px",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Ready to take the next step?
            </h1>
            <div
              style={{
                fontSize: "14px",
                margin: "0px 0px 16px",
                textAlign: "left",
              }}
            >
              Create an account or sign in.
            </div>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <div
                style={{
                  fontSize: "14px",
                  textAlign: "left",
                  marginTop: "25px",
                }}
              >
                When you create an account or sign in, you agree to Indeed's{" "}
                <a style={{ color: "blue", cursor: "pointer" }}>Terms</a>,{" "}
                <a style={{ color: "blue", cursor: "pointer" }}>Cookie</a> and{" "}
                <a style={{ color: "blue", cursor: "pointer" }}>Privacy</a>{" "}
                policies. You consent to receiving marketing messages from
                Indeed and may opt out from receiving such messages by following
                the unsubscribe link in our messages, or as detailed in our
                terms.
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ height: "44px" }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    lineHeight: "1.5",
                    fontSize: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Continue
                </span>
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
