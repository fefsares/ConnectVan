import {StyleSheet} from 'react-native'



export default StyleSheet.create({
  logo:{
    width: 150, 
    height: 150, 
    margin: 2,
    resizeMode: 'stretch',
    borderRadius:100
  },
  tela:{
    width:'100%',
    alignItems: 'center',
  },
  connect:{
    fontSize: 60,
    fontFamily: 'AileronH',
    color: '#FFBF00',
  },
  van:{
    fontSize: 60,
    fontFamily: 'AileronH'
  },
  icon:{
    width:100,
    height:100,
    zIndex:2,
  },

  gradient:{
    width:'100%', height:150, alignSelf: 'center', borderRadius:20
  },
  botao:{
    width:'100%',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:20,
    flex: 1, 
    height:150,
  },
})

