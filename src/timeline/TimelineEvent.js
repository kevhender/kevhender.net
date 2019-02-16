import { PropTypes as MobxPropTypes, inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import Card from '@material-ui/core/es/Card/Card';
import PropTypes from 'prop-types';
import TimelineEventContent from './TimelineEventContent';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

const TRIANGLE_WIDTH = '15px';

/**
 * Displays a Timeline event
 */
@withStyles(theme => ({
  root: {
    'margin': `5px ${TRIANGLE_WIDTH}`,
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
      right: `-${TRIANGLE_WIDTH}`,
      borderStyle: 'solid',
      borderWidth: `${TRIANGLE_WIDTH} 0 ${TRIANGLE_WIDTH} ${TRIANGLE_WIDTH}`,
      borderColor: `transparent ${theme.palette.primary.main} transparent ${theme.palette.primary.main}`,
      [theme.breakpoints.down('sm')]: {
        left: `-${TRIANGLE_WIDTH}`,
        borderWidth: `${TRIANGLE_WIDTH} ${TRIANGLE_WIDTH} ${TRIANGLE_WIDTH} 0`,
      },
    },
  },
  evenRoot: {
    '&:before': {
      left: `-${TRIANGLE_WIDTH}`,
      borderWidth: `${TRIANGLE_WIDTH} ${TRIANGLE_WIDTH} ${TRIANGLE_WIDTH} 0`,
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
          <TimelineEventContent event={event} />
        </Card>
      </div>
    );
  }
}

export default TimelineEvent;
