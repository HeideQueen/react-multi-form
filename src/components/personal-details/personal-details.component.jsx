import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useStyles } from './useStyles';

const PersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const classes = useStyles();

  const nextForm = event => {
    event.preventDefault();
    nextStep();
  };

  const prevForm = event => {
    event.preventDefault();
    prevStep();
  };

  return (
    <div className={classes.root}>
      <TextField
        label='Occupation'
        name='occupation'
        onChange={event => handleChange(event)}
        defaultValue={values.occupation}
        className={classes.field}
      />

      <br />

      <TextField
        label='City'
        name='city'
        onChange={event => handleChange(event)}
        defaultValue={values.city}
        className={classes.field}
      />
      <br />

      <TextField
        label='Bio'
        name='bio'
        onChange={event => handleChange(event)}
        defaultValue={values.bio}
        className={classes.field}
      />

      <br />

      <Button
        variant='contained'
        className={classes.button}
        onClick={event => prevForm(event)}
      >
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

export default PersonalDetails;
