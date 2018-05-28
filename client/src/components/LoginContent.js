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
    width: 200,
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


class LoginContent extends Component {
	 state = {
    name: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
  	const { classes } = this.props;

    return (
      <div>
        <h1>Login</h1>
        <form className={classes.container} noValidate autoComplete="off">
        	<TextField
	          id="name"
	          label="Name"
	          className={classes.textField}
	          value={this.state.name}
	          onChange={this.handleChange('name')}
	          margin="normal"
        	/>
	        <TextField
	          id="password-input"
	          label="Password"
	          className={classes.textField}
	          type="password"
	          autoComplete="current-password"
	          margin="normal"
	        />
	        <div className={classes.buttonContainer}>
		        <Button variant="raised" color="primary" className={classes.button}>
		        	Sign In
		        </Button>
		        <Button variant="raised" color="secondary" className={classes.button}>
		        	Sign Up
		        </Button>
	        </div>
        </form>
      </div>
    );
  }
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginContent);