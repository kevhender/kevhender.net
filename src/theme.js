import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default function createTheme() {
  return createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        main: '#8b4b5b',
      },
      secondary: {
        main: '#d26a43',
      },
    },
    timeline: {
      chronoWidth: 80,
      chronoLineWidth: 8,
    },
  });
}
