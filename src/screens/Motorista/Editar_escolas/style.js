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
        marginTop:10,
        borderRadius: 40,
        borderBottomEndRadius:0,
        borderBottomStartRadius:0,
        alignItems:'center',
      },
      fundoEscola:{
        borderRadius: 20,
        width:'90%',
        height: 80,
        backgroundColor: 'white',
        marginTop:'5%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
      },
      viewBotao:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'35%',
        marginLeft:'76%',
      },
      botaoAdd:{
        backgroundColor:'black', 
        borderRadius:25, 
        width:37,
        height:37, 
        alignItems:'center', 
        justifyContent:'center'
      },
      iconMenu:{
        marginLeft:10,
      },
      input:{
        padding:20,
        height: 60,
        width:295,
        marginTop:'3%',
        borderColor:'black',
        fontStyle:'italic',
        color:'gray',
        fontSize:15,
        borderRadius:20,
        borderWidth:0.5
      }
    });