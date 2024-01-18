import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

  const WelcomeScreen = props => {
    const [authLoaded, setAuthLoaded] = useState(false);

    useEffect(() =>{
      setTimeout(() =>{
        setAuthLoaded(true);
      }, 5000)
    }, []);

    useEffect(() =>{
      if (authLoaded) {
        props.navigation.replace('Onboarding');
      }
    }, [authLoaded, props.navigation]);
    return ( 
          <SafeAreaView style = {styles.container}> 
            <Animatable.View style={styles.containerWelcomText}>
              <Animatable.Text animation="slideInLeft" style={styles.welcomeText1}>Microfi</Animatable.Text>
              <Animatable.Text animation="slideInRight" style={styles.welcomeText2}>Collecte</Animatable.Text>
            </Animatable.View>
            <View style={styles.separator}></View>
            <Animatable.Text animation="zoomInUp" style={styles.textVersion}>v.1.0.1 Nov 2022</Animatable.Text>
          </SafeAreaView>
    
    );

  }
  
  const styles = StyleSheet.create({
      container: {
          backgroundColor:'#FF5900',
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
  
      
      containerWelcomText: {
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:5,
        height:50,
        alignItems:'center'
      },
  
      welcomeText1: {
        color:'#ffffff',
        fontSize:30,
        fontWeight:'800'
      },
  
      welcomeText2: {
        color:'#232323',
        fontSize:30,
        position:'relative',
        fontWeight:'800'
      },
  
      textVersion: {
        color:'#f1ebeb',
        fontSize: 13
      },
  
      separator: {
        backgroundColor:'#FFCAAD',
        width:180,
        height:8,
        borderRadius:24,
        marginBottom: 15,
        marginTop:5
      }
  
  });

  export default  WelcomeScreen;
