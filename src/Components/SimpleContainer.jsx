import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Title from "./Title";
import Footer from "./Footer";
import InputForm from "./InputForm";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
        <Box component="span">
          <Title />
        </Box>
        <InputForm />
      </Container>
      <Footer />
    </React.Fragment>
  );
}
