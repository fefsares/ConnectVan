import {StyleSheet} from 'react-native'



export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFBF00',
      padding: 8,
      overflow: 'hidden', // Para garantir que o gradiente não se espalhe além dos limites do botão
      backgroundImage: 'linear-gradient(to right, #FFE085, #FFBF00)', // Defina seu gradiente aqui
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
    viewBotao:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:'5%',
      marginLeft:'5%',
    },
    botao:{
      backgroundColor:'#FFBF00', 
      borderRadius:25, 
      width:225,
      height:45, 
      alignItems:'center', 
      justifyContent:'center',
      overflow: 'hidden', 
      backgroundImage: 'linear-gradient(to right, #FFE085, #FFBF00)'
    },
    infos:{
      fontSize:15, 
      marginTop:'2%'
    },
    iconMenu:{
      marginLeft:10,
    },
    gradient:{
        width:'100%', height:'100%', alignSelf: 'center', borderRadius:50
      },
      botao2:{
        width:'100%',
        backgroundColor:'yellow',
        alignItems: 'center',
        height:50,
        justifyContent:'center',
        borderRadius:50
      },
  });