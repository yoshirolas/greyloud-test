import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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
  applicationBtnFormOpen: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  applicationBtnFormClose: {
    transform: 'rotate(45deg)',
  }
});


class ApplicationContent extends Component {
	state = {
    applicationFormOpen: false,
  };

  handleOpenNewApplicationForm = () => {
  	this.setState({
  		applicationFormOpen: !this.state.applicationFormOpen
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
		        onClick={this.handleOpenNewApplicationForm}
            className={classnames(classes.applicationBtnFormOpen, {
              [classes.applicationBtnFormClose]: this.state.applicationFormOpen,
            })}
		      >
		        <AddIcon/>
		      </Button>
      	</div>
      	<ApplicationsList 
      		newApplicationForm={this.state.applicationFormOpen}
      	/>
      </div>
    );
  }
}


ApplicationContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicationContent);