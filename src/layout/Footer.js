import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(2),
    textAlign: 'center',
    padding: theme.spacing(1),
    fontSize: '.8rem',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Typography variant="body2" className={classes.root}>
      &copy;
      {`${new Date().getFullYear()} Kevin Henderson`}
    </Typography>
  );
}

export default Footer;
