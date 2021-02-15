//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import CarItem from "../CarItem";
import cars from './cars';


// create a component
const CarsList = (props) => {
    return (

        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={({item}) => <CarItem car={item}/>}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get("screen").height}
            //showsVerticalScrollIndicator={false}
            />
        </View>

    );
};


// define your styles
const styles = StyleSheet.create({
    container: {
        
       width: '100%',
        
    },
});

//make this component available to the app
export default CarsList;
