import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: 15
  },
  field: {
    margin: 15
  }
}));

const UserDetails = ({ values, nextStep, handleChange }) => {
  const classes = useStyles();

  const nextForm = event => {
    event.preventDefault();
    nextStep();
  };

  return (
    <div className={classes.root}>
      <TextField
        label='First Name'
        name='firstName'
        onChange={event => handleChange(event)}
        defaultValue={values.firstName}
        className={classes.field}
      />

      <br />

      <TextField
        label='Last Name'
        name='lastName'
        onChange={event => handleChange(event)}
        defaultValue={values.lastName}
        className={classes.field}
      />

      <br />

      <TextField
        label='Email'
        name='email'
        onChange={event => handleChange(event)}
        defaultValue={values.email}
        className={classes.field}
      />

      <br />
      <Button variant='contained' className={classes.button} disabled>
        Back
      </Button>

      <Button
        color='primary'
        variant='contained'
        className={classes.button}
        onClick={event => nextForm(event)}
      >
        Continue
      </Button>
    </div>
  );
};

export default UserDetails;
