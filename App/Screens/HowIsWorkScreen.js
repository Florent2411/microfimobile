import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { Icon } from '@rneui/themed';

export default class HowIsWorkScreen extends Component {
  render() {

    const titlepage = 'Comment ça marche ?';
    return (
            <View style={styles.pageContainer}>
                <HeaderComponent pagetitle={titlepage}></HeaderComponent>
                <View style={styles.containTuto}>

                    <View style={styles.tutoItem}>
                        <Icon  name="user" type="entypo" size={35} color="#DDDDDD" style={styles.tutoIllust} ></Icon>
                        <View style={styles.textTuto}>
                            <Text style={styles.tutoTitle}>Avoir un compte</Text>
                            <Text style={styles.tutoDesc}>Tout d'abord vous devez vous assurez d'avoir un compte valid d'agent aupres de la microfinance</Text>
                        </View>
                    </View>
                    
                    <View style={styles.tutoItem}>
                        <Icon  name="location" type="entypo" size={35} color="#DDDDDD" style={styles.tutoIllust} ></Icon>
                        <View style={styles.textTuto}>
                            <Text style={styles.tutoTitle}>Activer la géolocalisation</Text>
                            <Text style={styles.tutoDesc}>Rassurez-vous d'avoir toujours activé sur votre terminal la géolocalistion sans laquelle il vous sera impossible collecter.</Text>
                        </View>
                    </View>
                    
                    <View style={styles.tutoItem}>
                        <Icon  name="wallet" type="entypo" size={35} color="#DDDDDD" style={styles.tutoIllust} ></Icon>
                        <View style={styles.textTuto}>
                            <Text style={styles.tutoTitle}>Avoir des fonds</Text>
                            <Text style={styles.tutoDesc}>Afin d'effectuer les collectes vous devez avoir un solde supérieur ou égale à la somme que vous souhaité collecter.</Text>
                        </View>
                    </View>
                </View>
            </View>

    )
  }
}

const window = Dimensions.get('window');
const styles = StyleSheet.create({
    pageContainer:{
        flex:1,
        flexDirection:'column',
        marginBottom:5,
        justifyContent:'center',
        paddingTop:window.width / 2,
    }, 
    
    containTuto: {
      flex:1,
      alignItems:'center',  
    },
    
    tutoItem:{
        flexDirection:'row',
        borderBottomColor:'#DDDDDD',
        borderBottomWidth:1,
        margin:15,
        padding:25,
        justifyContent:'center',
        alignItems:'center'
    }, 

    tutoIllust: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    
    textTuto: {
        flex:1,
        flexDirection:'column',
        marginLeft:15
    },

    tutoTitle: {
        position:'absolute',
        fontSize:20,
        fontWeight:'600',
        color:'#333333',
        marginBottom:15
    },

    tutoDesc: {
        fontSize:15,
        color:'#999999',
        marginTop:30
    }



})