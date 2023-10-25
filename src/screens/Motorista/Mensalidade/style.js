import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFBF00',
    padding: 8,
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(to right, #FFE085, #FFBF00)',
  },
  titulo:{
    marginTop:'5%', 
    fontSize:18, 
    fontWeight:'bold', 
    marginLeft:'23%'
  },
  fundoTab1:{
    height:'42%', 
    marginHorizontal:8,
    backgroundColor:'white', 
    borderRadius:30,
    marginTop:'5%',
  },
  fundoTab2:{
    flex:1,
    backgroundColor: '#fff',
    width:'100%',
    marginTop:'8%',
    borderRadius: 40,
    borderBottomEndRadius:0,
    borderBottomStartRadius:0,
  },
  valor:{
    marginTop:'7%',
    fontWeight:'bold', 
    fontSize:26,
    alignSelf:'center'
  },
  valorAcum:{
    color:'gray',
    fontSize:17,
    alignSelf:'center'
  },
  viewBarra:{
    width:'90%', 
    height:'3%', 
    paddingHorizontal:'10%', 
    flexDirection:'row', 
    alignSelf:'center',
    marginTop:20
  },
  barraVerm:{
    backgroundColor:'#FF0000', 
    height:'100%', 
    borderBottomLeftRadius:10, 
    borderTopLeftRadius:10, 
  },
  barraAmarelo:{
    backgroundColor:'#FFBF00', 
    height:'100%', 
  },
  barraCinza:{
    backgroundColor:'#CCCCCC', 
    height:'100%', 
    borderBottomRightRadius:10, 
    borderTopRightRadius:10, 
  },
  viewQuadrados:{
    flexDirection:'row', 
    marginTop:'8%', 
    justifyContent:'space-between'
  },
  quadrVerm:{
    backgroundColor:'#FF0000', 
    width:20, 
    height:20, 
    borderRadius:5
  },
  quadrAmarelo:{
    backgroundColor:'#FFBF00', 
    width:20, 
    height:20, 
    borderRadius:5
  },
  quadrCinza:{
    backgroundColor:'#cccccc', 
    width:20, 
    height:20, 
    borderRadius:5
  },
  viewAtr1:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    padding:25,
    marginBottom:'10%'
  },
  nome:{ 
    marginRight:'5%',
    fontWeight:'bold', 
    fontSize:17,
  },
  dataVenc:{
    color:'gray',
    fontSize:15,
    marginTop:'3%'
  },
  mes:{
    marginTop:'5%', 
    fontWeight:'bold', 
    fontSize:18
  },
  linha:{
    height:'1%', 
    width:'100%', 
    backgroundColor:'#f4f4f4', 
    marginTop:'4%',
  },
  atrasados:{
    marginTop:'5%', 
    fontWeight:'bold', 
    fontSize:17
  },
  iconMenu:{
    marginLeft:10,
  },
});

export default styles;