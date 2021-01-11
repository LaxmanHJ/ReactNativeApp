import React, { Component, Children ,  useState } from 'react';  
import { View, Modal,
  Text,Alert, StyleSheet, TouchableHighlight,
  FlatList,Button, AsyncStorage,Image,TouchableOpacity, TextInput} 
  from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  


export default class TeamScreen extends React.Component { 
  state={
    modalVisible:false, 
    setModalVisible:false,
    searchTeamValue:'',
    teamName:'',
    teamLocation:'',
    teamLevel:'',
    teamId:'',
    userId:'',
  }
  componentDidMount() {
    this._loadInitialState().done();
  }

  // AsyncStorage for login data processing
  _loadInitialState=async()=>{
    var phone = await AsyncStorage.getItem('phone');
    this.setState({userId:phone})
    this.teamDetails();
  }

  teamDetails=()=>{
    console.log("Ranking algo is running");
    const data=this.state.userId;
    //const data = '7389';
    let endpoint = `http://localhost:8080/piedpiper/TeamRequest.php?phone=${encodeURIComponent(data)}`;
    fetch(endpoint, {
                method: 'GET',
                
            })
          .then((response) => response.json())
            .then((responseData) => {
                                    console.log(responseData);
                                    console.log(typeof(responseData.TeamId));
                                    if (responseData.msg=='success'){
                                    this.setState({
                                      teamName:responseData.name,
                                      teamLocation:responseData.Location,
                                      teamLevel:responseData.level,
                                      teamId:responseData.TeamId,
                                    })
                                  }else if(responseData.msg="NoTeamFound"){
                                    console.log(responseData.msg);
                                    this.setState({
                                    teamId:0,
                                    })

                                  }
                                   
            }).catch((error)=> {
              console.error("Error Message 1"+error)
            });
      }
  render() { 
    const isTeam = parseInt(this.state.TeamId);
    return (  
      <View style={styles.container}> 
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                  <TouchableHighlight
                    style={styles.openButton }
                    onPress={() => {
                      //this.state.setModalVisible(!this.state.modalVisible);
                      this.setState({modalVisible:!this.state.modalVisible});          

                    }}
                  >
                    <View style={styles.gridChild}>
                        <Text style={styles.modalText}>Cancel</Text>
                        <Text style={styles.modalText}>Create Team</Text>
                    </View>

                  </TouchableHighlight>

                  <View style={styles.inputView} >
                    <TextInput  
                      style={styles.input}
                      placeholder="Search Team..." 
                      placeholderTextColor="black"
                      onChangeText={searchTeamValue => this.setState({searchTeamValue})}/>
                  </View>
                    <Text style={styles.modalText}>{this.state.searchTeamValue} Team</Text>
                </View>
              </View>
            </Modal>

            <View style={styles.gridChild}>
                  <View style={styles.header}>
                        <Text style={styles.logo}>Team</Text>
                  </View>
                  <View style={styles.Iconsetter}>
                    <TouchableHighlight
                        onPress={() => {
                          this.setState({modalVisible:true});          
                          // Alert.alert("Modal has been opened.");
                      }}>
                     <Icon style={[{color: 'coral'}]} size={30} name={'ios-create'}/>
                    </TouchableHighlight>
                  </View> 
            </View>

            <View >
                  {(isTeam) != 0
                      ? 
                    <View style={styles.TeamView}>
                      <Text style={styles.TeamViewHeaderFont}>{this.state.teamName}</Text>
                      <Text>Level                       {this.state.teamLevel}</Text>
                      <Text>Location                    {this.state.teamLocation}</Text>

                    </View>
                     : 
                     <Text>No Team to Display</Text>
                }
               
            </View>     
        </View>
    );  
}  
}

const styles = StyleSheet.create({  
  container: {  
    flex: 1,
    marginTop: 40,
    padding:2  
  },
  TeamView:{
    padding:10,
    backgroundColor:'#c0c0c0'
  }, 
  TeamViewHeaderFont:{
    fontSize:30,

  },
  logo:{
    fontWeight:"bold",
    fontSize:40,
    color:"coral",
    marginBottom:10,
    padding:6,
  },
  header:{
    textAlign: 'right', 

  },
  Iconsetter:{
    marginTop:17,
  },
  gridChild:{
    marginLeft:20,
    marginRight:20,
    justifyContent:'space-between' ,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  Text:{
    fontSize:20,
    fontWeight:'500',
    padding:5,
    paddingRight:1,
    alignSelf: 'stretch'
  },
  modalView: {
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
   // backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "blue",
    alignSelf: 'flex-start'
    },
  modalText: {
    marginBottom: 5,
    color:"blue",
    fontSize:15,
  },
  inputView:{
    width:"90%",
    backgroundColor:"#c0c0c0",
    borderRadius:5,
    height:40,
    margin:10,
    justifyContent:"center",
    padding:2,
  },
  input:{
    padding:9,
  },
 
});  