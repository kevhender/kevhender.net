import { createMuiTheme } from '@material-ui/core/styles';

const MAROON = '#8b4b5b';
const ORANGE = '#f08c3c';

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
    overrides: {
      MuiDialogTitle: {
        root: {
          padding: '0 0 24px 0',
        },
      },
      MuiListItem: {
        root: {
          paddingTop: '4px',
          paddingBottom: '4px',
        },
      },
      MuiListItemText: {
        root: {
          padding: '0',
        },
      },
      MuiListItemIcon: {
        root: {
          'alignSelf': 'flex-start',
          'marginRight': '8px',
          '& svg': {
            color: MAROON,
          },
        },
      },
    },
  });
}
