import React from 'react'
import { View, StyleSheet } from 'react-native'


export const SextoEjercicio = () => {
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
        width: 400,
        height: 270,
        backgroundColor: 'blue',
        borderWidth: 10,
        borderColor: '#bfc0e9',
        marginBottom: 10,
        position: 'absolute',
        top: 0,
        left: 9,
    },
    boxYellow: {
        width: 800,
        height: 240,
        backgroundColor: 'yellow',
        borderWidth: 10,
        borderColor: '#bfc0e9',
        marginBottom: 10,
        position: 'absolute',
        top: 277,  
    },
    boxSkyBlue: {
        width: 800,  
        height: 300,      
        backgroundColor: '#87CEEB',
        borderWidth: 10,
        borderColor: '#bfc0e9',
        position: 'absolute',
        top:510,
    }
});