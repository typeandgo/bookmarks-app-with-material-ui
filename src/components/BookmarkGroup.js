import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Bookmark from './Bookmark';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
});

class BookmarkGroup extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.paper }>
        <Typography variant='h6' component='h2' gutterBottom>
            Group Title
            <IconButton>
              <EditIcon fontSize="small" />
            </IconButton>
        </Typography>

        <Grid container spacing={ 24 }>

          <Grid item lg={ 2 }>
            <Bookmark />
          </Grid>

          <Grid item lg={ 2 }>
            <Bookmark />
          </Grid>

          <Grid item lg={ 2 }>
            <Bookmark />
          </Grid>

          <Grid item lg={ 2 }>
            <Bookmark />
          </Grid>

          <Grid item lg={ 2 }>
            <Bookmark />
          </Grid>

          <Grid item lg={ 2 }>
            <Bookmark />
          </Grid>

        </Grid>
      </div>
    )
  }
}

BookmarkGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookmarkGroup);
