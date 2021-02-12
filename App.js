import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, resizeMode } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import CarItem from "./components/CarItem";
export default function App() {
  

  return (
    <View style={styles.container}>
      
      <CarItem/>

      <StatusBar style="auto" />
      
    </View>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
   
  },
      
});
