import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DashboardMenu from './DashboardMenu';
import BookmarkGroup from './BookmarkGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  fixed: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit,
    fontWeight: 500
  },
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ padding: '0 30px 100px 30px' }}>

        <DashboardMenu />

        <BookmarkGroup />

        <BookmarkGroup />

        { this.props.children }


        <div style={{ textAlign: 'center' }}>
          <Tooltip title="Add New Group">
            <Button size="large" color="secondary" className={classes.button} variant="contained">
              <AddIcon /> &nbsp;
              Add New Group
            </Button>
          </Tooltip>
        </div>        

        <Tooltip title="Add New Bookmark">
          <Button variant="fab" color="secondary" className={ classes.fixed }>
            <AddIcon />
          </Button>
        </Tooltip>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
