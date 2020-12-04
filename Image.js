import React, { Component, Children } from 'react';  
import { View, Text, StyleSheet, Button, AsyncStorage,Image,TouchableOpacity, TextInput} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  


export default class ImageScreen extends React.Component { 
  state={
    responseObject:[],
  }
  
  componentDidMount() {
    this.rankingAlgo();
  }
  rankingAlgo(){
    var newdata,newdata1,newdata2,objects,arrays;
    console.log("Rankinf algo is running")
    fetch('http://localhost:8080/piedpiper/ranking.php', {
                method: 'GET',
                
            })
          .then((response) => response.json())
            .then((responseData) => {
                                      
                                     newdata = JSON.stringify(responseData)
                                     newdata2 = JSON.parse(newdata)
                                    //  newdata1 = Object.keys(newdata2).map(key => ({[key]: newdata2[key]}))
                                     console.log("newdata1 responsejson"+responseData[0]);

                                    console.log('response object:'+JSON.stringify(responseData))
                                    this.setState({
                                      responseObject:newdata
                                    })
                                    // if (responseData.msg=="insertion_tracks_ok"){
                                    //   alert(" Inserting to tracks is success")
                                    // }
                                    // else if(responseData=="insertion_tracks_failed"){
                                    //   alert("Inserting to tracks is failed")

                                    // }
                                    // else {
                                    // alert("Idk What happend")
                                    // }

            }).catch((error)=> {
              console.error("Error Message 1"+error)
            });
      }
    
  
  


  render() {  
    const {responseObject} = this.state;
      return (  
      <View style={styles.container}>
            <Text style={styles.logo}>Rankings</Text>
            <View style={styles.stepscontainer}> 
                 <View style={styles.flexcontainer}>
                      <Text style={styles.showtext}>Player</Text>
                      <Text style={styles.showtext2}>Steps</Text>
                      <Text style={styles.showtext3}>Rank</Text>

                  </View>
                 {/* {responseObject.map((values,i) =>(
                   <Card key={i}>
                     <Text>{values.steps}</Text>
                   </Card>
                 ))
                 } */}
                 <Text>{responseObject}</Text>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:40,
    color:"coral",
    marginBottom:20,
    padding:10,
  },
  stepscontainer:{
    borderRadius:10,
    paddingLeft:10,
    backgroundColor:"moccasin",
    width:"100%",
    paddingTop:2

  },
  showtext:{
    fontSize:15,
    color:"tomato",
    fontWeight:'500',
    padding:5,
    
  },
  showtext2:{
    fontSize:15,
    color:"tomato",
    fontWeight:'500',
    padding:5,
  },
  showtext3:{
    fontSize:15,
    color:"tomato",
    fontWeight:'500',
    padding:5,
    paddingRight:1,
    textAlign: 'right', 
    alignSelf: 'stretch'
    //justifyContent:'flex-end'

  },
  flexcontainer:{
    // width: '40%',
    justifyContent: 'space-around',
    flexDirection:'row',
    flexWrap:'wrap',
    // alignSelf:'center'
   // justifyContent:'flex-start'
  }

});