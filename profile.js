
import React, { Children } from 'react';  
import { View, Text, StyleSheet, Button, AsyncStorage,Image,TouchableOpacity, TextInput} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  


import HomeScreen from './Home';
import ProfileScreen from './UserProfile';
import ImageScreen from './Image';

const TabNavigator = createMaterialBottomTabNavigator(  
    {  
      
        Home: { screen: HomeScreen,  

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
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-image'}/>  
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

// class HomeScreen extends React.Component {  
//   render() {  
//     return (  
//         <View style={styles.container}>  
//           <Text>Home Screen</Text>  
//         </View>  
//     );  
//   }  
// }  


// class ProfileScreen extends React.Component {  
//   state = {
//         UserPhone: "",
//         UserName:"",
//         UserId:"",
//         UserAadhar:"",
//         UserRegion:"",
//         UserPincode:"",
//         UserState:"",
//         UserCows:"",
    
//       }
//       _logout = async()=>{
//         alert("Logouted")
//         await AsyncStorage.clear();
//         this.props.navigation.navigate('Auth')
//       }
    
//   render() {  
    

// const {navigation} = this.props;
// let name = JSON.stringify(navigation.getParam("responseData"));
// // {this.saveData.bind(this,name)} 
// // {this.retrieveData()}


// return (
//   <View style={styles.container}>

//   <View style={styles.logocontainer} >
    
//           <Text style={styles.pic}>Welcome {this.state.UserName}</Text>

//   </View>
//   <Image source={require('./images/pic.jpg')} style={styles.image}/>

//   <ScrollView>

// <View style={styles.profilecont}>

//   <View style={styles.inputView} >
//     <Text style={styles.queryview}>Aadharnumber </Text>
//     <TextInput  
//       style={styles.inputText}
//       placeholder= {this.state.UserAadhar}
//       placeholderTextColor="#003f5c"
//       onChangeText={phone => this.setState({phone})}/>
//   </View>

//   <View style={styles.inputView} >
//     <Text style={styles.queryview}>Name </Text>
//     <TextInput  
//       style={styles.inputText}
//       placeholder={this.state.UserName}
//       placeholderTextColor="#003f5c"
//       onChangeText={phone => this.setState({phone})}/>
//   </View>


//   <View style={styles.inputView} >
//     <Text style={styles.queryview}>Phone</Text>
//     <TextInput  
//       style={styles.inputText}
//       placeholder={this.state.UserPhone}
//       placeholderTextColor="#003f5c"
//       onChangeText={phone => this.setState({phone})}/>
//   </View>

//   <View style={styles.inputView} >
//     <Text style={styles.queryview}>Pincode </Text>
//     <TextInput  
//       style={styles.inputText}
//       placeholder={this.state.UserPincode}
//       placeholderTextColor="#003f5c"
//       onChangeText={phone => this.setState({phone})}/>
//   </View>

//           {/* <TouchableOpacity onPress ={this.saveData.bind(this,name)}> */}
//           {/* <Text>Click to save data</Text>
//           </TouchableOpacity>   */}

//       {/* <Button onPress={this.retrieveData} title="Show saved Object"/> */}
//       <Button onPress={this._logout} title="Logout"/>

//       </View>
//       </ScrollView>


//         </View>  
//     );  
//   }  
// }  
 
// class ImageScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Cart Screen</Text>  
//             </View>  
//         );  
//     }  
// } 