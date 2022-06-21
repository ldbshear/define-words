import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function InputForm() {
  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          bgcolor: "#cfe8fc",
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
          />
        </div>
      </Box>
    </>
  );
}
