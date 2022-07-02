import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Title() {
  return (
    <>
    <Box>
      <Typography
        align="center"
        fontWeight={500}
        marginTop={12}
        variant="h2"
        component="div"
        className="Title"
        gutterBottom
      >
        Define Words
      </Typography>
    </Box>
      
    </>
  );
}
