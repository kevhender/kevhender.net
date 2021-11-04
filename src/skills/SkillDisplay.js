import { alpha, makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing(1, 0),
    alignItems: 'center',
    flex: `0 0 calc(50% - ${theme.spacing(2)}px)`,
    [theme.breakpoints.down('xs')]: {
      flex: '0 0 100%',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'inherit',
    },
  },
  skillName: {
    ...theme.typography.h6,
    color: theme.palette.primary.main,
    flex: '0 0 120px',
    marginRight: `${theme.spacing(2)} !important`,
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      flex: '0',
      textAlign: 'left',
    },
  },
  progressRoot: {
    height: `calc(${theme.spacing(2)}px + 6px)`,
    borderRadius: '3px',
    backgroundColor: alpha(theme.palette.secondary.light, 0.5),
    boxShadow: `0 0 2px 2px ${theme.palette.primary.main}`,
    flex: '1 0 300px',
    [theme.breakpoints.down('sm')]: {
      flex: `0 0 calc(${theme.spacing(2)}px + 6px)`,
    },
  },
  progressBar: {
    backgroundColor: alpha(theme.palette.secondary.main, 0.7),
    margin: theme.spacing(0.375, 0),
  },
}));

function SkillDisplay({ skill }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.skillName}>
        {skill.name}
      </Typography>
      <LinearProgress
        variant="determinate"
        color="secondary"
        value={skill.competence * 100}
        classes={{
          root: classes.progressRoot,
          bar: classes.progressBar,
        }}
      />
    </div>
  );
}

SkillDisplay.propTypes = {
  skill: PropTypes.oneOfType([PropTypes.object, MobxPropTypes.observableObject]).isRequired,
};

export default SkillDisplay;
