
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
    AsyncStorage
  } from 'react-native'; 

export default class createTeam extends React.Component {
    state={
        teamName:"",
        teamDes:"",
        teamLoc:"",
        teamId:0,
        userId:"",
    }
    componentDidMount() {
      this._loadInitialState().done();
    }
  
    // AsyncStorage for login data processing
    _loadInitialState=async()=>{
      var phone = await AsyncStorage.getItem('phone');
      this.setState({userId:phone})
    }
  
    // AsyncStorage for login data processing
    createTeam=()=>{
      const {teamName} = this.state
      const {teamLoc}  = this.state
      const {teamDes} = this.state


      fetch('http://localhost:8080/piedpiper/createTeam.php', {
                method: 'POST',
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',

                          },
                body: JSON.stringify({
                  teamName:teamName,
                  teamLoc: teamLoc,
                  teamDes:teamDes,           
              })
            })
          .then((response) => response.json())
            .then((responseData) => {
                                    console.log("inside responsejson"+responseData);
                                    console.log('response object:'+JSON.stringify(responseData))
                                    if (responseData.msg=="insertion_team_ok"){
                                      this.setState({
                                        teamId:responseData.id
                                      })
                                      console.log(" Inserting to Team is success",this.state.teamId);
                                      this.insertToTeamMembers(this.state.teamId);
                                    }
                                    else if(responseData=="insertion_team_fail"){
                                      alert("Inserting to tracks is failed")
                                    }
                                    else {
                                    alert("Idk What happend")
                                    }

            }).catch((error)=> {
              console.error("Error Message 1"+error)
            });
      }

      insertToTeamMembers=(teamId)=>{
        const {userId} = this.state

        fetch('http://localhost:8080/piedpiper/insertToTeamMembers.php', {
                  method: 'POST',
                  headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
  
                            },
                  body: JSON.stringify({
                    userId:userId,
                    teamId:teamId,
                })
              })
            .then((response) => response.json())
              .then((responseData) => {
                                      console.log("inside responsejson"+responseData);
                                      console.log('response object:'+JSON.stringify(responseData))
                                      if (responseData.msg=="insertion_teamDetails_ok"){
                                        
                                        console.log(" Inserting to TeamDetails is success",this.state.teamId);
                                      }
                                      else if(responseData=="insertion_teamDetails_fail"){
                                        alert("Inserting to TeamDetails is failed")
                                      }
                                      else {
                                      alert("Idk What happend")
                                      }
  
              }).catch((error)=> {
                console.error("Error Message 1"+error)
              });
        }
  
   render(){
    return (
        <View style={styles.container}>
            <View style={styles.SectionStyle}>
            <View style={styles.gridChild1}>
                  <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileScreen')} >
                      <Icon name={'ios-arrow-back'} size={22} color='coral' style={{marginLeft: '3%'}}/>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity style={styles.k} onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                      <Text style={{color:"coral",fontWeight:"bold", margin:5}}>Done</Text>
                    </TouchableOpacity>
                  </View>
            </View> 
            </View>
            <Text style={styles.TeamViewHeaderFont1}>Create Team </Text>
            <View style={styles.gridChild}>
                <Icon name={'ios-cloud-upload'} size={32} color='black' style={{marginLeft: '3%',paddingRight:5}}/>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText}
                    placeholder="Type Team Name..." 
                    placeholderTextColor="black"
                    onChangeText={teamName => this.setState({teamName})}/>
                </View>
            </View>
            <View>
                <Text>Description</Text>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText}
                    placeholder="About your Team..." 
                    placeholderTextColor="black"
                    onChangeText={teamDes => this.setState({teamDes})}/>
                </View>
            </View>
            <View>
                <Text>Location</Text>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText}
                    placeholder="Location..." 
                    placeholderTextColor="black"
                    onChangeText={teamLoc => this.setState({teamLoc})}/>
                </View>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={this.createTeam}>
              <Text style={styles.loginText}>Create</Text>
            </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({  
    container: {  
        padding: 10,
        flex: 1,
        backgroundColor:'white',  
    },
    loginBtn:{
      width:"50%",
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
    SectionStyle: {
        //flexDirection: 'row',
        marginTop:30,
        height: 40,
      },
      TeamViewHeaderFont1:{
        fontSize:25,
        color:"tomato",
        fontWeight:'500',
        padding:5,
        margin:5,
      },
      gridChild1:{
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
      },
      gridChild:{
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        justifyContent:'flex-start' ,
        flexDirection:'row',
        flexWrap:'wrap',
      },
      inputText:{
        height:50,
        alignItems: 'flex-start',
        fontSize:15,
        color:'black'
      },
      inputView:{
        width:"80%",
        borderRadius:5,
        height:30,
        marginBottom:20,
        justifyContent:"center",
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginLeft:10
       
    
      },
});