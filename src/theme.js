import { createMuiTheme } from "@material-ui/core/styles"

const config = {
  primary: "#01446f",
  secondary: "#ff5722",
  borderRadius: 10,
  sectionPadding: {
    default: {
      padding: "30px 5%",
    },
    x: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    y: {
      paddingTop: 30,
      paddingBottom: 30,
    },
  },
}

const typographyCommon = {
  "&:not(:last-child)": {
    marginBottom: "0.7em",
  },
}

const arbutusTheme = {
  borderRadius: config.borderRadius,
  sectionPadding: config.sectionPadding.default,
  sectionPaddingX: config.sectionPadding.x,
  sectionPaddingY: config.sectionPadding.y,
  palette: {
    primary: {
      main: config.primary,
    },
    secondary: {
      main: config.secondary,
    },
  },
  typography: {
    h1: {
      fontSize: 40,
      color: "inherit",
    },
    h2: {
      textTransform: "uppercase",
      fontSize: 14,
      fontWeight: 900,
      letterSpacing: 1,
      color: config.secondary,
    },
    h3: {
      fontSize: 26,
      color: "inherit",
    },
    h4: {
      fontSize: 18,
      color: "inherit",
    },
    h5: {
      fontSize: 16,
      color: "inherit",
    },
  },
  overrides: {
    body: {
      color: config.primary,
    },
    MuiTypography: {
      root: {
        ...typographyCommon,
      },
    },
  },
}

export default createMuiTheme(arbutusTheme)
