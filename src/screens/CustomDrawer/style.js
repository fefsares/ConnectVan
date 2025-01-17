import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        height:100, 
        width:'94%',
        marginLeft:8,
        justifyContent:'center', 
        backgroundColor:'#ffb300',
        borderRadius:10
    },
    viewMae:{
        flexDirection:'row', 
        padding:5,
        alignItems:'center',
    },
    imagem:{
        width:83, 
        height:83,
        borderRadius:40,
    },
    nome:{
        fontWeight:'bold', 
        fontSize:17, 
        marginLeft:'5%', 
        lineHeight:22, 
        color:'white'
    },
    email:{
        fontSize:13, 
        marginLeft:'5%', 
        color:'white'
    },
    imageBackground:{
        width: '100%',
        height: '100%',
    },
    viewLogOut:{
        padding:22, 
        borderTopWidth:1, 
        borderTopColor:'#ccc'
    },
    textSair:{
        marginLeft:5, 
        fontWeight:'bold', 
        color:'white'
    },
    logOut:{
        backgroundColor:'#ffb300', 
        flexDirection:'row',
        borderRadius:25, 
        width:95,
        height:42, 
        alignItems:'center', 
        justifyContent:'center',
    },
})

export default styles