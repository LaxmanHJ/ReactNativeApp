
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

export default class createTeam extends React.Component {
    state={
        teamName:"",
        teamDes:"",
    }
   render(){
    return (
        <View style={styles.container}>
            <View style={styles.SectionStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileScreen')} >
                    <Icon name={'ios-arrow-back'} size={22} color='coral' style={{marginLeft: '3%',paddingTop:'50%'}}/>
                    </TouchableOpacity> 
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
    SectionStyle: {
        flexDirection: 'row',
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