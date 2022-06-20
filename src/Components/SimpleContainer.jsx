import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Title from "./Title";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
        <Box component="span">
          <Title />
        </Box>
      </Container>
    </React.Fragment>
  );
}
