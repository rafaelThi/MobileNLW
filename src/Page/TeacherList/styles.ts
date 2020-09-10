import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f7',
        
    },
    teacherList:{
        marginTop:-30,
        
    },
    searchForm:{
        marginTop:10
    },
    label:{
        color:'#d4c2ff'
    },
    input:{
        height:40,
        backgroundColor: '#fff',
        paddingHorizontal:12,
        borderRadius:8,
        justifyContent:'center',
        marginTop:4,
        marginBottom:14,
    },
    inputGroup:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    inputBlock:{
        width:'48%'
    },
    submitButton:{
        backgroundColor:'#50C371',
        // maxWidth:24,
        height:45,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginBottom:10
    },
    TextSubmitButton:{
        fontSize:18,
        color:'#fff',
        fontFamily:"Archivo_700Bold"
    }

})

export default styles;
