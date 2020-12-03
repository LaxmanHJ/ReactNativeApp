import React, { Component, Children } from 'react';  
import { View, Text, StyleSheet, Button, AsyncStorage,Image,TouchableOpacity, TextInput} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  


export default class ImageScreen extends React.Component {  
  render() {  
      return (  
          <View style={styles.container}>  
              <Text>Cart Screen</Text>  
          </View>  
      );  
  }  
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'white',
  
  },
});