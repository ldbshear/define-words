import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Title from "./Title";

import InputForm from "./InputForm";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box component="span">
          <Title />
        </Box>
        <InputForm />
      </Container>
    </React.Fragment>
  );
}
