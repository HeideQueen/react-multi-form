import React, { Component } from 'react';

import NavBar from '../navbar/navbar.component';
import UserDetails from '../user-details/user-details.component';
import PersonalDetails from '../personal-details/personal-details.component';
import Confirm from '../confirm/confirm.component';
import Success from '../success/success-component';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      values: {
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
      }
    };
  }

  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1
    });
  };

  handleChange = event => {
    const { values } = this.state;

    this.setState({
      values: { ...values, [event.target.name]: event.target.value }
    });
  };

  render() {
    const { step } = this.state;
    const { values } = this.state;

    switch (step) {
      case 1:
        return (
          <div>
            <NavBar title='Enter User Details' />
            <UserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <NavBar title='Enter Personal Details' />
            <PersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <NavBar title='Confirm Form Submission' />
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <NavBar title='Thanks' />
            <Success />
          </div>
        );
      default:
        return <div>Loading...</div>;
    }
  }
}

export default UserForm;
