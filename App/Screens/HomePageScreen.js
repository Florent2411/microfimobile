import { ImageBackground, Dimensions, Text, StyleSheet, View, Image,SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import img from '../assets/img'
import { BackgroundImage } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';



export default class HomePageScreen extends Component {
    
  render() {
    const {navigation} =this.props;
    const iconeSolde = img.solde_icone;
    const iconeProfile = img.user_profil;
    const iconeHistory = img.history_icone;
    const iconeHelp = img.help_icone;
    const iconeCollecte = img.collecte_icone;
    const bgtopimage = img.top_container;
    return (
    <View style = {styles.pageContainer}> 
        <View style={styles.TopContainerStyle} >
            <View style={styles.ShapeTopContainerStyle} >
                <ImageBackground source={bgtopimage} resizeMode="contain" style={styles.ShapeContain} >
                    <View style={styles.profileContainer}>
                        <Image source={iconeProfile} style={styles.ImageProfil} ></Image>
                    </View>
                    <View style={styles.userInfoContainer}>
                        <Text style={styles.usernameText}>User Name</Text>
                        <Text style={styles.phoneNumberText}>+237 6987654321</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
   

       <View style={styles.mainContainer}>
       <LinearGradient
            colors={['#FFFFFF', '#FF5900']}
            start={{x: 0, y: 0.5}}
            end={{x: 0.9, y: 1}} 
            style={styles.soldeContainer}>
            <View style={styles.iconeSoldeContainer}>
                <Image style={styles.iconeSold} source={iconeSolde}></Image>
            </View>
            <View style={styles.soldeTextContainer}>
                <Text style={styles.Soldetext}>Solde</Text>
                <Text style={styles.soldeAmountText}>100.000 XAF</Text>
            </View>
        </LinearGradient>
      
        <View style={styles.RaccourciIconeConttainer}>
            <TouchableOpacity style={styles.iconeContainer} onPress={() => navigation.navigate('collect')}>
                <Image style={styles.RacIcone} source={iconeCollecte}></Image>
                <Text style={styles.racText}>Effectuer Collecte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconeContainer} onPress={() => navigation.navigate('history')}>
                <Image style={styles.RacIcone} source={iconeHistory}></Image>
                <Text style={styles.racText}>Consulter historique</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconeContainer} onPress={() => navigation.navigate('howiswork')} >
                <Image style={styles.RacIcone} source={iconeHelp}></Image>
                <Text style={styles.racText}>Comment ça marche</Text>
            </TouchableOpacity>
        </View>
      </View> 

    </View>
    )
  }
}
const window = Dimensions.get('window');
const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor:'#FFFFFF',
        flex:1,
        flexDirection:'column',
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+25 : 0
    },

    TopContainerStyle: {
        alignSelf: 'center',
        width: window.width,
        overflow: 'hidden',
        height: window.width / 1
    },
    ShapeTopContainerStyle: {
        borderRadius: window.width,
        width: window.width * 2,
        height: window.width * 2,
        marginLeft: -(window.width / 2),
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden'
    },
    ShapeContain: {
        height: window.width / 1,
        width: window.width,
        position: 'absolute',
        bottom: 0,
        marginLeft: window.width / 2,
        backgroundColor: '#FF5900',
        justifyContent:'center',
        alignItems:'center',
    },

    
    mainContainer: {
        flex:1,
        flexDirection:'column',
        padding:5
    },
    
    soldeContainer: {
        height:100,
        borderRadius:15,
        flexDirection:'row',
        padding:5,
        margin:15,
        justifyContent:'center',
        alignItems:'center',
    },
    
    iconeSoldeContainer: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:15,
        padding:2,
        margin:5,
        width:60,
        height:60,

    },
   
    iconeSold: {
        width:50,
        height:50,
        
    },
   
    soldeTextContainer: {
        flex:1,
        flexDirection:'column',
        paddingRight: 15
    },
    
    Soldetext: {
        fontSize:20,
        fontWeight:'200',
        color:'#ffffff',
        textAlign:'right'
    },
    
    soldeAmountText: {
        textAlign:'right',
        fontSize:25,
        color:'#ffffff',
        fontWeight:'700'
        
    },


    
    profileContainer: {
        backgroundColor:'#FFFFFF',
        height:200,
        width:200,
        borderRadius:200,
        padding:2,
        marginBottom:15,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    
    ImageProfil: {
        width:180,
        height:180,
        position:'relative',
        top:5,
        opacity:0.5,
        borderRadius:100,
        backgroundColor:'#FFFFFF',
        
    },
    
    userInfoContainer: {
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        marginBottom:5,
        
    },
    
    usernameText: {
        fontSize:25,
        fontWeight:'800',
        justifyContent:'center',
        textAlign:'center',
        color:'#FFFFFF',
        marginBottom:5,
    },
    
    phoneNumberText: {
        color:'#FFFFFF',
        textAlign:'center',
        fontSize:16,
        justifyContent:'center',
    },

    RaccourciIconeConttainer: {
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        marginTop:15,
        alignItems:'flex-start',
        height:70,
    },

    iconeContainer:{
        margin:2,
        padding:5,
        flexDirection:'column',
        borderRightWidth:1,
        borderColor:'#dddddd',
        justifyContent:'center',
        alignItems:'center',
    },

    

    
    RacIcone:{
        width:50,
        height:50,
        marginBottom:5
    }, 
    
    racText:{
        textAlign:'center',
        width:100,
        fontSize:15, 
        color:'#979797'
    }

})