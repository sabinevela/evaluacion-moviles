import React from 'react';
import { View, StyleSheet } from 'react-native';


export const OctavoEjercicio = () => {
  return (
    <View style={styles.container}>
    <View style={styles.boxBlue}></View> 
    <View style={styles.boxYellow}></View>
    <View style={styles.boxSkyBlue}></View>
  </View>

  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 45,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column', 
    },
    boxBlue: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      borderWidth: 10,
      borderColor: '#bfc0e9',
      marginBottom: 10,
      top:450,
      right:100
      
    },
    boxYellow: {
      width: 100,
      height: 100,
      backgroundColor: 'yellow',
      borderWidth: 10,
      borderColor: '#bfc0e9',
      marginBottom: 10,
      top:340,
      left:100,
    },
    boxSkyBlue: {
      width: 100,
      height: 100,
      backgroundColor: '#87CEEB',
      borderWidth: 10,
      borderColor: '#bfc0e9',
      top:250
    },
  });
  
