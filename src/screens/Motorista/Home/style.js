import {StyleSheet} from 'react-native'



export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFBF00',
    width:'100%'
  },
  fundoTab: {
    flex: 18,
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 20,
    borderRadius: 40,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    alignItems: 'center',
  },
  iconMenu: {
    marginLeft: 30,
    paddingTop: 25,
  },
  saldot: {
    flex: 1,
    width: '90%',
    height: 80,
    backgroundColor: 'white',
  },
  fundoSaldo: {
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    flexDirection:'row',
    alignItems:'center'
  },
  botaoAdd: {
    flexDirection: 'column',
    backgroundColor: '#FFBF00',
    borderRadius: 25,
    width: 80,
    height: 38,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems:'center'
  },
  data: {
    fontSize: 14,
    color: '#999999',
    marginLeft: '40%',
  },
  inputi: {
    alignSelf: 'flex-start',
    height: 85,
    fontSize: 17,
    borderColor: '#DDDDDD',
    borderRadius: 4,
  },
  viewBotao: {
    justifyContent: 'center',
  },
  botaoAdd2: {
    backgroundColor: '#FFBF00',
    borderRadius: 50,
    width: 298,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  apaga: {
    marginTop: 8,
    alignSelf:'flex-end'
  },
  viewMae:{
    width:3, 
    backgroundColor:'#FFBF00', 
    height:'101%',
    position:'absolute',
    left:-1
  },
  gradient:{
    width:'100%', height:50, alignSelf: 'center', borderRadius:50
  },

});

