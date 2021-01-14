
import React from 'react';
import { StyleSheet,
    Text,
    View,
    TextInput, 
    TouchableOpacity,
    
    Alert,
    Keyboard ,
    AsyncStorage,
} from 'react-native';
import { Button } from 'react-native-paper';

export default class LoginScreen extends React.Component {
  state={
     phone:"",
     password:"",
     name:"",
     dob:"",
     gender:"",
     height:"",
     weight:"",


    
  }
  constructor(props){
    super(props);
  }
  dologin= () => {

    // alert("print ok it is test")
    const  {phone,password} = this.state;

    console.log("inside post api"+phone);
    fetch('http://localhost:8080/piedpiper/login.php', {
    method: 'POST',
    headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
               },
      body: JSON.stringify({
      phone: phone,
      password:password
    })
  })
  .then((response) => response.json())
    .then((responseData) => {
                             console.log("inside responsejson"+responseData);
                             console.log('response object:'+JSON.stringify(responseData))
                             if (responseData.msg=='success'){
                              // Alert.alert("success")
                              console.log(responseData);
                              this.session(responseData)
                             
                            }else {
                                Alert.alert("Invalid UseName or password")
                            }
  
     }).catch((error)=>{
       console.error("Error Message "+error)
     });
     Keyboard.dismiss()
  }
  
  session=async(responseData)=> {

    await AsyncStorage.setItem('isloggedin','1');

    AsyncStorage.setItem('name',responseData.name);
    AsyncStorage.setItem('phone',responseData.phone);
    AsyncStorage.setItem('gender',responseData.gender);
    AsyncStorage.setItem('height',responseData.height);
    AsyncStorage.setItem('weight',responseData.weight);
    AsyncStorage.setItem('dob',responseData.dob);

    // // var name = await AsyncStorage.getItem('name')
    // this.setState({name: await AsyncStorage.getItem('name')})
    // console.log(this.state.name);

    // console.log(responseData)
    this.props.navigation.navigate("ProfileScreen");
    
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>pied piper</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="phone..." 
            placeholderTextColor="black"
            onChangeText={phone => this.setState({phone})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="black"
            onChangeText={password => this.setState({password})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}
            onPress={this.dologin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        
       
        <TouchableOpacity style={styles.startBtn} onPress={()=>this.props.navigation.navigate("SignupScreen")}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

       <View style={{backgroundColor:"coral",paddingTop:1}}>
        <Button  
                  onPress={()=>this.props.navigation.navigate("ProfileScreen")}>
          <Text style={styles.loginText}>skip</Text>
        </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"coral",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"gray",
    borderRadius:5,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black",
    borderBottomColor:"red"
  },
  forgot:{
    color:"black",
    fontSize:15
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"coral",
    borderRadius:5,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"black"
  },
  startBtn:{
    paddingBottom:10,
  }
});
