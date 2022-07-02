import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Definition from "./Definition";
import axios from "axios";
import Footer from "./Footer";

const searchUrl = `https://api.pexels.com/v1/search`;

export default function InputForm(props) {
  const [userInput, showUserInput] = useState("");
  const [userWord, showUserWord] = useState("");
  const [phonics, getPhonics] = useState("");
  const [sound, getSound] = useState("");
  const [definedWord, showDefinedWord] = useState([]);
  const [photo, setPhotos] = useState([]);
  const [searchResult, displaySearchResult] = useState(false);

  function HandleClick(e) {
    e.preventDefault();
    showUserWord(userInput.toLowerCase());

    displaySearchResult(true);
  }
  function HandleChange(e) {
    showUserInput(e.target.value);
    displaySearchResult(false);
    getSound(null);
  }

  function handlePhotos(response) {
    console.log(response.data.photos[0].src.medium);
    let wordPhoto = response.data.photos[0].src.small;
    setPhotos(wordPhoto);
  }

  function HandleData(response) {
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

  // useEffect(() => {
  //   function GetPhoto() {
  //     //const [loading, setLoading] = useState(false);
  //     //
  //     const fetchImages = async () => {
  //       //setLoading(true);
  //       let url;
  //       const header = `563492ad6f9170000100000115fb5e54b188467c96aa821aa725fe2a`;
  //       url = `${searchUrl}?query={userWord}`;
  //       try {
  //         const response = await fetch(url, header);
  //         console.log(response);
  //         const data = await response.json();
  //         console.log(data);
  //       } catch (error) {
  //         //setLoading(false);
  //         console.log(error);
  //       }
  //     };
  //   }

  //   GetPhoto();
  // }, [userWord]);

  useEffect(() => {
    const fetchPhoto = () => {
      console.log("called useEffect");
      let url;
      const token = `563492ad6f9170000100000115fb5e54b188467c96aa821aa725fe2a`;
      url = `${searchUrl}?query=${userWord}&per_page=1`;

      axios
        .get(url, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then(handlePhotos)
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
    fetchPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userWord]);

  useEffect(() => {
    const fetchData = () => {
      console.log("called useEffect");
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;
      axios
        .get(url)
        .then(HandleData)
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
              HandleChange(e);
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
              HandleClick(e);
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
                    image={photo}
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
