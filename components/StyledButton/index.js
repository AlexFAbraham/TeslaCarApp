//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// create a component
const StyledButtons = () => {
    return (
        <View style={styles.container}>
            <Pressable
            style={styles.button}
            onPress={() => {
                console.warn('Hey there')
            }}>
            <Text style={styles.text}>Custom Order  </Text>
            </Pressable>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding: 10,
       
    },
    button: {
        backgroundColor: 'black',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        

    },
    text:{
        fontSize: 12,
        fontWeight: "bold",
        color: "white",
        textTransform: 'uppercase'
    }
});

//make this component available to the app
export default StyledButtons;
