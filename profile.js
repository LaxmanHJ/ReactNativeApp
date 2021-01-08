
import React, { Children } from 'react';  
import { View, Text, StyleSheet, Button, AsyncStorage,Image,TouchableOpacity, TextInput} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  


import HomeScreen from './Home';
import ProfileScreen from './UserProfile';
import ImageScreen from './Image';
import TeamScreen from './Team';

const TabNavigator = createMaterialBottomTabNavigator(  
    {  
      
        Home: { 
            screen: HomeScreen,  
            navigationOptions:{  
              tabBarLabel:'Home',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),  
                                }  
        },
        Image: {  
          screen: ImageScreen,  
          navigationOptions:{  
              tabBarLabel:'RanKINGs',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-podium'}/>  
                  </View>),  
          }  
      }, 
      Team: { 
        screen: TeamScreen,  
        navigationOptions:{  
            tabBarLabel:'Team',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-people'}/>  
                </View>),  
        }  
    },  
        Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),  
                // activeColor: '#f0edf6',  
                // inactiveColor: '#f65a22',  
                // barStyle: { backgroundColor: '#3BAD87' }, Children ={()=><ComponentName name={this.props.name}/>}

            }  
        },  
          
        
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#00FFFF',  
      inactiveColor: '#f0edf6',  
      barStyle: { backgroundColor: 'black' },  
     
    },  
);  
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    logocontainer:{
      paddingTop:20,
      backgroundColor:"lightblue",
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
      width: 150,
      height: 150,
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
      marginBottom:20,
      justifyContent:"center",
      paddingTop:20
    },
    inputText:{
      height:50,
      color:"black"
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
      color:"black"
      }
});

export default createAppContainer(TabNavigator);

