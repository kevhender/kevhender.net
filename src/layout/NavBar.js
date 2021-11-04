import GithubIcon from '../../resources/images/icons/github.svg';
import LinkedInIcon from '../../resources/images/icons/linkedin.svg';
import PropTypes from 'prop-types';
import React from 'react';
import StackOverflowIcon from '../../resources/images/icons/stackoverflow.svg';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const AVATAR_HEIGHT = 40;

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    width: '100%',
    transition: 'top .3s ease-out',
  },
  rootHidden: {
    top: `calc(-${AVATAR_HEIGHT}px - ${theme.spacing(3)}px)`,
  },
  navBar: {
    backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center',
  },
  navContent: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: theme.body.maxWidth,
  },
  avatar: {
    height: `${AVATAR_HEIGHT}px`,
    width: `${AVATAR_HEIGHT}px`,
    marginRight: theme.spacing(1),
  },
  navLinkWrap: {
    'paddingTop': theme.spacing(0.6),
    '&:after': {
      content: '""',
      backgroundColor: theme.palette.primary.contrastText,
      width: '100%',
      height: theme.spacing(0.6),
      display: 'block',
      transition: 'all .2s ease-in-out 0s',
      visibility: 'hidden',
      transform: 'scaleX(0)',
    },
    '&:hover::after': {
      visibility: 'visible',
      transform: 'scaleX(1)',
    },
  },
  navLinkWrapActive: {
    '&:after': {
      visibility: 'visible',
      transform: 'scaleX(1)',
    },
  },
  navLink: {
    ...theme.typography.body1,
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.03rem',

  },
  homeLink: {
    fontSize: '1.2rem',
  },
  homeLinkText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  socialIcon: {
    height: '32px',
    width: '32px',
    marginLeft: theme.spacing(1.5),
    fill: theme.palette.primary.contrastText,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  spacer: {
    height: theme.spacing(1),
    backgroundImage: `linear-gradient(${theme.palette.background.default}, transparent)`,
  },
}));

function NavBar({ visible, selected }) {
  const classes = useStyles();
  return (
    <header className={classnames(classes.root, { [classes.rootHidden]: !visible })}>
      <div className={classes.navBar}>
        <div className={classes.navContent}>
          <a className={classnames(classes.navLink, classes.homeLink)} href="/#">
            <img className={classes.avatar} src="images/kevinFace.png" alt="Kevin Henderson" />
            <span className={classes.homeLinkText}>Kevin Henderson</span>
          </a>
          <span className={classnames(classes.navLinkWrap, { [classes.navLinkWrapActive]: selected === 'skills' })}>
            <a className={classes.navLink} href="#skills">Skills</a>
          </span>
          <span className={classnames(classes.navLinkWrap, { [classes.navLinkWrapActive]: selected === 'timeline' })}>
            <a className={classes.navLink} href="#timeline">Timeline</a>
          </span>
          <span className={classnames(classes.navLinkWrap, { [classes.navLinkWrapActive]: selected === 'contact' })}>
            <a className={classes.navLink} href="#contact">Contact</a>
          </span>
          <span>
            <a href="//www.github.com/kevhender">
              <GithubIcon className={classes.socialIcon} />
            </a>
            <a href="//stackoverflow.com/users/2072693/kevhender">
              <StackOverflowIcon className={classes.socialIcon} />
            </a>
            <a href="//www.linkedin.com/in/kevhender">
              <LinkedInIcon className={classes.socialIcon} />
            </a>
          </span>
        </div>
      </div>
      <div className={classes.spacer} />
    </header>
  );
}

NavBar.propTypes = {
  visible: PropTypes.bool.isRequired,
  selected: PropTypes.string,
};

NavBar.defaultProps = {
  selected: null,
};

export default NavBar;
