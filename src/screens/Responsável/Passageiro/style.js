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
        marginTop:13,
        borderRadius: 40,
        borderBottomEndRadius:0,
        borderBottomStartRadius:0,
        alignItems:'center',
      },
      infos:{
        fontSize:15, 
        marginTop:'10%'
      },
      viewBotao:{
        textAlignVertical:'center',
        justifyContent:'center',
        marginTop:'60%',
        marginLeft:'3%',
      },
      botaoAdd:{
        backgroundColor:'#FFBF00',
        borderRadius:25,
        width:105,
        height:45,
        alignItems:'center',
        justifyContent:'center'
      },
      iconBack:{
        marginLeft:10,
      },
    });