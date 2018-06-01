import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { asyncAddApplication } from '../actions/appActions';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '80%',
  },
  buttonContainer: {
    display: 'flex',
  },
  button: {
    margin: '5px',
    width: '50px',
    textTransform: 'none',
  }
});


class NewApllicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationTitle: '',
      applicationText: '',
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleAddApplication = () => {
    if (this.state.applicationTitle && this.state.applicationText) {
      this.props.dispatch(
        asyncAddApplication(this.props.user, this.state.applicationTitle, this.state.applicationText)
      );
      this.setState({
        applicationTitle: '',
        applicationText: '',
      });
    }
  }

  render() {
    const { classes } = this.props;
    if (this.props.active) {
      return (
        <div>
          { this.props.user 
            ? <h2>New application</h2> 
            : <h2>You must sign in to apply</h2> 
          }
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              label="Title"
              className={classes.textField}
              value={this.state.applicationTitle}
              onChange={this.handleChange('applicationTitle')}
              margin="normal"
            />
            <TextField
              label="Text"
              className={classes.textField}
              multiline
              rowsMax="5"
              value={this.state.applicationText}
              onChange={this.handleChange('applicationText')}
              margin="normal"
            />

            <div className={classes.buttonContainer}>
              <Button 
                variant="raised" 
                color="primary" 
                className={classes.button}
                onClick={this.handleAddApplication}
                disabled={this.props.user && this.state.applicationTitle && this.state.applicationText ? false : true }
              >
                Apply
              </Button>
            </div>
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}


NewApllicationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(NewApllicationForm);