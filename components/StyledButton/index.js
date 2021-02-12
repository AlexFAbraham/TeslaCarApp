//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// create a component
const StyledButtons = (props) => {

    const {type} = props;
    const {content} = props;
    const {onPress} = props;
 
    
    const backgroundColor = type ==='primary'?'#171A20CC': '#FFFFFFA6'; 
    const textColor = type === 'primary'? '#FFFFFF': '#171A20'; 

    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={() => { props.onPress()}}>
            <Text style={[styles.text, {color: textColor}]}>{props.content}</Text>
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
