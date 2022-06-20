import * as React from "react";
import Typography from "@mui/material/Typography";

export default function Title() {
  return (
    <>
      <Typography
        align="center"
        fontWeight={500}
        marginTop={15}
        variant="h2"
        component="div"
        className="Title"
        gutterBottom
      >
        Define Words
      </Typography>
    </>
  );
}
