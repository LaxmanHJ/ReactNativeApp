import React, { Component, Children } from 'react';  
import { View, Text, StyleSheet, Button, AsyncStorage,Image,TouchableOpacity, TextInput, Alert} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  

import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


import {  
  createSwitchNavigator,  
  createAppContainer,  
} from 'react-navigation';  
import { ScrollView } from 'react-native-gesture-handler';




export default class App extends React.Component { 

  constructor(props){  
    super(props);  
}  

  state = {
    UserPhone: "",
    UserName:"",
    UserGender:"",
    UserHeight:"",
    UserWeight:"",
    UserDob:"",
    image: null,

    
  }


  _logout = async()=>{
  
    await AsyncStorage.clear();
    Alert.alert("Logouted")
    this.props.navigation.navigate('Auth')
  }


  async componentDidMount(){
            this._loadInitialState().done();


      }
  

   

  // AsyncStorage for login data processing
    _loadInitialState=async()=>{
        var name = await AsyncStorage.getItem('name');
        var gender = await AsyncStorage.getItem('gender');
        var phone = await AsyncStorage.getItem('phone');
        var height = await AsyncStorage.getItem('height');
        var weight = await AsyncStorage.getItem('weight');
        var dob = await AsyncStorage.getItem('dob');
        
        this.setState({Username:name})
        this.setState({UserGender:gender})
        this.setState({UserPhone:phone})
        this.setState({UserHeight:height})
        this.setState({UserWeight:weight})
        this.setState({UserDob:dob})

      }


    render() {  
  
      const {navigation} = this.props;
      let { image } = this.state;

    
        
 
      return (
        <View style={styles.container}>

        <View style={styles.logocontainer} >
        {/* <Image source={require('./images/pic.jpg')} style={styles.image}/> */}
      <Text style={styles.footerText}>{this.state.Username} </Text>
        </View>

        <ScrollView>
     
     <View style={styles.profilecont}>

      <Text style={styles.inputText} >{this.state.UserPhone}</Text>
      <View style={styles.flexview}>

      <Icon style={[{color: 'gray'}]} size={25} name={'ios-call'}/> 
          <Text style={styles.inputView}>Phone </Text>
          </View>


       <Text style={styles.inputText} >{this.state.UserGender}</Text>

       <View style={styles.flexview}>
       <Icon style={[{color: 'gray'}]} size={25} name={'ios-card'}/> 
          <Text style={styles.inputView}>Gender </Text> 
        </View>

      <Text style={styles.inputText} >{this.state.UserHeight}</Text>
      <View style={styles.flexview}>

      <Icon style={[{color: 'gray'}]} size={25} name={'ios-pin'}/> 
          <Text style={styles.inputView}>Height </Text>
          </View>

      <Text style={styles.inputText} >{this.state.UserWeight}</Text>
      <View style={styles.flexview}>

          <Icon style={[{color: 'gray'}]} size={25} name={'ios-compass'}/> 
          <Text style={styles.inputView}>Weight </Text>
</View>
      <Text style={styles.inputText} >{this.state.UserDob}</Text>
      <View style={styles.flexview}>

      <Icon style={[{color: 'gray'}]} size={25} name={'ios-business'}/> 
          <Text style={styles.inputView}>DoB </Text>
        </View>
        </View>


            <Button onPress={this._logout} title="Logout"/>

            </ScrollView>
      
</View>

    
      ); 
  
}
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logocontainer:{
    paddingTop:20,
    backgroundColor:"peachpuff",
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:3,
  },
  pic:{
    fontWeight:"bold",
    fontSize:25,
    color:"#fb5b5a",
    margin:20,
 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    alignSelf:'center',
    borderColor: "black",
},
  inputView:{
    width:"80%",
    // backgroundColor:"#465881",
    borderBottomWidth:1,
    height:50,
    marginBottom:1,
    justifyContent:"center",
    paddingTop:3,
    color:"gray",
    fontSize:15,
    fontFamily:'Arial',
    fontWeight:"100"

  },
  inputText:{
    paddingTop:6,
    height:40,
    color:"black",
    fontWeight:'500',
    fontSize:22
  },

profilecont:{
  paddingLeft:6,
},
  queryview:{
    fontWeight:"700",
    fontSize:20,
    color:"white",
    alignItems: 'flex-start',
  },
  bottomView:{
 
    width: '100%', 
    height: 50, 
    backgroundColor: '#FF9800', 
    justifyContent: 'center', 
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',

  },
  footerText:{
    padding:5,
    color:"black",
    fontSize:20,
    fontWeight:"700",
    },
    flexview:{
      // flex:2,
      width: '50%',
      justifyContent: 'flex-start',
      flexDirection:'row',
      // flexWrap:'wrap',
      // alignSelf:'center'
      justifyContent:'space-between'
      
    }
 
});
