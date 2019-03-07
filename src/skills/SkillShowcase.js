import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  withStyles,
} from '@material-ui/core';
import { PropTypes as MobxPropTypes, inject } from 'mobx-react';
import React, { Component } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import SkillDisplay from './SkillDisplay';

@withStyles(theme => ({
  root: {
    display: 'block',
    padding: `0 ${theme.spacing.unit * 2}px`,
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
  skill: {
    flex: `0 0 calc(50% - ${theme.spacing.unit * 2}px)`,
    [theme.breakpoints.down('xs')]: {
      flex: '0 0 100%',
    },
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
              <ExpansionPanel
                key={skillCategory}
                className={classes.category}
                defaultExpanded={skillCategory.relevance >= 0.6}
              >
                <ExpansionPanelSummary
                  className={classes.categoryHeader}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography className={classes.categoryName}>
                    {skillCategory.name}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.categoryContent}>
                  {sortedSkills.map(skill => (
                    <SkillDisplay
                      key={skill}
                      classes={{ root: classes.skill }}
                      skill={skill}
                    />
                  ))}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })
        }
      </div>
    );
  }
}

export default SkillShowcase;
