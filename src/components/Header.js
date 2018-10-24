import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const styles = {
  grow: {
    flexGrow: 1,
  }
};

class Header extends Component {
  render() {

    const { classes } = this.props;

    return (     
      <AppBar position="static" color="primary">
        <Toolbar>

          <BookmarkIcon />

          <Typography variant="h6" color="inherit" className={ classes.grow }>
            Bookmarks            
          </Typography>

          <IconButton component={ Link } to="/settings" color="inherit" aria-label="Settings">
            <SettingsIcon />
          </IconButton>
         
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
