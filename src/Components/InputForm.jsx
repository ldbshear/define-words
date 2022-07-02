import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Definition from "./Definition";
import axios from "axios";
import Footer from "./Footer";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";

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
    console.log(response.data.photos);
    let wordPhoto = response.data.photos;

    if (!wordPhoto) {
      return;
    } else {
      setPhotos(wordPhoto);
    }
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

  useEffect(() => {
    const fetchPhoto = () => {
      console.log("called useEffect");
      let url;
      const token = `563492ad6f9170000100000115fb5e54b188467c96aa821aa725fe2a`;
      url = `${searchUrl}?query=${userWord}&per_page=3`;

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
              bgcolor: "#2bbd7e",
              color: "black",
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
            {
              <Card
                align="center"
                justify="baseline"
                sx={{ marginTop: 16, height: 250 }}
              >
                <ImageList
                  sx={{ width: 500, height: 450 }}
                  cols={3}
                  rowHeight={164}
                >
                  {photo.map((pic, index) => {
                    const smallSize = pic.src;
                    return (
                      <>
                        <ImageListItem key={index}>
                          <img
                            src={`${smallSize.tiny}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${smallSize.tiny}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt=""
                            loading="lazy"
                          />
                        </ImageListItem>
                      </>
                    );
                  })}
                </ImageList>
              </Card>
            }

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
