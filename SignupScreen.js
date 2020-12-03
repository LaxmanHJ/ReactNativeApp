// import React from 'react';
// import Icons from 'react-native-vector-icons/MaterialIcons';
// import RNPickerSelect from 'react-native-picker-select';
// // import { Chevron } from 'react-native-shapes';


// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   ScrollView,
//   Button,
//   Picker,
//   Alert,
//   FlatList,
//   Platform,
//   TouchableOpacity,
// } from 'react-native';

// export default class SignupScreen extends React.Component {
//   state = {
//     phone: "",
//     name:"",
//     aadhar:"",
//     pincode:"",
//     taluka:"",
//     dist:"",
//     State:"",
//     password:"",
//    }

//  doSignUp=()=> {

//   // alert("print ok it is test")
//   const  {phone} = this.state;
//   const {name} = this.state
//   const {aadhar} = this.state
//   const {pincode} = this.state
//   const {taluka} = this.state
//   const {dist} = this.state
//   const {State} = this.state
//   const {password} = this.state




//   console.log("inside post api");
//   fetch('http://134.209.144.127/cowsoncloud/signup1.php', {
//   method: 'POST',
//   headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json',

//              },

//     body: JSON.stringify({
//     phone: phone,
//     name:name,
//     aadhar:aadhar,
//     pincode:pincode,
//     taluka:taluka,
//     dist:dist,
//     state:State,
//     password:password,

//   })
// })
// // .then((response) => response.json())
//   .then((responseData) => {
//                            console.log("inside responsejson");
//                            console.log('response object:'+JSON.stringify(responseData))

//    }).catch((error)=>{
//      console.error("Error Message "+error)
//    });
// }
  
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.SectionStyle}>
//         <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')} >
//               <Icons name={'arrow-back'} size={19} color='#fff' style={{marginLeft: '3%'}}/>
//        </TouchableOpacity> 
//        <Text style={styles.logo}>ADIS</Text>

//        </View>
//          <ScrollView>
//           <Text style={styles.fontview}>SignUp </Text>
//           <Text style={styles.queryview}> MobileNumber</Text>
//           <View style={styles.inputView} >
//           <TextInput  
//             style={styles.inputText}
//             placeholder="Mobile No...." 
//             placeholderTextColor="gray"
//             keyboardType="numeric"
//             onChangeText={phone => this.setState({phone})}/>
//         </View>
//         <View>
//         <Text style={styles.queryview}>Name</Text>
//         </View>
//         <View style={styles.inputView} >
//           <TextInput  
            
//             style={styles.inputText}
//             placeholder="Name..." 
//             placeholderTextColor="gray"
//             onChangeText={name => this.setState({name})}/>
//         </View>
//         <View>
//         <Text style={styles.queryview}>12 digit Aadhar number</Text>
//         </View>
//         <View style={styles.inputView} >
//           <TextInput  
        
//             style={styles.inputText}
//             placeholder="Aadhar Number..." 
//             placeholderTextColor="gray"
//             keyboardType="numeric"
//             onChangeText={aadhar => this.setState({aadhar})}/>
//         </View>
//         <Text style={styles.queryview}>Address</Text>
//         <View style={styles.flex}>
//           <View style={styles.inputViewflex}>
//             <TextInput
//             style={styles.inputText}
//             placeholder="Pincode..." 
//             placeholderTextColor="gray"
//             keyboardType="numeric"
//             onChangeText={pincode => this.setState({pincode})}/>
//           </View>
//           <View style={styles.inputViewflex}>
//             <TextInput
//             style={styles.inputText}
//             placeholder="Region..." 
//             placeholderTextColor="gray"
//             onChangeText={region => this.setState({region})}/>
//           </View>
//           <View style={styles.inputViewflex}>
//             <TextInput
//             style={styles.inputText}
//             placeholder="Taluk..." 
//             placeholderTextColor="gray"
//             onChangeText={taluka => this.setState({taluka})}/>
//           </View>
//           <View style={styles.inputViewflex}>
//             <TextInput
//             style={styles.inputText}
//             placeholder="Dist..." 
//             placeholderTextColor="grimport { Chevron } from 'react-native-shapes';ay"
//             onChangeText={dist => this.setState({dist})}/>
//           </View>
       
//           <View style={styles.inputViewflex}>
//             {/* <TextInput
//             style={styles.inputText}
//             placeholder="State..." 
//             placeholderTextColor="gray"
//             onChangeText={text => this.setState({State:text})}/> */}
          
//             <RNPickerSelect selectedValue = {this.state.State}
                      
//                     style={{pickerSelectStyles, iconContainer: {
//                       top: 10,
//                       right: 12,
//                     },}}
//                     onValueChange={(State) =>  this.setState({State})}  
//                     // onValueChange={(State) => console.log("what the fuck"+State)}
//                     // placeholderTextColor="gray"
//                     placeholder={{
//                       label: 'Select State...',
//                       value: null,
//                       color:"red"
//                      }}
//                     //onChangeText={State=>this.setstate({this.state.State})}
//                         items={[
//                           { label: 'Karnataka', value: 'Karnataka' },
//                           { label: 'Kerala', value: 'Kerala' },
//                           { label: 'Maharastra', value: 'Maharastra' },
//                       ]}
//                     // {/* <Picker.Item label="Karnataka" value="Karnataka" />  
//                     // <Picker.Item label="Kerala" value="Kerala" />  
//                     // <Picker.Item label="Maharastra" value="Maharastra" />  
//                     // <Picker.Item label="AndhraPradesh" value="AndhraPradesh" />   */}

//                   /> 
                  
                
//                 {/* <Text style={styles.textStyle}> {"Index ="+this.state.choosenIndex}</Text>  */}
//                 {/* <Text>{"language="+this.state.State}</Text> */}

//           </View>
//           </View>
  

//        <View>        
//          <Text style={styles.queryview}>CreatePassword</Text>
//       </View>
//         <View style={styles.inputView}>
//           <TextInput style={styles.inputText}
//           secureTextEntry
//           placeholder="password.."
//           placeholderTextColor='gray'
//          // onChangeText={password => this.setState({password})}
//          />

//         </View>
//         <Text style={styles.queryview}>ConfirmPassword</Text>

//         <View style={styles.inputView}>
//           <TextInput style={styles.inputText}
//           secureTextEntry
//           placeholder="ReEnterpassword.."
//           placeholderTextColor='gray'
//           onChangeText={password => this.setState({password})}/>

//         </View>
//         <TouchableOpacity style={styles.loginBtn}
//                          onPress={() => this.doSignUp()}>
          
//         <Text style={styles.loginText}>SUBMIT</Text>
//         </TouchableOpacity>

        
//   </ScrollView>
  
//       </View>

//     );
    

//   }

// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 10,
//     paddingBottom: 10,
//     flex: 1,
//     backgroundColor:'#003f5c',
//     // paddingLeft:10,
//  },
 
//  SectionStyle: {
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: 40,
//   margin: 10
// },
//   logo:{
//     fontWeight:"bold",
//     fontSize:50,
//     color:"#fb5b5a",
//     marginBottom:10,
//     alignItems:"center",
//     marginLeft:"auto",
//     marginRight:"auto",
//     borderBottomWidth:1,
//     borderBottomLeftRadius:10,
//     borderColor:"#003f5c",
  


//   },
//   fontview:{
//     fontWeight:"500",
//     fontSize:35,
//     padding:15,
//     color:"white",
//     // alignItems: 'flex-start',124
//     paddingLeft: 10,    // alignItems:"center",
//     justifyContent:"center"
//   },
//   queryview:{
//     fontWeight:"700",
//     fontSize:15,
//     color:"white",
//     paddingTop:20,
//     // paddingHorizontal: 10,
//     // alignItems: 'flex-start',
//     paddingLeft:10,
//   },
//   inputText:{
//     height:50,
//     color:"white",
//     alignItems: 'flex-start',
//     fontSize:20,

//   },
//   inputView:{
//     width:"80%",
//     borderRadius:5,
//     height:50,
//     marginBottom:20,
//     paddingTop:15,
//     justifyContent:"center",
//     padding:20, 
//     borderBottomColor: 'gray',
//     borderBottomWidth: 1,
   

//   },
//   inputViewflex:{
//     width:"40%",
//     borderRadius:5,
//     height:50,
//     marginBottom:20,
//     paddingTop:10,
//     justifyContent:"center",
//     // padding:20, 
//     borderBottomColor: 'gray' ,
//     borderBottomWidth: 1,

//   },
// flex:{
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   justifyContent:'space-around'

// },
// loginBtn:{
//   width:"50%",
//   backgroundColor:"#fb5b5a",
//   borderRadius:25,
//   height:50,
//   alignItems:"center",
//   justifyContent:"center",
//   marginTop:40,
//   marginBottom:10,
//   marginLeft:"auto",
//   marginRight:"auto",
// },
// loginText:{
//   color:"white"
// }
// });

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     color: 'gray',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
//   inputAndroid: {
//     fontSize: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderWidth: 0.5,
//     borderColor: 'purple',
//     borderRadius: 8,
//     color: 'gray',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
// });
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';


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
  FlatList,
  Platform,
  TouchableOpacity,
} from 'react-native'; 

export class SignupScreen extends React.Component {
  state = {
    phone: "",
    name:"",
    aadhar:"",
    pincode:"",
    taluka:"",
    dist:"",
    State:"",
    password:"",
    passwordc:"",
    state :{isTrue: 0},
    state:{ispwd:0},
    TextValue:""
   }
   onSubmitPhone = () => {
    if (this.state.phone.trim().length > 10) {
        alert('mobile no must be 10 characters');
        return;
    }
  }
  onsubmitaadhar = () => {
    if (this.state.aadhar.trim().length >12) {
        alert('Aadhar no must be 14 characters');
        return;
    }
  }
  onsubmitpin = () => {
    if (this.state.pincode.trim().length >6) {
        alert('Pincode no must be 6 characters');
        return;
    }
  }
validatepwd=()=>{
  if (this.state.password!=this.state.passwordc){
    alert('password Didnot match');
    return;

  }
  else{
    this.setState({ispwd:100})
  }
}
  CheckTextInput = () => {
    //Handler for the Submit onPress
    if (this.state.phone != '') {
      if (this.state.name!=''){

         if (this.state.aadhar!=''){
          if (this.state.pincode!=''){
            if (this.state.State!=''){
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

 console.log("  doSignUpAPI()");
  const  {phone} = this.state;
  const {name} = this.state
  const {aadhar} = this.state
  const {pincode} = this.state
  const {taluka} = this.state
  const {dist} = this.state
  const {State} = this.state
  const {password} = this.state
    const {passwordc} = this.state

   if(phone.length == 0){
        alert("Enter Phone Number")
        return false;
    }
     if(name.length == 0){
        alert("Enter Name")
        return false;
    }
    if(aadhar.length == 0){
        alert("Enter Aadhar card Number")
        return false;
    }

     if(password.length == 0){
        alert(" Enter Password ")
        return false;
    }
    if(passwordc.length == 0){
        alert(" Enter confirmed password ")
        return false;
    }
    if (password !== passwordc){
        alert('Password not matching');
        return false;
    }




  console.log("inside post api");
  fetch('http://134.209.144.127/cowsoncloud/signup1.php', {
  method: 'POST',
  headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',

             },
  body: JSON.stringify({
                            phone: phone,
                            name:name,
                            aadhar:aadhar,
                            pincode:pincode,
                            taluka:taluka,
                            dist:dist,
                            state:State,
                            password:password,
                        })
})
.then((response) => response.json())
  .then((responseData) => {
                          alert("You have signed up Successfully ")
                          console.log(" Signup success()");
                           console.log('response object:'+JSON.stringify(responseData))
                           this.props.navigation.navigate("LoginScreen")

   }).catch((error)=>{
     console.error("Error Message "+error)
   });
}
  
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.SectionStyle}>
              <Icons name={'arrow-back'} size={19} color='#fff' style={{marginLeft: '3%'}}/>
              <Text> Back</Text>
               <Text style={styles.logo}>ADIS</Text>
       </View> */}
         <ScrollView>
          <Text style={styles.fontview}>SignUp </Text>
          <Text style={styles.queryview}> MobileNumber</Text>
          <View style={styles.inputView} >
          <TextInput  
          
            style={styles.inputText}
            placeholder="Mobile No*...." 
            placeholderTextColor="gray"
            keyboardType="numeric"
            onChangeText={(phone) => this.setState({phone})}
            blurOnSubmit = {this.onSubmitPhone()}/>
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
        <Text style={styles.queryview}>12 digit Aadhar number</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
        
            style={styles.inputText}
            placeholder="Aadhar Number*..." 
            placeholderTextColor="gray"
            keyboardType="numeric"
            onChangeText={aadhar => {this.setState({aadhar});this.onsubmitaadhar()}}/>
        </View>
        <Text style={styles.queryview}>Address</Text>
        <View style={styles.flex}>
          <View style={styles.inputViewflex}>
            <TextInput
            style={styles.inputText}
            placeholder="Pincode*..." 
            placeholderTextColor="gray"
            keyboardType="numeric"
            onChangeText={pincode => {this.setState({pincode});this.onsubmitpin()}}/>

          </View>
          
          <View style={styles.inputViewflex}>
            <TextInput
            style={styles.inputText}
            placeholder="Region..." 
            placeholderTextColor="gray"
            onChangeText={region => this.setState({region})}/>
          </View>
          <View style={styles.inputViewflex}>
            <TextInput
            style={styles.inputText}
            placeholder="Taluk..." 
            placeholderTextColor="gray"
            onChangeText={taluka => this.setState({taluka})}/>
          </View>
          <View style={styles.inputViewflex}>
            <TextInput
            style={styles.inputText}
            placeholder="Dist..." 
            placeholderTextColor="gray"
            onChangeText={dist => this.setState({dist})}/>
          </View>
       
          <View style={styles.inputViewflex}>
            <TextInput
            style={styles.inputText}
            placeholder="State*..." 
            placeholderTextColor="gray"
            onChangeText={State => this.setState({State})}/>
          
           
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
         onChangeText={password => this.setState({password})}

         />

        </View>
        <Text style={styles.queryview}>ConfirmPassword</Text>

        <View style={styles.inputView}>
          <TextInput style={styles.inputText}
          secureTextEntry
          placeholder="ReEnterpassword*.."
          placeholderTextColor='gray'
          onChangeText={passwordc => this.setState({passwordc})}/>

        </View>
        {/* <TouchableOpacity style={styles.loginBtn} > */}
                              
        {/* <Text style={styles.loginBtn}  onPress={()=>{  this.doSignUp();}
        // style={styles.loginText}
        >SUBMIT</Text> */}



        <TouchableOpacity style={styles.loginBtn}   onPress={this.doSignUp}>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
  

        
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
    backgroundColor:'#003f5c',
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
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:10,
    alignItems:"center",
    marginLeft:"auto",
    marginRight:"auto",
    borderBottomWidth:1,
    borderBottomLeftRadius:10,
    borderColor:"#003f5c",
  


  },
  fontview:{
    fontWeight:"500",
    fontSize:35,
    padding:15,
    color:"white",
    // alignItems: 'flex-start',124
    paddingLeft: 10,    // alignItems:"center",
    justifyContent:"center"
  },
  queryview:{
    fontWeight:"700",
    fontSize:15,
    color:"white",
    paddingTop:20,
    // paddingHorizontal: 10,
    // alignItems: 'flex-start',
    paddingLeft:10,
  },
  inputText:{
    height:50,
    alignItems: 'flex-start',
    fontSize:20,


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
  backgroundColor:"blue",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:40,
  marginBottom:10,
  marginLeft:"auto",
  marginRight:"auto",
},
loginText:{
  color:"white",
  fontWeight:'bold'
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