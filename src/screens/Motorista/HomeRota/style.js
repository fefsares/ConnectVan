import {StyleSheet} from 'react-native'



export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFBF00',
    padding: 8,
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(to right, #FFE085, #FFBF00)',
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
  viewBotao:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:'80%',
  },
  botaoMaps:{
    backgroundColor:'transparent', 
    flexDirection:'row',
    borderRadius:25, 
    width:200,
    height:42, 
    alignItems:'center', 
    justifyContent:'center',
    overflow: 'hidden', // Para garantir que o gradiente não se espalhe além dos limites do botão
    backgroundImage: 'linear-gradient(to right, #FFE085, #FFBF00)', // Defina seu gradiente aqui
  },
  infos:{
    fontSize:14, 
    marginTop:'2%',
    color:'gray'
  },
  iconBack:{
    marginLeft:10,
  },
  imagem:{
    width:'50%',
    height:'100%',
  },
  viewMae:{
    width:1, 
    backgroundColor:'black', 
    borderRadius:50,
    marginRight:'66%',
  },
  viewFilha:{
    fontSize:16, 
  },
  accordion:{
    paddingHorizontal:1, 
    paddingVertical:20, 
    width:'95%'
  },
  gradient:{
    width:'100%', height:'100%', alignSelf: 'center', borderRadius:20, position:'absolute'
  },
});

