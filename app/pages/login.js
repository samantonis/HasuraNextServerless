import { Component } from "react";
import Layout from "../components/layout";
import { Auth } from "aws-amplify";
import { withApollo } from "react-apollo";
import Router from "next/router";

class Login extends Component {
  static getInitialProps({ req }) {
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

    const apiUrl = process.browser
      ? `${protocol}://${window.location.host}/api/login`
      : `${protocol}://${req.headers.host}/api/login`;

    return { apiUrl };
  }

  state = {
    username: "",
    password: ""
  };

  onChange = (key, value) => {
    this.setState({ [key]: value });
  };

  login = () => {
    Auth.signIn(this.state.username, this.state.password)
      .then(data => {
        this.props.client.writeData({
          data: { ...data.attributes }
        });
        Router.push("/");
      })
      .catch(err => console.log("error signing in! :", err));
  };

  render() {
    return (
      <Layout>
        <div className="login">
          <label htmlFor="username">Enter username</label>

          <input
            type="text"
            id="username"
            name="username"
            onChange={evt => this.onChange("username", evt.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            onChange={evt => this.onChange("password", evt.target.value)}
          />

          <button onClick={this.login}>Login</button>

          <p className={`error ${this.state.error && "show"}`}>
            {this.state.error && `Error: ${this.state.error}`}
          </p>
        </div>
      </Layout>
    );
  }
}

export default withApollo(Login);
