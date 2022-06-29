import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Definition(props) {
  return (
    <>
      <div sx={{ marginBottom: 5 }}>
        <Paper sx={{ maxWidth: 775, marginTop: 10 }} elevation={3}>
          <Card>
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
              {/* <Typography sx={{ fontSize: 24 }}>
                {`Synonyms: ${props.synonyms}`}
              </Typography>
              <Typography sx={{ fontSize: 24 }}>
                {`Antonym: ${props.antonyms}`}
              </Typography> */}
            </CardContent>
          </Card>
        </Paper>
      </div>
    </>
  );
}
