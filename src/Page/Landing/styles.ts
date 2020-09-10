import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#8265e5',
        justifyContent: "center",
        padding: 40,
    },
    banner: {
        width: '100%',
        resizeMode:'contain',
    },
    title:{
        fontFamily: 'Poppins_400Regular',
        color:'#fff',
        fontSize: 20,
        lineHeight:30,
        marginTop:10, //seria 80, porem saia da tela no Iphone SE
               
    },
    titleBold:{
        fontFamily:'Poppins_600SemiBold',
    },
    buttonsContainer:{
        flexDirection: "row",
        marginTop:30,
        justifyContent:'space-between',
    },
    button:{
        height:120,//era 150 mas no iPhone SE, dão dá
        width:'48%',
        backgroundColor:'#333',
        borderRadius: 11,
        paddingLeft:26,
        paddingRight:24,
        paddingTop:20,
        paddingBottom:20,
        justifyContent:'space-between'
    },

    buttonPrimary:{
        backgroundColor:'#9870F5',
    },
    buttonSecondary:{
        backgroundColor:'#50C371',
    },
    buttonText:{
        fontFamily:'Archivo_700Bold',
        color:'#fff',
        fontSize: 16,//era 20 mas no iPhone SE, dão dá
        lineHeight:25,

    },
    containerConnec:{
        alignItems:'center',
    },
    totalConnections:{
        fontFamily:'Poppins_400Regular',
        color:'#fff',
        fontSize:12,
        lineHeight:20,
        marginTop:20, //era 40 mas no iPhone SE, fica estranho
        //maxWidth:140, // sem fica melhor
        
    }


});

export default styles;