import { StyleSheet } from 'react-native';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Archivo_700Bold, Archivo_400Regular } from '@expo-google-fonts/archivo';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#8265e5',
        justifyContent: "center",
        padding: 40,
    },
    content:{
    flex: 1,
    justifyContent:'center',
},
title:{
fontFamily: 'Archivo_700Bold',
color: '#fff',
fontSize: 32,
lineHeight: 37,
maxWidth: 180,
},
description:{
    margin:24,
    color:'#d4c2ff',
    fontSize:16,
    lineHeight:26,
    fontFamily: 'Poppins_400Regular',
    maxWidth:240,
},
okButton:{
    margin:20,
    backgroundColor:'#50C371',
    height:58,
    width: '80%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8
},
okButtonText:{
    color:'#fff',
    fontSize:17,
    fontFamily: 'Archivo_400Regular',
},

});

export default styles;