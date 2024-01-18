import { Text, StyleSheet, View, Dimensions } from 'react-native'
import React, { Component } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import tabHist from '../data/tabHist';

export default class DetailsCollectScreen extends Component {
  render() {
    const idhist = this.props.route.params.id;
    const itemtabhist = tabHist.find(obj => {
        return (obj.id === idhist);
    });

    // console.log(itemtabhist);
    const username = itemtabhist.nom;
    const amount = itemtabhist.montant +' '+ itemtabhist.devise;
    const noCompte = itemtabhist.account;
    const date = itemtabhist.date;
    const ref = itemtabhist.reference;
    const titlepage = 'Détails transactions';
    return (
        <View style={styles.pageContainer}>
            <HeaderComponent pagetitle={titlepage}></HeaderComponent>
            <View style={styles.DetailsCollectContain}>
                <View style={styles.tabRow}>
                    <View style={styles.RowColContainer}>
                        <Text style={styles.RowLabelText}>Titulaire</Text>
                    </View>
                    <View style={styles.RowColContainer}>
                        <Text style={styles.RowLabelValueText}>{username}</Text>
                    </View>
                </View>
                
                <View style={styles.tabRow}>
                    <View style={styles.RowColContainer}>
                        <Text style={styles.RowLabelText}>Versement</Text>
                    </View>
                    <View style={styles.RowColContainer}>
                        <Text style={styles.RowLabelValueText}>{amount}</Text>
                    </View>
                </View>
                
                <View style={styles.tabRow}>
                    <View style={styles.RowColContainer}>
                        <Text style={styles.RowLabelText}>Compte</Text>
                    </View>
                    <View style={styles.RowColContainer}>
                        <Text style={styles.RowLabelValueText}>{noCompte}</Text>
                    </View>
                </View>
                
                <View style={styles.tabRow}>
                    <View style={styles.RowColContainer}>
                        <Text style={styles.RowLabelText}>Date</Text>
                    </View>
                    <View style={styles.RowColContainer}>
                        <Text style={styles.RowLabelValueText}>{date}</Text>
                    </View>
                </View>
                
                <View style={styles.tabRow}>
                    <View style={styles.RowColContainer}>
                        <Text style={styles.RowLabelText}>Reference</Text>
                    </View>
                    <View style={styles.RowColContainer}>
                        <Text style={styles.RowLabelValueText}>{ref}</Text>
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

    DetailsCollectContain:{
        flexDirection:'column',
        flex:1,
        alignItems:'center',
        padding:15
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

    }
});