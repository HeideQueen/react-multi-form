import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const Success = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Thank you for your submission!</h1>
      <p>An email has been sent with further instructions</p>
    </div>
  );
};

export default Success;
