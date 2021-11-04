import { Typography, makeStyles } from '@material-ui/core';
import GithubIcon from '../../resources/images/icons/github.svg';
import LinkedInIcon from '../../resources/images/icons/linkedin.svg';
import React from 'react';
import StackOverflowIcon from '../../resources/images/icons/stackoverflow.svg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
    [theme.breakpoints.down('xs')]: {
      background: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
    },
  },
  content: {
    flex: 1,
    display: 'flex',
    maxWidth: theme.body.maxWidth,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  leftContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '350px',
  },
  avatar: {
    height: '250px',
    width: '250px',
  },
  socialIcon: {
    height: '56px',
    width: '56px',
    margin: '.5rem',
    fill: theme.palette.primary.main,
  },
  rightContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    verticalAlign: 'middle',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: theme.spacing(1, 2),
    },
  },
  myName: {
    ...theme.typography.h3,
    fontSize: '3rem !important',
    marginBottom: theme.spacing(1),
    fontWeight: 'bold !important',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.leftContent}>
          <img className={classes.avatar} src="images/kevinFace.png" alt="Kevin Henderson" />
          <span className={classes.socialIcons}>
            <a href="//github.com/kevhender" target="_blank" rel="noopener noreferrer">
              <GithubIcon className={classes.socialIcon} />
            </a>
            <a href="//stackoverflow.com/users/2072693/kevhender" target="_blank" rel="noopener noreferrer">
              <StackOverflowIcon className={classes.socialIcon} />
            </a>
            <a href="//linkedin.com/in/kevhender" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className={classes.socialIcon} />
            </a>
          </span>
        </div>
        <div className={classes.rightContent}>
          <Typography className={classes.myName}>
            Kevin Henderson
          </Typography>
          <Typography variant="h5">
            Senior UX Engineer
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Header;
