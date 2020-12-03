

import React, { Component } from 'react';
import { StyleSheet, Text, View,ActivityIndicator,StatusBar, AsyncStorage } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'


import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen1';
import ProfileScreen from './profile';


const RootStack = createStackNavigator({
  ProfileScreen:ProfileScreen,
  SignupScreen:SignupScreen
  
},{
headerMode: 'none',
          navigationOptions: {
              headerVisible: false,
              headerShown: false,
         

          }
        });


const Authstack = createStackNavigator({
  
  LoginScreen:LoginScreen

},{
headerMode: 'none',
          navigationOptions: {
              headerVisible: false,
              headerShown: false,
           

          }});

class AuthloadingScreen extends Component{
  constructor(props){
    super(props);
    this._loaddata();
  }
  _loaddata= async()=> {
    const isloggedin = await AsyncStorage.getItem('isloggedin');
    this.props.navigation.navigate(isloggedin!=='1'? 'Auth':'App');
  }
  render(){
    return(
      <View>
         <ActivityIndicator/> 
       <StatusBar barStyle="default"/>
      </View>
      
    );
  }
}



export default createAppContainer(createSwitchNavigator({
  AuthLoading:AuthloadingScreen,
  Auth:Authstack,
  App:RootStack,

},
{
  initialRouteName:"AuthLoading",
  headerMode: 'none',
          navigationOptions: {
              headerVisible: false,
              headerShown: false,
            
          }
}));