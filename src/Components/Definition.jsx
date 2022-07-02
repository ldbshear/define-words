import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function Definition(props) {
  const wordAudioElement = new Audio(props.sound);
  if (!props.sound) {
    return (
      <>
        <div sx={{ marginBottom: 5 }}>
          <Paper sx={{ maxWidth: 775, marginTop: 10 }} elevation={3}>
            <Card>
              <CardMedia
                component="img"
                height=""
                width=""
                // image={`${props.image}`}
                // alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontSize: 36, fontWeight: 600 }}>
                  {`${props.searchWord}`}
                </Typography>

                <Typography>{`${props.phonics}`}</Typography>

                <Typography sx={{ fontSize: 18 }}>
                  {`Part of speech: ${props.partOfSpeech}`}
                </Typography>
                <Typography sx={{ fontSize: 20, fontStyle: "italic" }}>
                  {`Definition of ${props.searchWord} as a ${props.partOfSpeech}:`}
                </Typography>
                <Typography sx={{ fontSize: 24 }}>
                  {` ${props.meaning}`}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div sx={{ marginBottom: 5 }}>
          <Paper sx={{ maxWidth: 775, marginTop: 10 }} elevation={3}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 36, fontWeight: 600 }}>
                  {`${props.searchWord}`}
                </Typography>

                <Button
                  onClick={(e) => {
                    wordAudioElement.play();
                  }}
                >
                  Hear word
                </Button>
                <Typography>{`${props.phonics}`}</Typography>

                <Typography sx={({ fontSize: 18 }, { lineHeight: 3 })}>
                  {`Part of speech: ${props.partOfSpeech}`}
                </Typography>
                <Typography
                  sx={{ fontSize: 20, fontStyle: "italic", lineHeight: 2 }}
                >
                  {`Definition of ${props.searchWord} as a ${props.partOfSpeech}:`}
                </Typography>
                <Typography sx={{ fontSize: 24, lineHeight: 1.75 }}>
                  {` ${props.meaning}`}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </div>
      </>
    );
  }
}
