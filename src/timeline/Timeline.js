import { PropTypes as MobxPropTypes, inject } from 'mobx-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimelineChrono from './TimelineChrono';
import TimelineEvent from './TimelineEvent';
import withStyles from '@material-ui/core/styles/withStyles';

/**
 * Displays a Timeline
 */
@withStyles((theme => ({
  root: {
    display: 'flex',
  },
  eventColumn: {
    flex: 1,
    marginTop: '2rem',
  },
  eventRowObject: {
    flex: `1 0 calc(50% - ${theme.timeline.chronoWidth / 2}px)`,
  },
})))
@inject('timeline')
class Timeline extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    timeline: MobxPropTypes.observableObject.isRequired,
  };

  static defaultProps = {
    classes: {},
  };

  renderTimelineEvent = event => {
    const { classes } = this.props;
    return (
      <TimelineEvent
        key={event.name}
        className={classes.eventRowObject}
        event={event}
      />
    );
  };

  render() {
    const { classes, timeline } = this.props;
    const events = timeline.sortedEvents;
    return events.map((event, idx) => (
      <div className={classes.root} key={event.name}>
        <div className={classes.eventColumn}>
          { idx % 2 ? null : this.renderTimelineEvent(event) }
        </div>
        <TimelineChrono currentEvent={event} isFirst={idx === 0} isLast={idx === events.length - 1} />
        <div className={classes.eventColumn}>
          { idx % 2 ? this.renderTimelineEvent(event) : null }
        </div>
      </div>
    ));
  }
}
export default Timeline;
