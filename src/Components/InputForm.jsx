import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Definition from "./Definition";
import axios from "axios";
import Footer from "./Footer";

export default function InputForm(props) {
  const [userInput, showUserInput] = useState("");
  const [userWord, showUserWord] = useState("");
  const [phonics, getPhonics] = useState("");
  const [sound, getSound] = useState("");
  const [definedWord, showDefinedWord] = useState([]);
  const [searchResult, displaySearchResult] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    showUserWord(userInput.toLowerCase());

    displaySearchResult(true);
  }
  function handleChange(e) {
    showUserInput(e.target.value);
    displaySearchResult(false);
    getSound(null);
  }
  function handleData(response) {
    const wordSyllables = response.data[0].phonetics[0].text;
    const wordSound = response.data[0].phonetics[0].audio;
    const wordDataPOS = response.data[0].meanings;
    console.log(response.data[0]);
    console.log(wordSyllables);
    console.log(wordSound);
    getPhonics(wordSyllables);
    showDefinedWord(wordDataPOS);
    if (!wordSound) {
      return;
    } else {
      getSound(wordSound);
    }
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
            <div></div>
            {definedWord.map((word, index) => {
              const wordDef = word.definitions;
              const [{ definition }] = wordDef;

              return (
                <>
                  <Definition
                    key={index}
                    phonics={phonics}
                    sound={sound}
                    searchWord={userWord}
                    partOfSpeech={word.partOfSpeech}
                    meaning={definition}
                    synonyms={word.synonyms}
                  />
                </>
              );
            })}
          </div>
        )}
        <Footer />
      </Box>
    </>
  );
}
