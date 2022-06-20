import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function InputForm() {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-helperText"
            label="Type word"
            defaultValue="Enter word here"
          />
        </div>
      </Box>
    </>
  );
}
