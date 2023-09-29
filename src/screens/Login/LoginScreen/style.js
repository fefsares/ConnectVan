import {StyleSheet} from 'react-native'



export default StyleSheet.create({
  logo:{
    width: 150, 
    height: 150, 
    margin: 2,
    resizeMode: 'stretch',
    borderRadius:100,
    marginTop:90
  },
  tela:{
    width:'100%',
    alignItems: 'center',
    paddingVertical:20
  },

  inner:{
    flex:1,
    paddingHorizontal:20,
    alignItems:'center',
    backgroundColor:'white'
    
  },
  connect:{
    fontSize: 60,
    color: '#FFBF00',
    fontFamily: 'AileronH'
  },
  van:{
    fontSize: 60,
    fontFamily: 'AileronH'
  },
  viewInput:{
    flexDirection:'row', 
    alignItems:'center', 
    paddingVertical:10
  },
  input:{
    width:'100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#ECECEC',
    color: '#6F6F6F',
    paddingHorizontal: 40,
    fontSize:13,
    fontFamily: 'AileronR'
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
  icon:{
    position:'absolute',
    zIndex:2,
    marginLeft:10,
  },
  iconErro:{
    position:'absolute',
    zIndex:2,
    marginLeft:10,
    color:'#f02929'
  },
  centeredView:{
    justifyContent:'center',
    marginTop:'50%'
  },
  botao:{
    width:'100%',
    backgroundColor:'yellow',
    alignItems: 'center',
    height:50,
    justifyContent:'center',
    borderRadius:50
  },
  gradient:{
    width:'100%', height:50, alignSelf: 'center', borderRadius:50
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
  container: {
    flex: 1,
  },
  viewButton:{
    width:'40%', 
    alignItems:'center', 
  },
  textButton:{
    fontSize:25, 
    position:'absolute',
    fontFamily: 'AileronR'
  },
  
})

