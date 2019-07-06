import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleInputChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleInputChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButtom type="submit">Sign In</CustomButtom>
            <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
