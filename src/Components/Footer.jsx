import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Copyright from "./Copyright";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <>
      <Box sx={{ p: 5, mt: 10 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          {/* Footer */}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Coded by{" "}
          <Link color="inherit" href="https://louisadbjones.com/">
            Louisa Blackshear-Jones
          </Link>{" "}
        </Typography>
        <Copyright />

        <a href="https://www.pexels.com">
          <Typography variant="body2" align="center" color="text.secondary">
            Photos provided by Pexel
          </Typography>
        </a>
        <Typography variant="body2" align="center" color="text.secondary">
          <Link color="inherit" href="https://louisadbjones.com/">
            Github
          </Link>{" "}
        </Typography>
      </Box>
    </>
  );
}
