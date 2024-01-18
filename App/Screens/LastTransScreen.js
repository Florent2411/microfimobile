import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import defaultStyles from '../components/defaultStyles';


export default class LastTransScreen extends Component {
  render() {
    
    const {navigation} =this.props;
    const titlepage = 'Détails transactions';
    // const [cont, setCont] = useState('');
    return (
        <View style={defaultStyles.pageContainer}>
            <HeaderComponent pagetitle={titlepage}></HeaderComponent>
            <View style={styles.containHist}>
                <View style={styles.ExplainTextContain}>
                    <Text style={styles.ExplainText}>Pour envoyer historique des 5 dernières transactions</Text>
                </View>
                <View style={styles.FormHistory}>
                    <View style={defaultStyles.inputView2}>
                        <FloatingLabelInput
                            style={defaultStyles.TextInput}
                            label={'Téléphone Client'}
                            hint="Entez le numéro du client"
                            // value={cont}
                            // onChangeText={value => setCont(value)}
                        />
                    </View>
                    <View style={styles.containBtn}>
                        <TouchableOpacity onPress={() => navigation.navigate('homepage')} style={defaultStyles.firstBouton} >
                            <Text style={defaultStyles.boutonText}>Envoyer</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({

    containHist:{
        flexDirection:'column',
        position:'relative',
        flex:1,
        margin:15,
        alignContent:'center',
        justifyContent:'center',
    },

    ExplainTextContain:{
        flexDirection:'row',
    },

    ExplainText:{
        fontFamily:'RobotoBold',
        fontSize:30,
        flex:1,
        flexWrap:'wrap',
        color:'#333333',
        fontSize:35
    },

    FormHistory:{
        marginTop:20,
        flex:'column',
        justifyContent:'center',
        alignItems:'center'
    },

    containBtn:{
        flexDirection:'row',
        flex:1,
    }

    
});