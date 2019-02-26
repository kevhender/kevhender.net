import { PropTypes as MobxPropTypes, inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import Card from '@material-ui/core/es/Card/Card';
import JobEvent from './JobEvent';
import PropTypes from 'prop-types';
import SchoolEvent from './SchoolEvent';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

/**
 * Displays a Timeline event
 */
@withStyles(theme => ({
  root: {
    'margin': `5px ${theme.timeline.arrowWidth}`,
    'position': 'relative',
    'maxWidth': `${theme.timeline.eventWidth}px`,
    'flex': 1,
    '&:before': {
      content: '" "',
      height: 0,
      position: 'absolute',
      top: '10px',
      width: 0,
      zIndex: 1,
      right: `-${theme.timeline.arrowWidth}`,
      borderStyle: 'solid',
      borderWidth: `${theme.timeline.arrowWidth} 0 ${theme.timeline.arrowWidth} ${theme.timeline.arrowWidth}`,
      borderColor: `transparent ${theme.palette.primary.main} transparent ${theme.palette.primary.main}`,
      [theme.breakpoints.down('sm')]: {
        left: `-${theme.timeline.arrowWidth}`,
        borderWidth: `${theme.timeline.arrowWidth} ${theme.timeline.arrowWidth} ${theme.timeline.arrowWidth} 0`,
      },
    },
  },
  evenRoot: {
    '&:before': {
      left: `-${theme.timeline.arrowWidth}`,
      borderWidth: `${theme.timeline.arrowWidth} ${theme.timeline.arrowWidth} ${theme.timeline.arrowWidth} 0`,
    },
  },
  selected: {
    '&:before': {
      borderColor: `transparent ${theme.palette.secondary.main} transparent ${theme.palette.secondary.main}`,
    },
  },
  card: {
    boxShadow: `0 0 2px 3px ${theme.palette.primary.main}`,
  },
  selectedCard: {
    boxShadow: `0 0 8px 4px ${theme.palette.secondary.main}`,
  },
}))
@inject('timeline')
@observer
class TimelineEvent extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    timeline: MobxPropTypes.observableObject.isRequired,
    event: MobxPropTypes.observableObject.isRequired,
    isOdd: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    classes: {},
  };

  static eventClassMap = {
    employment: JobEvent,
    school: SchoolEvent,
  };

  onSelectEvent = event => {
    this.props.timeline.selectEvent(event);
  };

  render() {
    const {
      classes,
      event,
      timeline,
      isOdd,
    } = this.props;
    const Event = TimelineEvent.eventClassMap[event.type];
    if (!Event) {
      console.error(`No class type mapped in TimelineEvent.eventClassMap for type '${event.type}'.`);
      return null;
    }

    return (
      <div
        className={classnames(
          classes.root,
          {
            [classes.evenRoot]: !isOdd,
            [classes.selected]: event === timeline.selectedEvent,
          },
        )}
      >
        <Card
          className={classnames(
            classes.card,
            { [classes.selectedCard]: event === timeline.selectedEvent },
          )}
          key={event.name}
          onMouseOver={() => this.onSelectEvent(event)}
          onFocus={() => this.onSelectEvent(event)}
          onMouseOut={() => this.onSelectEvent(null)}
          onBlur={() => this.onSelectEvent(null)}
        >
          <Event event={event} />
        </Card>
      </div>
    );
  }
}

export default TimelineEvent;
