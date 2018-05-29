import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import ApplicationsList from '../containers/ApplicationsList';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  applicationHeader: {
  	marginBottom: '5px',
  	display: 'flex',
  	justifyContent: 'center',
  	alignItems: 'center',
  },
});


class ApplicationContent extends Component {
	 state = {
    open: false,
  };

  handleClickOpenNewApplicationForm = () => {
  	this.setState({
  		open: true
  	})
  }

  render() {

  	const { classes } = this.props;

    return (
      <div>
      	<div className={classes.applicationHeader}>
      		<TextField
		        className={classes.margin}
		        id="input-with-icon-textfield"
		        InputProps={{
		          startAdornment: (
		            <InputAdornment position="start">
		              <Search />
		            </InputAdornment>
		          ),
		        }}
		      />
		      <Button 
		      	variant="fab"
		        mini
		        color="primary" 
		        aria-label="add"
		        onClick={this.handleClickOpenNewApplicationForm}
		      >
		        <AddIcon />
		      </Button>
      	</div>
      	<ApplicationsList 
      		newApplicationForm={this.state.open}
      	/>
      </div>
    );
  }
}


ApplicationContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicationContent);