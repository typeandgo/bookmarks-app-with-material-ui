import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

class Settings extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '200px'}}>
        <h1>Settings</h1>
        <IconButton component={ Link } to="/" color="inherit" aria-label="Home">
          <HomeIcon />
        </IconButton>
      </div>
    )
  }
}

export default Settings;
