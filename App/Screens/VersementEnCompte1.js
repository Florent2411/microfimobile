import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import { Icon } from '@rneui/themed'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import defaultStyles from '../components/defaultStyles';
import { Dropdown } from 'react-native-element-dropdown';

export default function VersementEnCompte1 (navigation) {

        const [value, setValue] = useState(null);
        // const {navigation} =this.props;
        const titlepage = 'Versement en compte';
        const TabcodeBanque =[
            { label: '00001', value: '1'},
            { label: '00002', value: '2'},
            { label: '00003', value: '3'},
            { label: '00004', value: '4'},
            { label: '00005', value: '5'},
        ];

            const renderItem = (item) => {
                return (
                    <View style={styles.item}>
                        <Text style={styles.textItem}>{item.label}</Text>
                        {item.value === value }
                    </View>
                );
            }

    return (
        <View style={defaultStyles.pageContainer}>
            <HeaderComponent pagetitle={titlepage}></HeaderComponent>
            <View style={styles.StepperContent}>
                <View style={styles.containStepper}>
                    <View style={styles.StepperCircle}>
                        <Text style={styles.stepText}>Etape 1</Text>
                    </View>
                    <View style={styles.titleStepper}>
                        <Text style={styles.TitreEtape}>Information sur le compte</Text>
                        <Text style={styles.stepInfo}>Remplir les champs du formulaire</Text>
                    </View>
                </View>
            </View>

            <View style={styles.formContainer}>
                    <View style={styles.formRow}>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle ={styles.placeholderStyle}
                            selectTextStyle = {styles.selectedTextStyle}
                            inputSearchStyle = {styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={TabcodeBanque}
                            search
                            maxHeight={300}
                            labelField = "Code banque"
                            valueField = "value"
                            placeholder = "Selectionner code banque"
                            value = {value}
                            onChange = {item => {
                                setValue(item.value);

                                renderItem = {renderItem}
                            }}

                        />
                    </View>
                    
                    <View style={styles.formRow}>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle ={styles.placeholderStyle}
                            selectTextStyle = {styles.selectedTextStyle}
                            inputSearchStyle = {styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={TabcodeBanque}
                            search
                            maxHeight={300}
                            labelField = "Code agence"
                            valueField = "value"
                            placeholder = "Selectionner  agence"
                            value = {value}
                            onChange = {item => {
                                setValue(item.value);

                                renderItem = {renderItem}
                            }}

                        />
                    </View>
                    
                    <View style={styles.formRow}>
                        <View style={defaultStyles.TextInputContainer}>
                            <FloatingLabelInput
                                style={defaultStyles.TextInput0}
                                label={'Numéro de compte'}
                                hint="Entez le numéro de compte "
                                // value={cont}
                                // onChangeText={value => setCont(value)}
                            />
                        </View>
                    </View>
                    
                    <View style={styles.formRow}>
                        <View style={defaultStyles.TextInputContainer}>
                            <FloatingLabelInput
                                style={defaultStyles.TextInput0}
                                label={'Clé du compte'}
                                hint="Entez la clé du compte "
                                // value={cont}
                                // onChangeText={value => setCont(value)}
                            />
                        </View>
                    </View>
                </View>

                    <View style={styles.containBtn}>
                        <TouchableOpacity onPress={() => navigation.navigate('etape2')} style={defaultStyles.firstBouton} >
                            <Text style={defaultStyles.boutonText}>Etape 2</Text>
                            <Icon name="chevron-right" type="entypo" size={25} color="#ffffff" style={styles.arrowDetail} ></Icon>
                        </TouchableOpacity> 
                    </View>
        </View>
    )
  
}

const styles = StyleSheet.create({
    StepperContent:{
        flexDirection:'column',
        justifyContent:'flex-start',
        // flex:1,
        // backgroundColor:'#000',
        marginTop:5,
        marginBottom:15
    },

    formContainer:{
        flexDirection:'column',
        justifyContent:'space-around',
        flex:1,
    },

    containStepper:{
        // backgroundColor:'#ddd',
        flexDirection:'row',
        height:80,
        alignItems:'center',
        // justifyContent:'space-around',
        paddingLeft:35,
        paddingRight:35,
    },

    StepperCircle:{
        width:70,
        height:70,
        borderRadius:70,
        backgroundColor:'#FF5900',
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
    },

    stepText:{
        color:'#ffffff',
        fontWeight:'800'
    },

    titleStepper:{
        flexDirection:'column',
    },

    TitreEtape:{
        fontSize:20,
        fontWeight:'600'
    },
    stepInfo:{
        opacity:.4,
        fontFamily:'RobotoItalic'
    },

    containBtn:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
    },

    formRow:{
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15,
    },
    dropdown: {
        height: 50,
        // backgroundColor: 'white',
        borderBottomWidth: 2,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        // paddingHorizontal: 10,
        paddingVertical: 15,
        borderColor: '#999999',
        borderRadius: 0,
        padding: 12,
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 1,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 1.41,
  
        // elevation: 2,
      },
      icon: {
        marginRight: 5,
      },
      item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }, 
      textItem: {
        flex: 1,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
        color:'#232323'
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
})