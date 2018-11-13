import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import ListPage from '/Users/anthony/Desktop/Manifest/App6/comps/ListPage.js'
import SignupScreen from '/Users/anthony/Desktop/Manifest/App6/src/screens/SignUpScreen.js'
import ListUser from '/Users/anthony/Desktop/Manifest/App6/comps/ListUser.js';

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjo67clu7bwfj01944k04cgyp' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default class Profiles extends React.Component {
  render() {
    return (
        <ListUser/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
