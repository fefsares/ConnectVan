import {StyleSheet} from 'react-native'



export default StyleSheet.create({
  h1:{
    fontSize: 60,
    fontFamily:'AileronH',
    alignItems: 'center',
  },
  tela:{
    width:'100%',
    paddingTop:180,
    paddingBottom:20
  },
  input:{
    width:'100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#ECECEC',
    color: '#6F6F6F',
    padding: 20,
    fontSize:13,
    marginVertical:5,
    fontFamily:'AileronR'
  },
  inputErro:{
    borderWidth: 1, 
    borderColor: '#f02929',
    width:'100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#ECECEC',
    color: '#6F6F6F',
    padding: 20,
    fontSize:13,
    marginVertical:5,
    fontFamily:'AileronR'
  },
  icon:{
    left:30,
    zIndex:2,
  },
  gradient:{
  height:50, alignSelf: 'center', borderRadius:50, width:'100%'
  },
  botao:{
    width:'100%',
    backgroundColor:'yellow',
    alignItems: 'center',
    height:50,
    justifyContent:'center',
    borderRadius:50,
    flex: 1
  },
})

