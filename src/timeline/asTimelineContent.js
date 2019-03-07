import { PropTypes as MobxPropTypes, observer } from 'mobx-react';
import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CalendarIcon from '@material-ui/icons/Event';
import CardActions from '@material-ui/core/es/CardActions';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography/Typography';
import moment from 'moment';
import withStyles from '@material-ui/core/styles/withStyles';


/**
 * Displays a Timeline event
 */
export default function asTimelineContent(WrappedComponent) {
  @withStyles(theme => ({
    header: {
      backgroundColor: theme.palette.primary.light,
    },
    bold: {
      fontWeight: 'bold',
    },
    italic: {
      fontStyle: 'italic',
    },
    title: {
      ...theme.typography.h6,
      fontWeight: 'bold',
    },
    subheader: {
      ...theme.typography.body1,
      fontSize: '.9rem',
      fontStyle: 'italic',
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
      width: '55px',
      height: '55px',
    },
    avatarIcon: {
      fontSize: '32px',
    },
    actionBar: {
      backgroundColor: '#f5f5f5',
      justifyContent: 'space-between',
      padding: '4px',
    },
    dateRange: {
      display: 'flex',
      alignItems: 'center',
      fontStyle: 'italic',
      marginBottom: theme.spacing.unit * 2,
    },
    calendar: {
      color: theme.palette.primary.main,
      paddingRight: '4px',
    },
    showMore: {
      fontSize: '.9rem',
      borderRadius: '4px',
      padding: '6px 10px',
    },
    expand: {
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    logo: {
      maxWidth: 200,
      maxHeight: 30,
    },
  }))
  @observer
  class TimelineContent extends WrappedComponent {
    static propTypes = {
      classes: PropTypes.objectOf(PropTypes.string),
      event: MobxPropTypes.observableObject.isRequired,
    };

    static defaultProps = {
      classes: {},
    };

    state = {
      expanded: false,
    };

    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };

    renderHeader(title, subheader, AvatarIcon) {
      const { classes } = this.props;

      return (
        <CardHeader
          classes={{
            root: classes.header,
            title: classes.title,
            subheader: classes.subheader,
          }}
          avatar={(
            <Avatar aria-label="Event" className={classes.avatar}>
              <AvatarIcon className={classes.avatarIcon} />
            </Avatar>
          )}
          title={title}
          subheader={subheader}
        />
      );
    }

    renderMainContent(content) {
      const { classes, event } = this.props;

      return (
        <Fragment>
          <CardContent>
            <Typography variant="body2" className={classes.dateRange}>
              <CalendarIcon className={classes.calendar} />
              {moment(event.startDate).format('MMMM YYYY')}
              {' - '}
              {event.endDate < moment().startOf('month').toDate() ? moment(event.endDate).format('MMMM YYYY') : 'Present'}
            </Typography>
            {content}
          </CardContent>
        </Fragment>
      );
    }

    renderFooter(collapsibleContent) {
      const { classes, event } = this.props;
      const { expanded } = this.state;

      return (
        <Fragment>
          {collapsibleContent ? (
            <Collapse in={expanded}>
              {collapsibleContent}
            </Collapse>
          ) : null}
          <CardActions className={classes.actionBar}>
            {collapsibleContent ? (
              <IconButton
                className={classes.showMore}
                onClick={this.handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                {`Show ${expanded ? 'Less' : 'More'}`}
              </IconButton>
            ) : <div />}
            {event.logo && <img src={event.logo} alt={`${event.name} logo`} className={classes.logo} />}
          </CardActions>
        </Fragment>
      );
    }
  }

  return TimelineContent;
}
