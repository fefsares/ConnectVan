import {StyleSheet} from 'react-native'



export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFBF00',
        padding: 8,
      },
      fundoTab:{
        flex:1,
        backgroundColor: '#fff',
        width:'100%',
        marginTop:30,
        borderRadius: 40,
        borderBottomEndRadius:0,
        borderBottomStartRadius:0,
        alignItems:'center',
      },
      viewBotao:{
        justifyContent:'center',
        marginTop:'60%',
        flexDirection:'row', 
        gap:12
      },
      botaoAdd:{
        backgroundColor:'#FFBF00',
        borderRadius:25,
        width:105,
        height:45,
        alignItems:'center',
        justifyContent:'center'
      },
      input:{
        height: 45,
        width:260,
        marginTop:'3%',
        borderWidth: 1,
        borderColor:'#black',
        padding: 10,
        borderRadius:5,
        color:'gray'
      }
    });