import React, { Component, Children } from 'react';  
import { View, Text, StyleSheet, FlatList,Button, AsyncStorage,Image,TouchableOpacity, TextInput} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  


export default class ImageScreen extends React.Component { 
  state={
    names:[],
    steps:[],
    userRanks:"",
  }
  
  componentDidMount() {
    this.rankingAlgo();
  }
  rankingAlgo=()=>{
    var newdata,newdata1,newdata2,objects,arrays;
    var nameArray =[];
    var stepsArray =[];
    var useridArray =[];

    console.log("Ranking algo is running")
    fetch('http://localhost:8080/piedpiper/ranking.php', {
                method: 'GET',
                
            })
          .then((response) => response.json())
            .then((responseData) => {
                                    newdata1 = responseData[0];
                                    console.log(newdata1,responseData);
                                    arrays = Object.keys(responseData).length;
                                    console.log("newdata1 responsejson"+arrays);

                                   var  finalArray = responseData.map(function (obj) {
                                      console.log(obj.name,obj.steps,obj.userid);
                                      nameArray.push(obj.name)
                                      stepsArray.push(obj.steps)
                                      useridArray.push(obj.userid)
                                      console.log(nameArray)

                                    });
                                    console.log(nameArray)
                                 
                                    this.setState({
                                      names:nameArray,
                                      steps:stepsArray,
                                      userRanks:arrays,
                                    })
                                   

            }).catch((error)=> {
              console.error("Error Message 1"+error)
            });
      }
    
  
  


  render() {  
    const {names,steps,userRanks} = this.state;
    var rankList=[]
    for(let i = 1; i <= userRanks; i++){
      rankList.push(i);

    }
      return (  
      <View style={styles.container}>
            <Text style={styles.logo}>Rankings</Text>
           
            <View style={styles.gridParent}> 
                <View style={styles.gridChild}>
                    <View>
                      <View style={styles.stepscontainer}> 
                        <Text style={styles.showtext}>Player</Text></View>
                            { names.map((item, key)=>(
                              <Text key={key} style={styles.TextStyle}> { item } </Text>                      
                          )
                          )}
                      </View>
                      <View>
                      <View style={styles.stepscontainer}> 
                         <Text style={styles.showtext}>Steps</Text></View>
                            { steps.map((item, key)=>(
                                <Text key={key} style={styles.TextStyle}> { item } </Text>
                            )
                            )}
                      </View>
                      <View>
                      <View style={styles.stepscontainer}> 
                           <Text style={styles.showtext3}>Rank</Text></View>
                                  {rankList.map((item, key)=>(
                                      <Text key={key} style={styles.TextStyle}> #{ item } </Text>                              
                                  )
                                  )}
                    </View>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  TextStyle:{
    padding:5,
    fontSize:20,
    width:"100%"
  },
  logo:{
    fontWeight:"bold",
    fontSize:40,
    color:"coral",
    marginBottom:20,
    padding:10,
  },
  
  showtext:{
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
  stepscontainer:{
    borderRadius:5,
    //paddingLeft:10,
   // backgroundColor:"moccasin",
    width:"100%",
    padding:3

  },
  gridParent:{
    
  },
  gridChild:{
    justifyContent: 'space-around',
    flexDirection:'row',
    flexWrap:'wrap',
  }
});