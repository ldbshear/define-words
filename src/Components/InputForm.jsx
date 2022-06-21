import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function InputForm() {
  const [userInput, showUserInput] = useState("");
  const [userWord, showUserWord] = useState("");

  function handleClick(e) {
    e.preventDefault();
    console.log("Button clicked");
    showUserWord(userInput);
  }
  function handleChange(e) {
    showUserInput(e.target.value);
  }

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          // bgcolor: "#cfe8fc",
          height: "100vh"
        }}
      >
        <div align="center">
          <TextField
            sx={{
              marginTop: "2.5rem",
              width: 500,
              maxWidth: "100%",
            }}
            id="outlined-helperText"
            label="Enter word"
            type="search"
            value={userInput}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div align="center">
          <Button
            variant="contained"
            type="submit"
            sx={{
              marginTop: "2.5rem",
              width: 500,
              maxWidth: "100%",
            }}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Search
          </Button>
        </div>

        <div align="center">
          <Card sx={{ maxWidth: 475, marginTop: 10 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 44 }}
                color="text.secondary"
                gutterBottom
              >
                {`Searching For ${userWord}`}
              </Typography>

              {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography> */}
              {/* <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography> */}
            </CardContent>
          </Card>
        </div>
      </Box>
    </>
  );
}
