import {StyleSheet} from 'react-native'



export default StyleSheet.create({
  h1:{
    fontSize: 80,
    fontFamily:'AileronH',
    alignItems: 'center',
  },
  tela:{
    width:'100%',
    paddingVertical:80
  },
  input:{
    width:'100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#ECECEC',
    color: '#6F6F6F',
    paddingHorizontal: 40,
    fontSize:13,
    fontFamily:'AileronR'
  },
  inputErro:{
    width:'100%',
    height: 50,
    borderRadius: 8,
    borderWidth: 1, 
    borderColor: '#f02929',
    backgroundColor: '#ECECEC',
    color: '#6F6F6F',
    paddingHorizontal: 40,
    fontSize:13,
    fontFamily: 'AileronR'
  },
  iconErro:{
    position:'absolute',
    zIndex:2,
    marginLeft:10,
    color:'#f02929'
  },
  icon:{
    position:'absolute',
    zIndex:2,
    marginLeft:10,
  },
  gradient:{
    width:150, height:50, alignSelf: 'center', borderRadius:50
  },
  botao:{
    width:150,
    backgroundColor:'yellow',
    alignItems: 'center',
    height:50,
    justifyContent:'center',
    borderRadius:50
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    padding: 35,
    height:'80%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView:{
    justifyContent:'center',
    marginTop:'50%'
  },
  politica:{
    fontFamily:'AileronR',
    fontSize:15,
    paddingVertical:0.9,
    textAlign:'justify'
  }
})

