import { FlatList, Text, ImageBackground, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { Icon } from '@rneui/themed'
import img from '../assets/img'
import * as Animatable from 'react-native-animatable';
import tabHist from '../data/tabHist'

export default class HistoryScreen extends Component {
  
  
  render() {
    
    const {navigation} =this.props;
    const myListEmpty = () => {
      return (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.nodataText}>No data found</Text>
        </View>
      );
    };
    const HistoryListComponent = () => {
    
      return (
        <FlatList
          data={tabHist}
          renderItem={({ item }) => 
            // <Text style={styles.item}>{item.nom}</Text>
                <TouchableOpacity style={styles.historyrow} onPress={() => navigation.navigate('DetailCollecte', {id:item.id})}>
                  <View style={styles.leftrowHist}>
                    <Text style={styles.clientNameText}>{item.nom}</Text>
                    <Text style={styles.dateTransfText}>{item.date}</Text>
                  </View>
                  <View style={styles.rightHist}>
                    <Text style={styles.amountTransfText} >{item.montant}  {item.devise}</Text>
                    <Icon name="chevron-right" type="entypo" size={35} color="#DDDDDD" style={styles.arrowDetail} ></Icon>
                  </View>
                </TouchableOpacity>
          }
          keyExtractor={(item) => item.id}
          // ItemSeparatorComponent={myItemSeparator}
          ListEmptyComponent={myListEmpty}
        />
      )
    }
    
    const titlepage = 'Historique des transactions';
    const bghistoryicone = img.bghisticone
    
    return (
      <View style={styles.pageContainer}>
        <HeaderComponent pagetitle={titlepage}></HeaderComponent>
        <View style={styles.histComponentComponent}>
           <HistoryListComponent style={styles.histListContain}></HistoryListComponent> 
        </View>
        <TouchableOpacity style={styles.last5histContainer} onPress={() => navigation.navigate('LastTransfert')}>
          <ImageBackground source={bghistoryicone} resizeMode="cover" style={styles.circleIcone} > 
              <View style={styles.circleTextContainer}>
                  <Text style={styles.text5}>5</Text>
              </View>
          </ImageBackground>
        </TouchableOpacity>
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

    nodataText:{
      color:'#333333',
      fontSize:15
    },

    
    
    histListContain:{
      // flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      flex:4,
      flexDirection:'row',
      padding:15
    },

    historyrow:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      margin:15,
      paddingBottom:15,
      borderBottomColor:'#dddddd',
      borderBottomWidth:1,
      
    },

    leftrowHist:{
      flexDirection:'column',
      flex:1,
      alignItems:'flex-start',
    },

    rightHist:{
      flexDirection:'row',
      flex:1,
      justifyContent:'flex-end',
      alignItems:'center',
    },
    
    clientNameText:{
      fontSize:18,
      fontWeight:'400',
      marginBottom:5,
      color:'#686777',
      fontFamily:'RobotoMedium'
    },

    dateTransfText:{
      fontSize:14,
      opacity:.5,
      fontWeight:'300',
      color:'#686777',
      fontFamily:'RobotoRegular'
    },

    amountTransfText:{
      fontSize:20,
      flexWrap:'nowrap',
      fontWeight:'600',
      color:'#FF5900',
      marginRight:5,
      fontFamily:'RobotoBlack'
    },

   

    last5histContainer:{
      flex:1,
      alignItems:'center',
      position:'relative',
      justifyContent:'center',
      bottom:25,
      // backgroundColor:'#333'
    },

    circleIcone:{
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      height:110,
      width:110
    },

    circleTextContainer:{
      position:'absolute',
      justifyContent:'center',
      alignItems:'center',
      zIndex:1,
      backgroundColor: '#FF5900',
      borderRadius:80,
      height:80,
      width:80,
    },

    text5:{
      position:'relative',
      justifyContent:'center',
      alignItems:'center',
      fontSize:35,
      fontWeight:'800',
      color:'#FFFFFF'
    }








  });
