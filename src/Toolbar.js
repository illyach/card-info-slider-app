import React from "react";
import { Typography } from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";
import { purple } from "@mui/material/colors";
const Toolbar = (props) => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "#512da8",
          textDecoration: "none",
          backgroundColor: "lightblue",
          padding: 4,
        }}
      >
        CARDS INFO <StyleIcon size="large" />
      </Typography>
    </>
  );
};

export default Toolbar;
