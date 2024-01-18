import { ImageBackground, Dimensions, Text, StyleSheet, View, Image,SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import img from '../assets/img'
import { BackgroundImage } from '@rneui/base';
import { Icon } from '@rneui/themed';

function HeaderComponent({ navigation, pagetitle }) {

    const bgtopimage = img.top_container;
    const pageTitleText = pagetitle;
    return (
            <View style={styles.TopContainerStyle} >
                <View style={styles.ShapeTopContainerStyle} >
                    <ImageBackground source={bgtopimage} resizeMode="contain" style={styles.ShapeContain} >
                        <View style={styles.NavContain}>
                            <TouchableOpacity  >
                                <Icon name="chevron-thin-left" type="entypo" size={25} color="#ffffff" style={styles.navBackIcone} />
                            </TouchableOpacity>
                            <Text style={styles.PageTile}>{pageTitleText}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
    )
}


const window = Dimensions.get('window');
const styles = StyleSheet.create({

    TopContainerStyle: {
        alignSelf: 'center',
        width: window.width,
        overflow: 'hidden',
        height: window.width / 2,
        position:'absolute',
        top:0,
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
    
    
    NavContain: {
        flexDirection:'row',
        alignItems:'center',
        position:'relative',
        top:100,
        padding:25,
        // backgroundColor:'#333333',
        
    },
    
    navBackIcone: {
        justifyContent:'center',
        color:'#FFFFFF',
    },
    
    PageTile: {
        flex:2,
        color:'#FFFFFF',
        textAlign:'center',
        justifyContent:'center',
        fontSize:24,
        fontWeight:'500',
    },

  

})

export default HeaderComponent