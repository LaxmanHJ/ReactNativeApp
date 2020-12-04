import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';  


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  Picker,
  Alert,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
} from 'react-native'; 

export default class SignupScreen1 extends React.Component {
  state = {
    phone: "",
    name:"",
    dob:"",
    gender:"",
    height:"",
    weight:"",
    password:"",
    passwordc:"",
    state :{isTrue: 0},
    state:{ispwd:0},
    TextValue:""
    
   }

   static navigationOptions = {
    gestureEnabled: false,
    swipeEnabled: false,
}
   onSubmitPhone = () => {
    if (this.state.phone.trim().length != 10) {
        alert('mobile no must be 10 characters');
        return true ;
    }
  }
  onsubmitaadhar = () => {
    if (this.state.aadhar.trim().length !=12) {
        alert('Aadhar no must be 12 characters');
        return true;
    }
  }
  onsubmitpin = () => {
    if (this.state.pincode.trim().length !=6) {
        alert('Pincode no must be 6 characters');
        return true;
    }
  }
validatepwd=()=>{
  if (this.state.password!=this.state.passwordc){
    alert('password Didnot match');
    return true;

  }
  else{
    this.setState({ispwd:100})
  }
}
  CheckTextInput = () => {
    //Handler for the Submit onPress
    if (this.state.phone != '') {
      if (this.state.name!=''){

         if (this.state.gender!=''){
          if (this.state.height!=''){
            if (this.state.weight!=''){
              if (this.state.password!=''){       
                // alert('Success')
                this.setState({isTrue: 100})    
    
  }else{
    alert('Please Enter Password');
    }
  }else{
    alert('please Enter your State')
  }
}else{
  alert('please Enter your Pincode')
}
}else{
  alert('please Enter Your Aadhar number')
}
}else {
  alert('Please Enter name');
}
}
else {
  alert('Please Enter phone');
  }
};

 doSignUp=()=> {
    if((this.state.isTrue > 1)){
      if (this.state.ispwd > 1){


  alert("print ok it is test")
  const  {phone} = this.state;
  const {name} = this.state
  const {dob} = this.state
  const {gender} = this.state
  const {height} = this.state
  const {weight} = this.state
  const {password} = this.state




  console.log("inside post api");
  fetch('http://localhost:8080/piedpiper/signup.php', {
  method: 'POST',
  headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',

             },


    body: JSON.stringify({
    phone: phone,
    name:name,
    dob:dob,
    gender:gender,
    height:height,
    weight:weight,
    password:password,


  })
})
.then((response) => response.json())
  .then((responseData) => {
                           console.log("inside responsejson");
                           console.log('response object:'+JSON.stringify(responseData))

                           if (responseData=="successfull"){
                            alert(" Signup success")
                            this.props.navigation.navigate('Auth')
                           }
                           else if(responseData=="enter_info"){
                            alert("Please enter all info")

                           }
                          else {
                          alert("User alredy registered")
                          }

   }).catch((error)=>{
     console.error("Error Message "+error)
   });
}
}

else {
this.CheckTextInput();
this.validatepwd();
// this.onSubmitPhone();
// this.onsubmitaadhar();
// this.onsubmitpin();
  }
}


  dosubmit=()=>{
    this.doSignUp();  
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.SectionStyle}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Auth')} >
              <Icon name={'ios-arrow-back'} size={22} color='black' style={{marginLeft: '3%',paddingTop:'50%'}}/>
       </TouchableOpacity> 
       <Text style={styles.logo}>PiedPiper</Text>
       </View>

         <ScrollView>
          <Text style={styles.fontview}>SignUp </Text>
          <Text style={styles.queryview}> UserName</Text>
          <View style={styles.inputView} >
          <TextInput  
          
            style={styles.inputText}
            placeholderTextColor="gray"
            keyboardType="numeric"
            onChangeText={(phone) => this.setState({phone})}
            // OnSubmit = {this.onSubmitPhone()}
            />
        </View>
        <View>
        <Text style={styles.queryview}>Name</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            
            style={styles.inputText}
            placeholder="Name*..." 
            placeholderTextColor="gray"
            onChangeText={name => this.setState({name})}/>
        </View>
        <View>
        <Text style={styles.queryview}>DateofBirth</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
        
            style={styles.inputText}
            placeholder="yyy-mm-dd..." 
            placeholderTextColor="gray"
            keyboardType="numeric"
            // onChangeText={aadhar => {this.setState({aadhar});this.onsubmitaadhar()}}/>
            onChangeText={dob => {this.setState({dob})}}/>
            
        </View>
      
        <Text style={styles.queryview}>Personal</Text>
        <View style={styles.flex}>
          <View style={styles.inputViewflex}>
            <TextInput
            style={styles.inputText}
            placeholder="Gender*..."  //make this drop down
            placeholderTextColor="gray"
            keyboardType="numeric"
            // onChangeText={pincode => {this.setState({pincode});this.onsubmitpin()}}/>
            onChangeText={gender => {this.setState({gender})}}/>

          </View>

          <View style={styles.inputViewflex}>
            <TextInput
            style={styles.inputText}
            placeholder="Height in cm..." 
            placeholderTextColor="gray"
            onChangeText={height => this.setState({height})}/>
          </View>
          <View style={styles.inputViewflex}>
            <TextInput
            style={styles.inputText}
            placeholder="Weight in kgs..." 
            placeholderTextColor="gray"
            onChangeText={weight => this.setState({weight})}/>
          </View>
          </View>
  

       <View>        
         <Text style={styles.queryview}>CreatePassword</Text>
      </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText}
          secureTextEntry
          placeholder="password*.."
          placeholderTextColor='gray'
         onChangeText={passwordc => this.setState({passwordc})}

         />

        </View>
        <Text style={styles.queryview}>ConfirmPassword</Text>

        <View style={styles.inputView}>
          <TextInput style={styles.inputText}
          secureTextEntry
          placeholder="ReEnterpassword*.."
          placeholderTextColor='gray'
          onChangeText={password => this.setState({password})}/>

        </View>
        <View style={styles.loginBtn}>
        <Button 
              type="button"
              title="SUBMIT"  
              color='white'

                                         
        onPress={()=>{this.dosubmit()}
          }>     
        </Button>
        
        </View>
        
  </ScrollView>
  
      </View>

    );
    

  }

}


const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    backgroundColor:'white',
    // paddingLeft:10,
 },
 
 SectionStyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: 40,
  margin: 10
},
  logo:{
    fontWeight:"bold",
    fontSize:20,
    color:"coral",
    // marginBottom:10,
    alignItems:"center",
    marginLeft:"auto",
    marginRight:"auto",
    // borderBottomWidth:1,
    borderBottomLeftRadius:10,
    borderColor:"#003f5c",
    paddingTop:10,


  },
  fontview:{
    fontWeight:"500",
    fontSize:35,
    padding:15,
    color:"coral",
    // alignItems: 'flex-start',124
    paddingLeft: 10,    // alignItems:"center",
    justifyContent:"center"
  },
  queryview:{
    fontWeight:"700",
    fontSize:15,
    color:"coral",
    paddingTop:20,
    // paddingHorizontal: 10,
    // alignItems: 'flex-start',
    paddingLeft:10,
  },
  inputText:{
    height:50,
    alignItems: 'flex-start',
    fontSize:20,
    color:'black'


  },
  inputView:{
    width:"80%",
    borderRadius:5,
    height:50,
    marginBottom:20,
    paddingTop:15,
    justifyContent:"center",
    padding:20, 
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginLeft:10
   

  },
  inputViewflex:{
    width:"40%",
    borderRadius:5,
    height:50,
    marginBottom:20,
    paddingTop:10,
    justifyContent:"center",
    // padding:20, 
    borderBottomColor: 'gray' ,
    borderBottomWidth: 1,

  },
flex:{
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent:'space-around'

},
loginBtn:{
  width:"50%",
  backgroundColor:"#fb5b5a",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:40,
  marginBottom:10,
  marginLeft:"auto",
  marginRight:"auto",
  
},
btn:{
elevation:5,
color:"black"
}
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    color: 'gray',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'gray',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
