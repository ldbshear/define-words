import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Definition(props) {
  return (
    <>
      <Paper sx={{ maxWidth: 775, marginTop: 10 }} elevation={3}>
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 24 }}>{props.searchWord}</Typography>
            <Typography sx={{ fontSize: 24 }}>
              {`Part of speech: ${props.partOfSpeech}`}
            </Typography>
            <Typography sx={{ fontSize: 24 }}>
              {`Definition: ${props.meaning}`}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
}
