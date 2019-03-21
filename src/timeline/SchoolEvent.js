import React, { Component, Fragment } from 'react';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import SchoolIcon from '@material-ui/icons/School';
import Typography from '@material-ui/core/Typography';
import arrayToEnglish from '../util/arrayToEnglish';
import asTimelineContent from './asTimelineContent';
import moment from 'moment';

@asTimelineContent()
class SchoolEvent extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    event: MobxPropTypes.observableObject.isRequired,
  };

  static defaultProps = {
    classes: {},
  };

  renderOverview() {
    const { classes, event, event: { majors, minors } } = this.props;
    const pluralMajors = majors.length > 1;
    const numMinors = (minors || []).length;
    const makeBold = str => <span className={classes.bold}>{str}</span>;
    if (event.graduated) {
      return (
        <Typography variant="body2">
          {'Graduated in '}
          <span className={classes.bold}>
            {moment(event.graduated).format('MMMM YYYY')}
          </span>
          {` with${pluralMajors ? '' : ' a'} major${pluralMajors ? 's' : ''} in `}
          {arrayToEnglish(majors, makeBold)}
          {numMinors > 0 ? ` and ${numMinors > 1 ? '' : ' a'} minor${numMinors > 1 ? 's' : ''} in ` : ''}
          {arrayToEnglish(minors, makeBold)}
          .
        </Typography>
      );
    }
    return (
      <Fragment>
        <Typography variant="body2">
          <span className={classes.italic}>
            {`Major${pluralMajors ? 's' : ''}: `}
          </span>
          {arrayToEnglish(majors, makeBold)}
        </Typography>
        {numMinors > 0 ? (
          <Typography variant="body2">
            <span className={classes.italic}>
              {`Minor${numMinors > 1 ? 's' : ''}: `}
            </span>
            {arrayToEnglish(minors, makeBold)}
          </Typography>
        ) : null}
      </Fragment>
    );
  }

  render() {
    const { event } = this.props;
    return (
      <Fragment>
        {this.renderHeader(event.name, event.position, SchoolIcon)}
        {this.renderMainContent(this.renderOverview())}
        {this.renderFooter()}
      </Fragment>
    );
  }
}

export default SchoolEvent;
