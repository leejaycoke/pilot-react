import { createTheme } from "@material-ui/core";

export const globalTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body, div#root": {
          width: "100%",
          height: "100%",
        },
      },
    },
  },
});
