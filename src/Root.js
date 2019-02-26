import React, { Component } from 'react';
import App from './layout/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Provider } from 'mobx-react';
import TimelineModel from './timeline/TimelineModel';
import convertTimelineData from './util/convertTimelineData';
import createTheme from './theme';
import rawTimelineData from '../resources/data/TimelineEvents';

const timelineData = TimelineModel.create({ events: convertTimelineData(rawTimelineData) });

const theme = createTheme();

class Root extends Component {
  render() {
    return (
      <Provider timeline={timelineData}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
export default Root;
