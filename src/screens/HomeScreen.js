//@ion Icons from: https://ionicons.com/


import React, {Component} from 'react';
import {
    View, 
    Text,
    StyleSheet
} from "react-native";
import { Icon } from 'native-base';
//import MapView from 'react-native-maps';
import {StackNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation'
import  ProfileScreen  from '/Users/anthony/Desktop/Manifest/App6/src/SwipeScreens/ProfileScreen.js';
import  ChatScreen  from '/Users/anthony/Desktop/Manifest/App6/src/SwipeScreens/ChatScreen.js';
import  BusinessScreen  from '/Users/anthony/Desktop/Manifest/App6/src/SwipeScreens/BusinessScreen.js';
import  SocialScreen  from '/Users/anthony/Desktop/Manifest/App6/src/SwipeScreens/SocialScreen.js';
import  MapScreen  from '/Users/anthony/Desktop/Manifest/App6/src/SwipeScreens/MapScreen.js';
//import  IndexScreen from '/Users/anthony/Desktop/Manifest/App4/server/src/index.js';



const AppTabNavigator = createBottomTabNavigator({
    ProfileTab: {
        screen: ProfileScreen
    },
    ChatTab: {
        screen: ChatScreen
    },BusinessTab: {
        screen: BusinessScreen
    },SocialTab: {
        screen: SocialScreen
    }
    // ,MapTab: {
    //     screen: MapScreen
    // }
    // ,
    // IndexTab: {
    //     screen: IndexScreen
    // }
})

class HomeScreen extends React.Component {



    static navigationOptions = {
        
        title:"Click"
       
    }
  

    render (){
        return (
            <AppTabNavigator/>
            //<MapScreen style={styles.map}/>
        );
    }
}
export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom:0,
        right:0,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    map:{
        position: 'relative',
        top: 10,
        left: 10,
        bottom: 10,
        right:10
    }
});