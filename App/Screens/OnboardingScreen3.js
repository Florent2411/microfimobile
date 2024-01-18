import React from 'react';
import { View, StyleSheet, TouchableOpacity,  Image,SafeAreaView, Platform, StatusBar, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
function OnboardingScreen1({ navigation }) {
    return (
        <SafeAreaView style = {styles.pageContainer}> 
            <View style={styles.containerWelcomText}>
                <Text style={styles.welcomeText1}>Microfi</Text>
                <Text style={styles.welcomeText2}>Collecte</Text>
            </View>
            <View style={styles.onboardingImageContainer}>
                <Image source={require('../assets/secure-otp.png')}  style = {styles.onboardingImage}/>
            </View>
            <View style={styles.onboardingTextContainer}>
                <Text style={styles.onboardingText}>Transaction are secure with OTP verification</Text>
                <Animatable.View  animation="slideInDown" direction="alternate" easing="ease-out" iterationCount={3}>
                  <TouchableOpacity style={styles.secondBouton} onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.boutonText} >Get Started</Text>
                  </TouchableOpacity>
                </Animatable.View>
            </View>
    </SafeAreaView>
    );
}

export default OnboardingScreen1;

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor:'#F5F5F5',
        flex:1,
        flexDirection:'column',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+25 : 0
    },

    onboardingImageContainer: {
        alignItems:'center',
        justifyContent:'center'
    },
   
    onboardingImage: {
        width:250,
        height:350,
        alignItems:'center',
        justifyContent:'center'
    },
    
    onboardingTextContainer: {
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
      marginBottom:5,
      marginTop:5,
      height:300,
      textAlign:'center'
    },
    
    onboardingText: {
      color:'#232323',
      fontSize:26,
      paddingHorizontal:23,
      fontWeight:'800',
      height:100,
      textAlign:'center',
      position:'relative',
      top:-15
    },
    
    
    secondBouton: {
      backgroundColor:'#090A0A',
      height:50,
      width:225,
      marginBottom:5,
      marginTop:5,
      borderRadius:48,
      justifyContent:'center',
    },
    
    boutonText: {
      color:'#ffffff',
      fontSize:16,
      lineHeight:16,
      textAlign:'center'
    },


    containerWelcomText: {
      flexDirection:'row',
      flex:1,
      justifyContent:'center',
      marginBottom:5,
      height:50
    },

    welcomeText1: {
      color:'#090A0A',
      fontSize:30,
      fontWeight:'800'
    },

    welcomeText2: {
      color:'#FF5900',
      fontSize:30,
      position:'relative',
      fontWeight:'800'
    },

    bottomRaccourcis1: {
      color:'#232323',
      fontSize: 15,
      lineHeight:24
    },

    bottomRaccourcis2: {
      color:'#FF5900',
      fontSize: 15,
      lineHeight:24,
      position:'relative',
      left:5
    },
    
    bottomRaccourcisContainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
        marginBottom:5,
        height:60
    },

 

});