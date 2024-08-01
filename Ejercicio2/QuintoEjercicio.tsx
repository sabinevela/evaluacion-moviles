import React from 'react'
import { View, StyleSheet } from 'react-native'


export const QuintoEjercicio = () => {
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
        position:'absolute'
    },
    boxBlue: {
        width: 100,
        height: 760,
        backgroundColor: 'blue',
        borderWidth: 10,
        borderColor: '#bfc0e9',
        marginBottom: 10,
        position: 'absolute',
        top: 0,
        left: 9,
    },
    boxYellow: {
        width: 100,
        height: 750,
        backgroundColor: 'yellow',
        borderWidth: 10,
        borderColor: '#bfc0e9',
        marginBottom: 10,
        position: 'absolute',
        top: 0, 
        left: 120, 
    },
    boxSkyBlue: {
        width: 100,  
        height: 760,      
        backgroundColor: '#87CEEB',
        borderWidth: 10,
        borderColor: '#bfc0e9',
        position: 'absolute',
        top: 0, 
        left: 230, 
    }
});