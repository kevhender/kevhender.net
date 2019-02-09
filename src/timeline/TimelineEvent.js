import { PropTypes as MobxPropTypes, inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import Card from '@material-ui/core/es/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography/Typography';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

/**
 * Displays a Timeline event
 */
@withStyles((() => ({
  root: {

  },
})))
@inject('timeline')
@observer
class TimelineEvent extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    className: PropTypes.string,
    timeline: MobxPropTypes.observableObject.isRequired,
    event: MobxPropTypes.observableObject.isRequired,
  };

  static defaultProps = {
    classes: {},
    className: '',
  };

  onSelectEvent = event => {
    this.props.timeline.selectEvent(event);
  };

  render() {
    const {
      classes,
      className,
      event,
    } = this.props;

    return (
      <Card
        className={classnames(className, classes.root)}
        key={event.name}
        onMouseOver={() => this.onSelectEvent(event)}
        onFocus={() => this.onSelectEvent(event)}
        onMouseOut={() => this.onSelectEvent(null)}
        onBlur={() => this.onSelectEvent(null)}
      >
        <CardContent>
          <Typography variant="h6">
            {event.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default TimelineEvent;
