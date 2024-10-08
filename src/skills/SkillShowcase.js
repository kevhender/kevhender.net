import {
  Accordion, AccordionDetails, AccordionSummary, Typography,
} from '@material-ui/core';
import { PropTypes as MobxPropTypes, inject } from 'mobx-react';
import React, { Component } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import SkillDisplay from './SkillDisplay';
import withStyles from '@material-ui/core/styles/withStyles';

@withStyles(theme => ({
  root: {
    display: 'block',
    padding: theme.spacing(0, 2),
  },
  categoryHeader: {
    'maxWidth': theme.body.maxWidth,
    'flex': 1,
    'backgroundColor': theme.palette.primary.light,
    '& svg': {
      color: theme.palette.primary.main,
    },
  },
  categoryName: {
    ...theme.typography.h6,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  categoryContent: {
    maxWidth: theme.body.maxWidth,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}))
@inject('app')
class SkillShowcase extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
    app: MobxPropTypes.observableObject.isRequired,
  };

  static defaultProps = {
    classes: {},
  };

  render() {
    const { classes, app } = this.props;
    const { sortedSkillCategories } = app;
    return (
      <div className={classes.root}>
        {
          sortedSkillCategories.map(skillCategory => {
            const sortedSkills = app.getSortedSkills(skillCategory);
            return (
              <Accordion
                key={skillCategory}
                className={classes.category}
                defaultExpanded={skillCategory.relevance >= 0.6}
              >
                <AccordionSummary
                  className={classes.categoryHeader}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography className={classes.categoryName}>
                    {skillCategory.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.categoryContent}>
                  {sortedSkills.map(skill => (
                    <SkillDisplay
                      key={skill}
                      skill={skill}
                    />
                  ))}
                </AccordionDetails>
              </Accordion>
            );
          })
        }
      </div>
    );
  }
}

export default SkillShowcase;
