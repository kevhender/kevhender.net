import { PropTypes as MobxPropTypes, inject } from 'mobx-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimelineChrono from './TimelineChrono';
import TimelineEvent from './TimelineEvent';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

/**
 * Displays a Timeline
 */
@withStyles(theme => ({
  eventRow: {
    display: 'flex',
  },
  eventColumn: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  eventSpacer: {
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flex: 0,
    },
  },
  oddEventColumn: {
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 3,
      justifyContent: 'flex-start',
    },
  },
  evenEventColumn: {
    order: 3,
    justifyContent: 'flex-start',
  },
  oddSpacerColumn: {
    order: 3,
  },
  evenSpacerColumn: {
    order: 1,
  },
}))
@inject('timeline')
class Timeline extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    timeline: MobxPropTypes.observableObject.isRequired,
  };

  static defaultProps = {
    classes: {},
  };

  render() {
    const { classes, timeline } = this.props;
    const events = timeline.sortedEvents;
    return events.map((event, idx) => (
      <div className={classes.eventRow} key={event.name}>
        <div
          className={classnames(
            classes.eventColumn,
            idx % 2 ? classes.evenEventColumn : classes.oddEventColumn,
          )}
        >
          <TimelineEvent event={event} isOdd={!(idx % 2)} />
        </div>
        <TimelineChrono
          currentEvent={event}
          isFirst={idx === 0}
          isLast={idx === events.length - 1}
        />
        <div
          className={classnames(
            classes.eventSpacer,
            idx % 2 ? classes.evenSpacerColumn : classes.oddSpacerColumn,
          )}
        />
      </div>
    ));
  }
}
export default Timeline;
