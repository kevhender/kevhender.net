import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const MAROON = '#8b4b5b';
const ORANGE = '#d26a43';

export default function createTheme() {
  return createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      text: {
        primary: MAROON,
      },
      primary: {
        main: MAROON,
      },
      secondary: {
        main: ORANGE,
      },
      tonalOffset: 0.6,
    },
    timeline: {
      chronoWidth: 80,
      chronoLineWidth: 8,
      eventWidth: 450,
    },
  });
}
