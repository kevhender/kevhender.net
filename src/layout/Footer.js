import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

@withStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginTop: '1rem',
    textAlign: 'center',
    padding: '.5rem',
    fontSize: '.8rem',
  },
}))
class Footer extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
  };

  static defaultProps = {
    classes: {},
  };

  render() {
    const { classes } = this.props;
    return (
      <Typography variant="body2" className={classes.root}>
        &copy;
        {`${new Date().getFullYear()} Kevin Henderson`}
      </Typography>
    );
  }
}

export default Footer;
