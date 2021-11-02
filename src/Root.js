import React, { Component } from 'react';
import App from './layout/App';
import AppModel from './AppModel';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'mobx-react';
import convertSkillsData from './util/convertSkillsData';
import convertTimelineData from './util/convertTimelineData';
import createTheme from './theme';
import rawSkillsData from '../resources/data/Skills.json';
import rawTimelineData from '../resources/data/TimelineEvents.json';

const timelineData = convertTimelineData(rawTimelineData);
const skillsData = convertSkillsData(rawSkillsData);

const theme = createTheme();

class Root extends Component {
  render() {
    return (
      <Provider
        app={AppModel.create({
          skills: skillsData.skills,
          skillCategories: skillsData.skillCategories,
          timelineEvents: timelineData,
        })}
      >
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
export default Root;
