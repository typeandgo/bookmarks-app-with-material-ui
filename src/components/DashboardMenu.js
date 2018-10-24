import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontWeight: 500
  },
  settingsIcon: {
    fontSize: '21px',
  },
});

class DashboardMenu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Button size="large" color="secondary" className={classes.button} variant="contained">
          Dashboard 1
        </Button>

        <Button color="primary" className={classes.button} variant="contained">
          Dashboard 2
        </Button>

        <Button color="primary" className={classes.button} variant="contained">
          Dashboard 3
        </Button>

        <Button color="primary" className={classes.button} variant="contained">
          Dashboard 4
        </Button>

        <Button color="primary" className={classes.button} variant="contained">
          Dashboard 5
        </Button>

        <Tooltip title="Add New Dashboard">
          <Button color="default" variant="contained" size="small" className={classes.button}>
            <AddIcon className={ classes.settingsIcon } />
          </Button>
        </Tooltip>    
      </div>
    )
  }
}

DashboardMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardMenu);