import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: 15
  }
}));

const Confirm = ({
  values: { firstName, lastName, email, occupation, city, bio },
  nextStep,
  prevStep
}) => {
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
      <List>
        <ListItem>
          <ListItemText primary='First Name' secondary={firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Last Name' secondary={lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Email' secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Occupation' secondary={occupation} />
        </ListItem>
        <ListItem>
          <ListItemText primary='City' secondary={city} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Bio' secondary={bio} />
        </ListItem>
      </List>

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
        Confirm
      </Button>
    </div>
  );
};

export default Confirm;
