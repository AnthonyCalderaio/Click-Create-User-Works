
//ErrorMessage: Unrecognized font family "Ionicons"
//Solved:   $npm install react-native-vector-icons --save 
//Solved... (THEN: react-native run-ios)
import React, {Component} from 'react';
import {StyleSheet, Text, View,Platform, StatusBar} from 'react-native';
import { Icon } from 'native-base';
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { AppLoading, Asset, Font} from 'expo'



//import profile from '/Users/anthony/Desktop/Manifest/App6/src/profileData/profile.js';
class ProfileScreen extends React.Component {



    constructor(props) {
      super(props);
  
      // this.client = new ApolloClient({
      //   uri: "https://w5xlvm3vzz.lp.gql.zone/graphql",
      // });

  
      this.state = {
        isLoadingComplete: false,
      };
    }


  render() {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
    //   return (
    //     <View style={styles.container}>
    //       {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    //       <ApolloProvider client={this.client}>
    //         <profile />
    //       </ApolloProvider>
    //     </View>
    //   );
    // }
    return (
      <View>
        
        </View>
    );
  }

  
}


export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
    
}}
);

