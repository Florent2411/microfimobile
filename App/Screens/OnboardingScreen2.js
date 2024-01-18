import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image,SafeAreaView, Platform, StatusBar, Text } from 'react-native';

function OnboardingScreen1({ navigation }) {
    return (
        <SafeAreaView style = {styles.pageContainer}> 
            <View style={styles.containerWelcomText}>
                <Text style={styles.welcomeText1}>Microfi</Text>
                <Text style={styles.welcomeText2}>Collecte</Text>
            </View>
            <View style={styles.onboardingImageContainer}>
                <Image source={require('../assets/one-click-illst.png')}  style = {styles.onboardingImage}/>
            </View>
            <View style={styles.onboardingTextContainer}>
                <Text style={styles.onboardingText}>Save time and get feedback in a click</Text>
                 <TouchableOpacity style={styles.firstBouton} onPress={() => navigation.replace('Onboarding3')}>
                      <Text style={styles.boutonText} >Next</Text>
                </TouchableOpacity>
                <View style={styles.bottomRaccourcisContainer}>
                    <Text style={styles.bottomRaccourcis1}>Have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.bottomRaccourcis2} >Log in</Text>
                    </TouchableOpacity>
                </View>
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
      textAlign:'center'
    },
    
    firstBouton: {
      backgroundColor:'#FF5900',
      height:50,
      width:225,
      marginBottom:5,
      marginTop:5,
      borderRadius:48,
      justifyContent:'center'
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