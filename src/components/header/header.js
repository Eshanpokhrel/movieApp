import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ background: "#1d1d1d", color: "#919191" }}
        position="static"
      >
        <Toolbar>
          <img
            width={"auto"}
            height={40}
            src="/movie.svg"
            alt=""
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
