import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  card: {
    position: 'relative'
  },
  buttonBase: {
    width: '100%',
    textAlign: 'left',
  },
  buttonMore: {
    position: 'absolute',
    bottom: '0',
    right: '0'
  }
});

class Bookmark extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <Card className={ classes.card }>
        <ButtonBase className={ classes.buttonBase }>
          <CardContent>
            
            <Typography variant="h6" component="h3">
              Bilyoner.com
            </Typography>
            
            <Typography component="p">
              Türkiye'nin Bahis Sitesi
            </Typography>

          </CardContent>          
        </ButtonBase>

        <CardActions>

          <IconButton 
            className={ classes.buttonMore }
            aria-owns={anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
          <MenuItem onClick={this.handleClose}>
            <ListItemIcon className={classes.icon}>
              <EditIcon />
            </ListItemIcon>
            <ListItemText inset primary="Edit" />
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <ListItemIcon className={classes.icon}>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText inset primary="Remove" />
          </MenuItem>
        </Menu>

        </CardActions>
        
    </Card>
    )
  }
}

Bookmark.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bookmark);