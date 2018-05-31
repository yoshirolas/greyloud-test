import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { asyncSignUp, asyncSignIn, cleanMessage } from '../actions/appActions';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
	constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      message: this.props.message,
    }
  }

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
    this.props.dispatch(cleanMessage());
  };

  handleSignUp = () => {
    if (this.state.name && this.state.password) {
      this.props.dispatch(
        asyncSignUp(this.state.name, this.state.password)
      );
    }
  }

  handleSignIn = (event) => {
    if (this.state.name && this.state.password) {
  	  this.props.dispatch(
        asyncSignIn(this.state.name, this.state.password)
      );
    }
  }

  render() {
  	const { classes } = this.props;

    return (
      <div>
        { this.props.user 
          ? <h1>{`Welcome ${this.props.user}!`}</h1>
          : <h1>Login</h1>
        }
        { this.props.user 
          ? ''
          : <form className={classes.container} noValidate autoComplete="off">
            	<TextField
    	          id="username-input"
    	          label={this.props.message ? `${this.props.message}` : "Name"}
    	          className={classes.textField}
    	          value={this.state.name}
    	          onChange={this.handleChange('name')}
    	          autoComplete="current-user"
    	          margin="normal"
            	/>
    	        <TextField
    	          id="password-input"
    	          label="Password"
    	          className={classes.textField}
    	          type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
    	          autoComplete="current-password"
    	          margin="normal"
    	        />
    	        <div className={classes.buttonContainer}>
    		        <Button 
    			        variant="raised" 
    			        color="primary" 
    			        className={classes.button}
    			        onClick={this.handleSignIn}
    			      >
    		        	Sign In
    		        </Button>
    		        <Button 
    			        variant="raised" 
    			        color="secondary" 
    			        className={classes.button}
    			        onClick={this.handleSignUp}
    			      >
    		        	Sign Up
    		        </Button>
    	        </div>
            </form>
        }
      </div>
    );
  }
}

LoginContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
    message: state.loginReducer.message
  }
}

export default compose(
	withStyles(styles),
	connect(mapStateToProps)
)(LoginContent);