import React from 'react'
import Layout from '../components/layout'

const Home = props => (
  <Layout>
    <h1>Authentication example with AWS Cognito and Hasura GraphQL</h1>

    <p>Steps to test the functionality:</p>

    <ol>
      <li>Click signup to register.</li>
      <li>
        login
      </li>
      <li>
        check the extra stuff for logged in users
      </li>
    </ol>
    <style jsx>{`
      li {
        margin-bottom: 0.5rem;
      }
    `}</style>
  </Layout>
)

export default Home
