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
    fontFamily:'aileron-heavy',
    color: '#FFBF00',
  },
  van:{
    fontSize: 60,
    fontFamily:'aileron-heavy',
  },
  input:{
    width:'80%',
    height: 50,
    borderRadius: 15,
    backgroundColor: 'white',
    color: '#6F6F6F',
    paddingHorizontal: 40,
    fontSize:20,
  },
  icon:{
    position:'absolute',
    zIndex:2,
    marginLeft:10,
  },

  botao:{
    width:'100%',
    borderWidth: 2,
    borderColor:'#FFBF00',
    alignItems: 'center',
    height:150,
    justifyContent:'center',
    borderRadius:20,
    marginHorizontal: 10
  },
  gradient:{
    width:'100%', height:'100%', alignSelf: 'center', borderRadius:20
  },
  botao2:{
    width:'100%',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:20,
    flex: 1, 
    height:150,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    padding: 35,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

