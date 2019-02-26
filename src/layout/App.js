import React, { Component, Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import Timeline from '../timeline/Timeline';
import VisibilitySensor from 'react-visibility-sensor';
import withStyles from '@material-ui/core/styles/withStyles';

@withStyles(theme => ({
  anchorTag: {
    position: 'absolute',
  },
  timeline: {
    marginTop: theme.spacing.unit * 3,
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
      offset: { top: 400 },
    };
    return (
      <Fragment>
        <VisibilitySensor
          onChange={isVis => this.setVisible('header', isVis)}
          partialVisibility
        >
          <Header />
        </VisibilitySensor>
        <NavBar visible={this.state.selectedSection !== null} selected={this.state.selectedSection} />
        <span
          className={classes.anchorTag}
          id="skills"
        />
        <VisibilitySensor
          onChange={isVis => this.setVisible('skills', isVis)}
          {...visSensorProps}
        />
        <span
          className={classes.anchorTag}
          id="timeline"
        />
        <VisibilitySensor
          onChange={isVis => this.setVisible('timeline', isVis)}
          {...visSensorProps}
        >
          <div className={classes.timeline}>
            <Timeline />
          </div>
        </VisibilitySensor>
        <span
          className={classes.anchorTag}
          id="contact"
        />
        <VisibilitySensor
          onChange={isVis => this.setVisible('contact', isVis)}
          {...visSensorProps}
        />
        <Footer />
      </Fragment>
    );
  }
}
export default Root;
