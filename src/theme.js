import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const MAROON = '#8b4b5b';
const ORANGE = '#d26a43';

const MAX_WIDTH = 1000;

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
    body: {
      maxWidth: MAX_WIDTH,
    },
    timeline: {
      chronoWidth: 90,
      chronoLineWidth: 8,
      arrowWidth: 15,
      eventWidth: (MAX_WIDTH - 90 - 8 - 15 - 15) / 2,
    },
  });
}
