import React, { Component, Fragment } from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CardContent from '@material-ui/core/CardContent';
import ComputerIcon from '@material-ui/icons/Computer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import SkillDisplay from '../skills/SkillDisplay';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import asTimelineContent from './asTimelineContent';
import isEmpty from 'lodash/isEmpty';

@asTimelineContent(theme => ({
  accomplishmentText: {
    ...theme.typography.body2,
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  skillRoot: {
    padding: `0 ${theme.spacing.unit * 2}px 0 ${theme.spacing.unit}px`,
    flex: '0 0 50%',
    flexDirection: 'column',
    alignItems: 'inherit',
  },
  skillName: {
    ...theme.typography.body2,
    flex: '0',
    textAlign: 'left',
  },
  skillProgressRoot: {
    flex: `0 0 ${theme.spacing.unit * 2}px`,
  },
}))
class JobEvent extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    event: MobxPropTypes.observableObject.isRequired,
  };

  static defaultProps = {
    classes: {},
  };

  handleTabChange = tabIndex => {
    this.setState({ tabIndex });
  };

  renderAccomplishments() {
    const { classes, event } = this.props;
    return (
      <List>
        {event.accomplishments.map(accomplishment => (
          <ListItem
            disableGutters
            key={accomplishment}
          >
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.accomplishmentText }}>{accomplishment}</ListItemText>
          </ListItem>
        ))}
      </List>
    );
  }

  renderSkills() {
    const { classes, event } = this.props;
    return (
      <div className={classes.skillsContainer}>
        {event.skills.map(skill => (
          <SkillDisplay
            key={skill}
            classes={{
              root: classes.skillRoot,
              skillName: classes.skillName,
              progressRoot: classes.skillProgressRoot,
            }}
            skill={event.getSkill(skill)}
          />
        ))}
      </div>
    );
  }

  renderTabs() {
    const { event } = this.props;
    const showAccomplishments = !isEmpty(event.accomplishments);
    const showSkills = !isEmpty(event.skills);
    const views = {};
    if (showAccomplishments) {
      views.accomplishments = this.renderAccomplishments();
    }
    if (showSkills) {
      views.skills = this.renderSkills();
    }
    if (isEmpty(views)) {
      return null;
    }
    return (
      <CardContent>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={this.state.tabIndex}
          onChange={(ev, idx) => this.handleTabChange(idx)}
        >
          {showAccomplishments && <Tab label="Accomplishments" />}
          {showSkills && <Tab label="Skills" />}
        </Tabs>
        <SwipeableViews
          index={this.state.tabIndex}
          onChangeIndex={this.handleTabChange}
        >
          {Object.keys(views).map(key => <Fragment key={key}>{views[key]}</Fragment>)}
        </SwipeableViews>
      </CardContent>
    );
  }

  render() {
    const { event } = this.props;
    return (
      <Fragment>
        {this.renderHeader(event.name, event.position, ComputerIcon)}
        {this.renderMainContent((
          <Typography variant="body2">
            {event.overview}
          </Typography>
        ))}
        {this.renderFooter()}
      </Fragment>
    );
  }
}

export default JobEvent;
