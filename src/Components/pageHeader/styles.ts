import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        paddingTop:25,
        paddingBottom:30,
        paddingEnd:25,
        paddingStart:25,//era padding:40, mas ajustes foram necessarios
        backgroundColor: '#8265e5',
        
    },
    topBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between'   
    },
    title:{
        fontFamily: 'Archivo_700Bold',
        fontSize:24, 
        color:'#fff',
        lineHeight:25,
        maxWidth:180,
        // erra esse /marginVertical:25,/, mas preferi os dois pelo ajuste 
        padding: 18,
        paddingLeft:0,

    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
   

});

export default styles;