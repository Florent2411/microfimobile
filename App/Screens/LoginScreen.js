import React, { useState, useEffect } from 'react';
import { 
        View, 
        StyleSheet, 
        Image, 
        SafeAreaView, 
        Platform, 
        StatusBar, 
        Text, 
        TextInput,
        TouchableOpacity, 
    }  from 'react-native';
import { CheckBox } from '@rneui/themed';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { setGlobalStyles } from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/FontAwesome';


function LoginScreen({ navigation }) {
    const ShowIcon = <Icon name="eye" size={18} color="#ABABAB" />;
    const HideIcon = <Icon name="eye-slash" size={18} color="#ABABAB" />;
    const [cont, setCont] = useState('');
    const [show, setShow] = useState(false);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //     setShow(!show);
    //     }, 5000);
    //     return () => clearTimeout(timeout);
    // }, [show]);

      
    return (
        <SafeAreaView style = {styles.pageContainer}> 
            <View style={styles.containerAppName}>
                <Text style={styles.AppNameText1}>Microfi</Text>
                <Text style={styles.AppNameText2}>Collecte</Text>
            </View>
            <View style={styles.FormContainer}>
                <View style={styles.PageTitleContainer}>
                    <Text style={styles.pageTitle}>Log In</Text>
                </View>
                <View style={styles.inputView}>
                    <FloatingLabelInput style={styles.TextInput}
                        label={'email'}
                        hint="Enter you email address"
                        // onChangeText={(email) => setEmail(email)}
                    />
                </View>
                    
                <View style={styles.inputView}>
                    <FloatingLabelInput
                        style={styles.TextInput}
                        label={'password'}
                        hint="Enter you password"
                        isPassword
                        togglePassword={show}
                        value={cont}
                        onChangeText={value => setCont(value)}
                        customShowPasswordComponent={ShowIcon}
                        customHidePasswordComponent={HideIcon}
                    />
                </View>
                <View style={styles.bottomRaccourcisContainer}>
                  <View style={styles.CheckBoxContenair}>
                    <CheckBox  style={styles.checkbox} />
                      <Text style={styles.label}>Remember Me</Text>
                  </View>
                  <View style={styles.raccourciLinkContainer}>
                      <Text style={styles.bottomRaccourcis2}>Forgot Password ?</Text>
                  </View>
                </View> 
                <TouchableOpacity onPress={() => navigation.navigate('homepage')} style={styles.firstBouton} >
                    <Text style={styles.boutonText}>Login</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
    );
}

export default LoginScreen;

setGlobalStyles.containerStyles = {
  borderWidth: 1,
  borderTopWidth:0,
  borderLeftWidth:0,
  borderRightWidth:0,
  // paddingHorizontal: 10,
  paddingVertical: 15,
  borderColor: '#999999',
  borderRadius: 0,
  // any styles you want to generalize to your input container
};
setGlobalStyles.labelStyles = {
  color: '#232323',
  fontSize:15,
  
  // any styles you want to generalize to your floating label
};
setGlobalStyles.inputStyles = {
  color: '#383',
  // any styles you want to generalize to your input
};

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor:'#F5F5F5',
        flex:1,
        flexDirection:'column',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight+25 : 0
    },

    PageTitleContainer: {
        alignItems:'center',
        justifyContent:'center',
        marginBottom:90,
        marginTop:15,
    },
   
    
    pageTitle: {
      color:'#232323',
      fontSize:26,
      textAlign:'center'
    },
    
    firstBouton: {
      backgroundColor:'#FF5900',
      height:55,
      width:'85%',
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
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 25,
      }

});