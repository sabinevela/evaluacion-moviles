import React from 'react'
import { View, StyleSheet } from 'react-native'

export const CuartoEjercicio = () => {
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
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 10,
        borderColor: '#bfc0e9',
        marginBottom: 10,
        alignSelf: 'flex-start', 
        position: 'absolute',
        top: 0, 
        left: 9, 
    },
    boxYellow: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        borderWidth: 10,
        borderColor: '#bfc0e9',
        marginBottom: 10,
        alignSelf: 'center', 
        position: 'absolute',
        bottom:-400,
        left: '150%', 
        
    },
    boxSkyBlue: {
        width: 100, 
        height: 100,
        backgroundColor: '#87CEEB',
        borderWidth: 10,
        borderColor: '#bfc0e9',
        alignSelf: 'flex-end', 
        bottom:-700,
        left: 300, 
    }
})    