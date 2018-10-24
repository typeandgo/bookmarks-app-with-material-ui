import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from './Header';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey[200],
  },
});

class Layout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={ classes.root }>
        <Header />

        { this.props.children }
      </div>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
