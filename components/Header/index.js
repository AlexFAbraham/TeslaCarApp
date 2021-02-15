//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

// create a component
const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
            
            <Image style={styles.menu} source={require('../../assets/images/menu.png')}/>



        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20
    },
    logo:{
        width: 100,
        height: 100,
        resizeMode: 'contain',

    },
    menu:{
        width: 25,
        height: 25,
        top: 36,
       // resizeMode: 'contain',

    }
});

//make this component available to the app
export default Header;
