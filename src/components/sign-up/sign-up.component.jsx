import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) return;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleInputChange}
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            required
          />
          <FormInput
            handleChange={this.handleInputChange}
            type="email"
            name="email"
            value={email}
            label="Email"
            required
          />
          <FormInput
            handleChange={this.handleInputChange}
            type="password"
            name="password"
            value={password}
            label="Password"
            required
          />
          <FormInput
            handleChange={this.handleInputChange}
            type="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            required
          />
          <CustomButtom type="submit">Sign Up</CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignUp;
