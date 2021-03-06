import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { 
  cleanErrMessage, 
  asyncGetApplicationsList, 
  signOut, 
  dropCurrentApplicationsList 
} from '../actions/appActions';

import MainContent from '../components/MainContent';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const drawerWidth = 240;

const styles = theme => ({
  rootContainer: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'fixed',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  appBarMainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  appBarLeftContainer: {
    width: '50%',
    heiht: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  appBarRightContainer: {
    width: '50%',
    heiht: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  menuButton: {
    color: 'white'
  },
});

class App extends React.Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleCleanPreviousErrMessage = () => {
    this.props.dispatch(cleanErrMessage());
  }

  handleGetUsersApplications = () => {
    this.handleDrawerToggle();
    if (this.props.user) {
      this.props.dispatch(
        asyncGetApplicationsList(this.props.user)
      );
    }
  }


  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogOut = () => {
    this.handleClose();
    this.props.dispatch(signOut());
    this.props.dispatch(dropCurrentApplicationsList());
  }

  render() {
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const drawer = (
      <div className={classes.toolbar}>
        <List component="nav">
          <Divider />
          <NavLink to="/" onClick={this.handleDrawerToggle}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
          <Divider />
          <NavLink to="/news" onClick={this.handleDrawerToggle}>
            <ListItem button>
              <ListItemText primary="News" />
            </ListItem>
          </NavLink>
          <Divider />
          <NavLink to="/about" onClick={this.handleDrawerToggle}>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
          </NavLink>
          <Divider />
          <NavLink to="/contacts" onClick={this.handleDrawerToggle}>
            <ListItem button>
              <ListItemText primary="Contacts" />
            </ListItem>
          </NavLink>
          <Divider />
          <NavLink to="/application" onClick={this.handleGetUsersApplications}>
            <ListItem button>
              <ListItemText primary="Applications" />
            </ListItem>
          </NavLink>
          <Divider />
        </List>
      </div>
    );

    return (
      <div className={classes.rootContainer}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.appBarMainContainer}>
            <div className={classes.appBarLeftContainer}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Greyloud test
              </Typography>
            </div>
            <div className={classes.appBarRightContainer}>

              { this.props.user
                ? <div className={classes.loginContainer}>
                    <Typography variant="title" color="inherit" noWrap>
                      {this.props.user}
                    </Typography>

                      <IconButton
                        aria-owns={open ? 'menu-appbar112' : null}
                        aria-haspopup="true"
                        color="inherit"
                        className={classes.menuButton}
                        onClick={this.handleMenu}
                      >
                        <AccountCircle />
                      </IconButton>

                    <Menu
                      id="menu-appbar112"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={this.handleClose}
                    >
                      <NavLink to="/profile">
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      </NavLink>
                      <NavLink to="/">
                        <MenuItem onClick={this.handleLogOut}>Log Out</MenuItem>
                      </NavLink>
                    </Menu>
                  </div>

                : <div className={classes.loginContainer}>
                    <NavLink to="/login">
                      <Button 
                        color="inherit" 
                        className={classes.menuButton}
                        onClick={this.handleCleanPreviousErrMessage}
                      >
                        Login
                      </Button>
                    </NavLink>
                  </div>
              }
            </div>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <MainContent 
          location={this.props.location} 
          className={classes.loginContainer}
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps)
)(App);