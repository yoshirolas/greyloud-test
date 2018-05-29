import React, { Component } from 'react';
import PropTypes from 'prop-types';
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


class NewApllicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationTitle: '',
      applicationText: '',
      active: this.props.active,
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    console.log(this.props.active)
    const { classes } = this.props;
    if (this.props.active) {
      return (
        <div>
          <h2>New application</h2>
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

export default withStyles(styles)(NewApllicationForm);