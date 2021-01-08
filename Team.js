import React, { Component, Children } from 'react';  
import { View, Text, StyleSheet, FlatList,Button, AsyncStorage,Image,TouchableOpacity, TextInput} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  


export default class TeamScreen extends React.Component { 
  render() {  
    return (  
        <View style={styles.container}>  
            <Text>Team Screen</Text>  
        </View>  
    );  
}  
}

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center'  
  },  
});  