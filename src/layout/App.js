import React, { useEffect, useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import ContactForm from '../contact/ContactForm';
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';
import SkillShowcase from '../skills/SkillShowcase';
import Timeline from '../timeline/Timeline';
import Typography from '@material-ui/core/Typography';
import VisibilitySensor from 'react-visibility-sensor';

const useStyles = makeStyles(theme => ({
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
    margin: theme.spacing(7, 0, 3, 0),
    padding: theme.spacing(1),
    background: `linear-gradient(${alpha(theme.palette.primary.light, 0.3)}, ${alpha(theme.palette.secondary.light, 0.3)})`,
    borderBottom: `5px solid ${theme.palette.primary.main}`,
  },
  bottomSpacer: {
    height: theme.spacing(10),
  },
}));

function Root() {
  const classes = useStyles();
  const [visibility, setVisibility] = useState({
    header: true,
    skills: false,
    timeline: false,
    contact: false,
  });
  const [selectedSection, setSelectedSection] = useState(null);

  const setVisible = (section, isVisible) => {
    setVisibility({
      ...visibility,
      [section]: isVisible,
    });
  };

  useEffect(() => {
    if (visibility.header) {
      setSelectedSection(null);
    } else if (visibility.skills) {
      setSelectedSection('skills');
    } else if (visibility.timeline) {
      setSelectedSection('timeline');
    } else if (visibility.contact) {
      setSelectedSection('contact');
    } else {
      setSelectedSection(null);
    }
  }, [visibility]);

  const visSensorProps = {
    partialVisibility: true,
    offset: { top: 100 },
  };

  return (
    <div className={classes.root}>
      <VisibilitySensor
        onChange={isVis => setVisible('header', isVis)}
        partialVisibility
      >
        <Header />
      </VisibilitySensor>
      <NavBar visible={selectedSection !== null} selected={selectedSection} />
      <VisibilitySensor
        onChange={isVis => setVisible('skills', isVis)}
        {...visSensorProps}
      >
        <div className={classes.pageSection} id="skills">
          <Typography className={classes.sectionHeader}>Skills</Typography>
          <SkillShowcase />
        </div>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={isVis => setVisible('timeline', isVis)}
        {...visSensorProps}
      >
        <div className={classes.pageSection} id="timeline">
          <Typography className={classes.sectionHeader}>Timeline</Typography>
          <Timeline />
        </div>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={isVis => setVisible('contact', isVis)}
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
export default Root;
