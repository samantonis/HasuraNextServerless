import Link from "next/link";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_USER = gql`
  query {
    email @client
  }
`;
const Header = () => (
  <Query query={GET_USER}>
    {({ data, loading }) => {
      return loading ? (
        "Loading..."
      ) : (
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              {(!data || !data.email) && (
                <>
                  <li>
                    <Link href="/login">
                      <a>Login</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/signup">
                      <a>Signup</a>
                    </Link>
                  </li>
                </>
              )}
              {data &&
                data.email && (
                  <li>
                    <button>logout {data.email}</button>
                  </li>
                )}
            </ul>
          </nav>
          <style jsx>{`
            ul {
              display: flex;
              list-style: none;
              margin-left: 0;
              padding-left: 0;
            }

            li {
              margin-right: 1rem;
            }

            li:first-child {
              margin-left: auto;
            }

            a {
              color: #fff;
              text-decoration: none;
            }

            header {
              padding: 0.2rem;
              color: #fff;
              background-color: #333;
            }
          `}</style>
        </header>
      );
    }}
  </Query>
);

export default Header;
