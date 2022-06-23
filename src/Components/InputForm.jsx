import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Definition from "./Definition";
import axios from "axios";

export default function InputForm(props) {
  const [userInput, showUserInput] = useState("");
  const [userWord, showUserWord] = useState("");
  const [primaryPOS, showPrimaryPOS] = useState("");
  const [primaryDefinition, showPrimaryDefinition] = useState("");
  // const [secondaryPOS, showSecondaryPOS] = useState("");
  // const [secondaryDefinition, showSecondaryDefinition] = useState("");
  const [searchResult, displaySearchResult] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    showUserWord(userInput.toUpperCase());

    displaySearchResult(true);
  }
  function handleChange(e) {
    showUserInput(e.target.value);
    displaySearchResult(false);
  }
  function handleData(response) {
    console.log(response.data);
    const wordData = response.data[0];
    const pos = wordData.meanings[0].partOfSpeech;
    const def = wordData.meanings[0].definitions[0].definition;
    // const pos2 = wordData.meanings[1].partOfSpeech;
    // const def2 = wordData.meanings[1].definitions[1].definition;
    console.log(wordData);
    showPrimaryPOS(pos);
    showPrimaryDefinition(def);
    // showSecondaryPOS(pos2);
    // showSecondaryDefinition(def2);
  }

  useEffect(() => {
    const fetchData = () => {
      console.log("called useEffect");
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;
      axios
        .get(url)
        .then(handleData)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userWord]);

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          // bgcolor: "#cfe8fc",
          height: "100vh",
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

        {searchResult && (
          <div align="start">
            {/* <Card sx={{ maxWidth: 475, marginTop: 10 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 44 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {`Searching for ${userWord}`}
                </Typography>
              </CardContent>
            </Card> */}

            <Definition
              searchWord={userWord}
              partOfSpeech={primaryPOS}
              meaning={primaryDefinition}
            />
            {/* <Definition
              searchWord={userWord}
              partOfSpeech={secondaryPOS}
              meaning={secondaryDefinition}
             
            /> */}
          </div>
        )}
      </Box>
    </>
  );
}
