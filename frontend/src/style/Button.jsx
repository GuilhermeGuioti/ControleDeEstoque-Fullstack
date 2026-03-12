import React from "react";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const ThemeSwitch = styled(Switch)(() => ({
  width: 72,
  height: 38,
  padding: 7,

  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 4,
    transitionDuration: "300ms",

    "&.Mui-checked": {
      transform: "translateX(34px)",

      "& + .MuiSwitch-track": {
        backgroundColor: "#e0e0e0",
        opacity: 1,
      },
    },
  },

  "& .MuiSwitch-thumb": {
    backgroundColor: "#1a1a1a",
    width: 28,
    height: 28,
  },

  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor: "#1a1a1a",
    opacity: 1,
  },
}));

export default function ToggleTheme({ mode, toggleTheme }) {
  return (
    <ThemeSwitch
      checked={mode === "light"}
      onChange={toggleTheme}
    />
  );
}