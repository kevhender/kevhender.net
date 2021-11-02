import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import identity from 'lodash/identity';
import validateEmail from '../util/validateEmail';
import withStyles from '@material-ui/core/styles/withStyles';

@withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 2),
  },
  nameField: {
    maxWidth: '400px',
  },
  emailField: {
    maxWidth: '400px',
  },
  subjectField: {
    maxWidth: '600px',
  },
  sendButton: {
    width: '250px',
    marginTop: theme.spacing(2),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  preformattedError: {
    whiteSpace: 'unset',
    border: '1px solid #999',
    backgroundColor: '#eee',
    padding: theme.spacing(2),
  },
}))
class ContactForm extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string),
  };

  static defaultProps = {
    classes: {},
  };

  state = {
    errors: {},
    name: '',
    email: '',
    subject: '',
    message: '',
    submitted: false,
    isSending: false,
    doneSending: false,
    confirmationMessage: null,
    errorMessage: null,
  };

  getValidationState(submitted = false) {
    const { state } = this;
    const isChanged = field => state[`${field}Changed`] || submitted;
    return {
      errors: {
        name: isChanged('name') && !state.name.trim(),
        email: isChanged('email') && !validateEmail(state.email.trim()),
        subject: isChanged('subject') && !state.subject.trim(),
        message: isChanged('message') && !state.message.trim(),
      },
      submitted,
    };
  }

  sendEmail = () => {
    const { state } = this;
    const validationState = this.getValidationState(true);
    if (Object.values(validationState.errors).some(identity)) {
      this.setState(validationState);
    } else {
      validationState.isSending = true;
      this.setState(validationState, async () => {
        const body = {
          from: `${state.name} <${state.email}>`,
          subject: state.subject,
          text: state.message,
        };

        const result = await fetch('/sendMessage', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res => res.json());

        this.setState({
          isSending: false,
          doneSending: true,
          confirmationMessage: result.success ? 'Your message has been sent! I will get back to you as soon as I can!' : null,
          errorMessage: result.success ? null : (
            <span>
              Sorry, it looks like there was a problem sending your message:
              <pre className={this.props.classes.preformattedError}>{result.error}</pre>
              {'Try sending me a message on '}
              <a href="https://www.linkedin.com/in/kevhender" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {' instead.'}
            </span>
          ),
        });
      });
    }
  };

  handleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value,
    }, () => {
      this.setState(this.getValidationState());
    });
  };

  render() {
    const { classes } = this.props;
    const { state } = this;

    return (
      <Fragment>
        <div className={classes.root}>
          <TextField
            required
            error={state.errors.name}
            label="Your Name"
            className={classes.nameField}
            value={state.name}
            onChange={this.handleChange('name')}
            autoComplete="name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            error={state.errors.email}
            label="Your Email Address"
            className={classes.emailField}
            value={state.email}
            onChange={this.handleChange('email')}
            type="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            error={state.errors.subject}
            label="Subject"
            className={classes.subjectField}
            value={state.subject}
            onChange={this.handleChange('subject')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            error={state.errors.message}
            label="Message"
            multiline
            value={state.message}
            onChange={this.handleChange('message')}
            rows="15"
            rowsMax="15"
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.sendButton}
            onClick={this.sendEmail}
            disabled={state.isSending || this.state.doneSending}
          >
            {
              state.isSending ?
                <CircularProgress /> :
                (
                  <Fragment>
                    Send Message
                    <SendIcon className={classes.rightIcon}>send</SendIcon>
                  </Fragment>
                )
            }
          </Button>
        </div>
        <Dialog open={!!state.confirmationMessage || !!state.errorMessage}>
          <DialogContent>
            <DialogTitle>
              {state.errorMessage ? 'Uh-oh!' : 'Thanks!'}
            </DialogTitle>
            <DialogContentText>
              {state.confirmationMessage || state.errorMessage}
            </DialogContentText>
            <DialogActions>
              <Button
                color="primary"
                onClick={() => this.setState({ confirmationMessage: null, errorMessage: null })}
              >
                OK
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default ContactForm;
