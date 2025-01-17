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
      borderWidth:0.5
    },
    viewBotao:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:'33%',
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
    botaoEscola:{
      width:'90%',
      height: 80,
      backgroundColor: 'white',
      marginTop:'5%',
    },
    iconMenu:{
      marginLeft:10,
    },
  });