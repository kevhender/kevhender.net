import { PropTypes as MobxPropTypes, inject, observer } from 'mobx-react';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/es/Typography/Typography';
import classnames from 'classnames';
import getEventUIRange from './getEventUIRange';
import getMonthsForRange from './getMonthsForRange';
import head from 'lodash/head';
import isDateInSelectedRange from './isDateInSelectedRange';
import last from 'lodash/last';
import withStyles from '@material-ui/core/styles/withStyles';

/**
 * A piece of the timeline chronology, marking how much time has passed for an event
 */
@withStyles(theme => ({
  root: {
    width: `${theme.timeline.chronoWidth}px`,
    padding: '0 .5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'stretch',
    order: 2,
    [theme.breakpoints.down('sm')]: {
      width: `${theme.timeline.chronoWidth / 2}px`,
    },
  },
  label: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '.4rem .7rem',
    borderRadius: '8px',
    [theme.breakpoints.down('sm')]: {
      transform: 'rotate(270deg)',
    },
  },
  presentYearLabel: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
    },
    '& + $monthSpacer': {
      flex: '1 0 40px',
    },
  },
  spacer: {
    width: `${theme.timeline.chronoLineWidth}px`,
    backgroundColor: theme.palette.primary.main,
  },
  selectedSpacer: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: `0 0 12px ${theme.palette.secondary.main}`,
  },
  monthSpacer: {
    flex: '1 0 8px',
  },
  yearSpacer: {
    flex: '1 0 96px',
  },
  multiYearSpacer: {
    flex: '1 0 48px',
  },
  multiYearBreak: {
    width: 0,
    borderLeft: `${theme.timeline.chronoLineWidth}px dotted ${theme.palette.primary.main}`,
    flex: '1 0 25px',
    margin: '5px 0',
  },
  selectedYearBreak: {
    borderColor: theme.palette.secondary.main,
  },
}))
@inject('timeline')
@observer
class TimelineChrono extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    timeline: MobxPropTypes.observableObject.isRequired,
    currentEvent: MobxPropTypes.observableObject.isRequired,
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    classes: {},
  };

  renderYearLabel(year, isLast) {
    const { classes, timeline } = this.props;
    const now = new Date();
    return (
      <Typography
        key={`label-${year}`}
        className={classnames(
          classes.label,
          {
            [classes.selectedSpacer]: isDateInSelectedRange(timeline, new Date(`${isLast ? '12/31' : '01/01'}/${year === 'Present' ? now.getFullYear() : year}`)),
            [classes.presentYearLabel]: year === 'Present',
          },
        )}
        variant="body1"
      >
        {year}
      </Typography>
    );
  }

  renderSpacer(month, year) {
    const { classes, timeline } = this.props;
    return (
      <div
        key={`${year}-${month}`}
        className={classnames(
          classes.spacer,
          classes.monthSpacer,
          { [classes.selectedSpacer]: isDateInSelectedRange(timeline, new Date(`${month + 1}/01/${year === 'Present' ? new Date().getFullYear() : year}`)) },
        )}
      />
    );
  }

  renderMultiYearSpacer(year) {
    const { classes, timeline } = this.props;
    const testDate = new Date(`01/01/${year}`);
    return (
      <Fragment key={`multiYear-${year}`}>
        <div
          className={classnames(
            classes.spacer,
            classes.multiYearSpacer,
            { [classes.selectedSpacer]: isDateInSelectedRange(timeline, testDate) },
          )}
        />
        <div
          className={classnames(
            classes.multiYearBreak,
            { [classes.selectedYearBreak]: isDateInSelectedRange(timeline, testDate) },
          )}
        />
        <div
          className={classnames(
            classes.spacer,
            classes.multiYearSpacer,
            { [classes.selectedSpacer]: isDateInSelectedRange(timeline, testDate) },
          )}
        />
      </Fragment>
    );
  }

  renderRange(monthRange) {
    return (
      <Fragment>
        {
          monthRange.map(time => {
            if (time.spacer) {
              return this.renderMultiYearSpacer(time.year);
            }
            if (time.month === 0) {
              return this.renderYearLabel(time.year);
            }
            return this.renderSpacer(time.month, time.year);
          })
        }
      </Fragment>
    );
  }

  render() {
    const {
      classes,
      timeline,
      currentEvent,
      isFirst,
      isLast,
    } = this.props;
    const { startDate, endDate } = getEventUIRange(timeline, currentEvent);
    const monthRange = getMonthsForRange(startDate, endDate);
    const firstMonth = head(monthRange) || {};
    const lastMonth = last(monthRange) || {};
    return (
      <div className={classes.root}>
        {isFirst && firstMonth.month ? this.renderYearLabel('Present') : null}
        {this.renderRange(monthRange)}
        {isLast && lastMonth.month ? this.renderYearLabel(lastMonth.year, isLast) : null}
      </div>
    );
  }
}

export default TimelineChrono;
