import React from 'react'
import { View,StyleSheet } from 'react-native'

export const PrimerEjercicio = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxBlue}></View> 
            <View style={styles.boxYellow}></View>
            <View style={styles.boxSkyBlue}></View>
    
        </View>
      )
    }
    //gestion de estilos
    const styles = StyleSheet.create({
        container: {
           flex: 1,
            width: 100,
            height: 300,
            marginTop: 45,
            alignItems: 'center',
            justifyContent: 'center', 
            position: 'absolute' 
        },
            boxBlue: {
                width: 100,
                height: 100,
                backgroundColor: 'blue',
                borderWidth: 10,
                borderColor: '#bfc0e9',
                position: 'absolute',
                top: 0,
                //alignSelf:'center',
                left:300,
                
            },
            boxYellow: {
                width: 100,
                height: 200,
                backgroundColor: 'yellow',
                borderWidth: 10,
                borderColor: '#bfc0e9',
                position: 'absolute',
                top: 100, 
                left:300, 
            },
            boxSkyBlue: {
                width: 100,
                height: 100,
                backgroundColor: '#87CEEB',
                borderWidth: 10,
                borderColor: '#bfc0e9',
                position: 'absolute',
                bottom:-100,
                left: 300, 
            }
        })
