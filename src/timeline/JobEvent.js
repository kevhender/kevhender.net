import React, { Component, Fragment } from 'react';
import CardContent from '@material-ui/core/CardContent';
import ComputerIcon from '@material-ui/icons/Computer';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import asTimelineContent from './asTimelineContent';

@asTimelineContent
class JobEvent extends Component {
  static propTypes = {
    event: MobxPropTypes.observableObject.isRequired,
  };

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
        {this.renderFooter(event.details.length ? (
          <CardContent>
            <ul>
              {event.details.map(detail => <li><Typography variant="body2">{detail}</Typography></li>)}
            </ul>
          </CardContent>
        ) : null)}
      </Fragment>
    );
  }
}

export default JobEvent;
