import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#e6e6fe',
        borderRadius:15,
        marginBottom: 8,
        overflow:'hidden',
        marginTop:1
    },
    profile:{
        flexDirection:'row',
        alignItems:'center',
        padding:10

    },
    avatar:{
        height:50,
        width:50,
        borderRadius:32,
        backgroundColor:'#eee'

    },
    profileInfo:{
        marginLeft:15,
    },
    name:{
        fontFamily:"Archivo_700Bold",
        fontSize:18,
        color:'#32264d'
        
    },
    subject:{
        fontFamily:'Poppins_400Regular',
        color:'#6a6180',
        fontSize:12,
        marginTop:3
    },
    bio:{
        marginTop:10,
        marginLeft:13,
        marginRight:15,
        marginBottom:5,
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:18,
        color:'#6a6180'

    },
    footer:{
        backgroundColor:'#fafafc',
        padding:0,
        paddingTop: 13,
        alignItems:'center',
        marginTop:-10
    },
    price:{
        color:'#6a3580',
        fontSize:14,
        fontFamily:'Poppins_400Regular',
    },
    cost:{
        color:'#8265e5',
        fontSize:16,
        fontFamily:"Archivo_400Regular",
    },
    buttonsContainer:{
        flexDirection:'row',
        margin:15
    },
    favoriteButton:{
        backgroundColor:'#8265e5',
        // maxWidth:24,
        width:45,
        height:45,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginRight:12,
    
    },
    favorited:{
        backgroundColor:'#e33d3d',
        
    },
    contactButton:{
        backgroundColor:'#04d361',
        // maxWidth:24,
        flex:1,
        height:45,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginRight:1,
    },
    contactBtText:{
        marginLeft:20,
        fontSize:16,
        color:'#fff',
        fontFamily:"Archivo_700Bold"
    }


})

export default styles;