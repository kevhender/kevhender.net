import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Provider } from 'mobx-react';
import Timeline from './timeline/Timeline';
import TimelineModel from './timeline/TimelineModel';
import createTheme from './theme';

const DATA = [];

const timelineData = TimelineModel.create({ events: DATA });

const theme = createTheme();

class Root extends Component {
  render() {
    return (
      <Provider timeline={timelineData}>
        <MuiThemeProvider theme={theme}>
          <Timeline events={DATA} />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
export default Root;
