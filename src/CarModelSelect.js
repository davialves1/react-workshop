import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material";

const brands = [
  { label: "Golf" },
  { label: "Golf GTI" },
  { label: "Golf Variant" },
  { label: "Golf R" },
  { label: "Polo" },
  { label: "T-Roc" },
  { label: "Passat" },
  { label: "Passat R" },
  { label: "Tiguan" },
  { label: "ID.3" },
  { label: "ID.4" },
  { label: "ID.5" },
  { label: "Taigo" },
  { label: "Tourag" },
  { label: "Up!" },
  { label: "Arteon" },
  { label: "Caddy" },
  { label: "Beetle" },
  { label: "Scirocco" },
  { label: "Corrado" },
  { label: "Touran" },
  { label: "Santana" },
  { label: "Bora" },
  { label: "Jetta" },
  { label: "Magotan" },
  { label: "Voyage" },
];

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});

const CarModelSelect = () => {
  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        size="small"
        id="brand-selection"
        sx={{ margin: "4px 0 0 0" }}
        renderInput={(params) => <TextField size="small" {...params} />}
        options={brands}
      />
    </ThemeProvider>
  );
};

export default CarModelSelect;
