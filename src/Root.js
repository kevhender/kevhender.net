import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Provider } from 'mobx-react';
import Timeline from './timeline/Timeline';
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
          <Timeline />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
export default Root;
