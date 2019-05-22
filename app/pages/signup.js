import { Component } from "react";
import { Auth } from "aws-amplify";
import Layout from "../components/layout";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone_number: "",
    authCode: ""
  };

  static getInitialProps({ req }) {
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

    const apiUrl = process.browser
      ? `${protocol}://${window.location.host}/api/register`
      : `${protocol}://${req.headers.host}/api/register`;

    return { apiUrl };
  }

  onChange = (key, value) => {
    this.setState({ [key]: value });
  };

  signUp = () => {
    const { username, password, email, phone_number } = this.state;
    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number
      }
    })
      .then(() => console.log("successful sign up!"))
      .catch(err => console.log("error signing up: ", err));
  };

  confirmSignUp = () => {
    Auth.confirmSignUp(this.state.username, this.state.authCode)
      .then(console.log("successful confirm sign up!"))
      .catch(err => console.log("error confirming signing up: ", err));
  };

  render() {
    return (
      <Layout>
        <input
          placeholder="Username"
          onChange={evt => this.onChange("username", evt.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={evt => this.onChange("password", evt.target.value)}
        />
        <input
          placeholder="Email"
          onChange={evt => this.onChange("email", evt.target.value)}
        />
        <input
          placeholder="Phone Number"
          onChange={evt => this.onChange("phone_number", evt.target.value)}
        />
        <input
          placeholder="Authentication Code"
          onChange={evt => this.onChange("authCode", evt.target.value)}
        />
        <div>
          <button onClick={this.confirmSignUp}>Confirm Sign Up</button>
          <button onClick={this.signUp}>Sign Up</button>
        </div>
      </Layout>
    );
  }
}

export default Signup;
