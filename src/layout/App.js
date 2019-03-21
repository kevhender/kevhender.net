import React, { Component } from 'react';
import ContactForm from '../contact/ContactForm';
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import SkillShowcase from '../skills/SkillShowcase';
import Timeline from '../timeline/Timeline';
import { Typography } from '@material-ui/core';
import VisibilitySensor from 'react-visibility-sensor';
import { fade } from '@material-ui/core/styles/colorManipulator';
import withStyles from '@material-ui/core/styles/withStyles';

@withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pageSection: {
    width: '100%',
    maxWidth: theme.body.maxWidth,
  },
  sectionHeader: {
    ...theme.typography.h4,
    fontWeight: 'bold',
    margin: `${theme.spacing.unit * 7}px 0 ${theme.spacing.unit * 3}px 0`,
    padding: theme.spacing.unit,
    background: `linear-gradient(${fade(theme.palette.primary.light, 0.3)}, ${fade(theme.palette.secondary.light, 0.3)})`,
    borderBottom: `5px solid ${theme.palette.primary.main}`,
  },
  bottomSpacer: {
    height: theme.spacing.unit * 10,
  },
}))
class Root extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
  };

  static defaultProps = {
    classes: {},
  };

  state = {
    headerVisible: true,
    skillsVisible: false,
    timelineVisible: false,
    contactVisible: false,
    selectedSection: null,
  };

  setVisible(section, isVisible) {
    this.setState({
      [`${section}Visible`]: isVisible,
    }, () => {
      if (this.state.headerVisible) {
        this.setState({
          selectedSection: null,
        });
      } else if (this.state.skillsVisible) {
        this.setState({
          selectedSection: 'skills',
        });
      } else if (this.state.timelineVisible) {
        this.setState({
          selectedSection: 'timeline',
        });
      } else if (this.state.contactVisible) {
        this.setState({
          selectedSection: 'contact',
        });
      } else {
        this.setState({
          selectedSection: null,
        });
      }
    });
  }

  render() {
    const { classes } = this.props;
    const visSensorProps = {
      partialVisibility: true,
      offset: { top: 100 },
    };
    return (
      <div className={classes.root}>
        <VisibilitySensor
          onChange={isVis => this.setVisible('header', isVis)}
          partialVisibility
        >
          <Header />
        </VisibilitySensor>
        <NavBar visible={this.state.selectedSection !== null} selected={this.state.selectedSection} />
        <VisibilitySensor
          onChange={isVis => this.setVisible('skills', isVis)}
          {...visSensorProps}
        >
          <div className={classes.pageSection} id="skills">
            <Typography className={classes.sectionHeader}>Skills</Typography>
            <SkillShowcase />
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={isVis => this.setVisible('timeline', isVis)}
          {...visSensorProps}
        >
          <div className={classes.pageSection} id="timeline">
            <Typography className={classes.sectionHeader}>Timeline</Typography>
            <Timeline />
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={isVis => this.setVisible('contact', isVis)}
          {...visSensorProps}
        >
          <div className={classes.pageSection} id="contact">
            <Typography className={classes.sectionHeader}>Contact Me</Typography>
            <ContactForm />
          </div>
        </VisibilitySensor>
        <div className={classes.bottomSpacer} />
        <Footer />
      </div>
    );
  }
}
export default Root;
