import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import styles from './styles'
import StyledButtons from '../StyledButton'
const CarItem= (props) =>{

  const {name, tagline, image, taglineCTA} = props;
    
        return (
            <View style={styles.carContainer}>

      <ImageBackground source={props.image}
                       style={styles.image}/>

          <View style={styles.titles}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.subtitle}>{props.tagline}
            <Text style={styles.subtitleCTA}>
              {props.taglineCTA}
            </Text></Text>
          </View>

          <View style={styles.buttonsContainer}>

          <StyledButtons type="primary" 
                         content={"Custom Order  "}
                          onPress={()=> {
                            console.warn("Custom Order was pressed");
                          }}/>
          <StyledButtons type="secondary" 
                         content={"Existing Inventory  "}
                          onPress={()=> {
                            console.warn("Existing Inventory was pressed");
                          }}/>      
          </View>
                    
         
      </View>
        )
    
}

export default CarItem
