/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjo67clu7bwfj01944k04cgyp' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

import LoginScreen from '/Users/anthony/Desktop/Manifest/App6/src/screens/LoginScreen.js';
import SignUpScreen from '/Users/anthony/Desktop/Manifest/App6/src/screens/SignUpScreen.js'
import HomeScreen from '/Users/anthony/Desktop/Manifest/App6/src/screens/HomeScreen.js'

const AppStackNavigator = new StackNavigator({
  LoginScreen: {screen: LoginScreen}
  ,SignUpScreen: {screen: SignUpScreen}
  ,HomeScreen: {screen: HomeScreen,
  navigationOptions: {headerLeft: null}}
})



export default class App extends React.Component{
  render() {
    return (
      <ApolloProvider client={client}>
       <AppStackNavigator/>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});