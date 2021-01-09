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
  }

  render() { 

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
  }
 
});  