import Router from 'next/router'
import { Component } from "react";
import { Auth } from "aws-amplify";
import Layout from "../components/layout";

class Signup extends Component {
  state = {
    username: "",
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

  confirmSignUp = () => {
    Auth.confirmSignUp(this.state.username, this.state.authCode)
      .then(Router.push("/"))
      .catch(err => console.log("error confirming signing up: ", err));
  };

  render() {
    return (
	    <Layout>
		    <p>Please use the verification code that was emailed to you to confirm your signup</p>
        <input
          placeholder="Username"
          onChange={evt => this.onChange("username", evt.target.value)}
        />
	      <input
		      placeholder="Authentication Code"
		      onChange={evt => this.onChange("authCode", evt.target.value)}
	      />
	      <div>
		      <button onClick={this.confirmSignUp}>Confirm Sign Up</button>

	      </div>
      </Layout>
    );
  }
}

export default Signup;
