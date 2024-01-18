import React, { Component } from 'react'
import {Dimensions, StyleSheet} from 'react-native'


const window = Dimensions.get('window');
const defaultStyles = StyleSheet.create({
    pageContainer:{
        flex:1,
        flexDirection:'column',
        marginBottom:5,
        justifyContent:'center',
        paddingTop:window.width / 2,
    },


    tabRow:{
        flexDirection:'row',
        justifyContent:'space-between',
    },

    RowColContainer:{
        flexDirection:'row',
        flex:1,
        height:40,
        margin:5,
        padding:10,
        backgroundColor:'#E1E6F0'
    },

    RowLabelText:{
        fontSize:18,
        fontWeight:'600',
        color:'#ABABAB',
        flexWrap:'nowrap',
        opacity:.5
    },
    
    RowLabelValueText:{
        fontSize:18,
        fontWeight:'800',
        flexWrap:'nowrap',

    },

    firstBouton: {
        backgroundColor:'#FF5900',
        flexDirection:'row',
        alignItems:'center',
        height:55,
        paddingLeft:25,
        paddingRight:25,
        // width:'85%',
        marginBottom:25,
        marginTop:15,
        borderRadius:48,
        justifyContent:'center'
      },
      
      boutonText: {
        color:'#ffffff',
        lineHeight:16,
        textAlign:'center',
        fontWeight:'600',
        fontSize:18,
      },
  
  
      containerAppName: {
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:5,
        height:50,
      },
  
      AppNameText1: {
        color:'#090A0A',
        fontSize:30,
        fontWeight:'800'
      },
  
      AppNameText2: {
        color:'#FF5900',
        fontSize:30,
        position:'relative',
        fontWeight:'800'
      },
  
  
      bottomRaccourcis2: {
        color:'#FF5900',
        fontSize: 17,
        lineHeight:24,
        fontWeight:'300',
        position:'relative',
      },
      
      bottomRaccourcisContainer: {
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          marginBottom:15,
          marginRight:25,
          marginLeft:25,
          height:50,
        },
        
        CheckBoxContenair: {
        alignItems:'center',
        flexDirection:'row',
        flex:1
      },
        
      checkbox: {
        alignSelf:'center',
      },
      
      label:{
        color:'#999999',
        fontSize:15
      },
  
      raccourciLinkContainer: {
        flex:1,
        alignItems:"flex-end"
    },
  
      FormContainer:{
          alignItems:'center',
          // justifyContent:'center',
          marginTop:5,
          marginBottom:5,
      },
      
      inputView: {
          // backgroundColor: "#FFC0CB",
          width: "85%",
          height: 50,
          marginBottom: 40,
          alignItems: "center",
        },
      
    inputView2: {
          // backgroundColor: "#FFC0CB",
          width: "100%",
          height: 50,
          marginBottom: 40,
          alignItems: "flex-start",
        },
        
        TextInput: {
          height: 50,
          flex: 1,
          padding: 10,
          marginLeft: 25,
        },
        
        TextInput0: {
          height: 50,
          flex: 1,
          padding: 10,
        },

        TextInputContainer:{
          margin:0
        }
});


export default defaultStyles;