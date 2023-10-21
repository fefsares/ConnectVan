import { Entypo } from '@expo/vector-icons';
import styles from './style'
import {useState, useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {View, Text,Image,  TouchableOpacity, TextInput, Modal, ScrollView, Keyboard} from 'react-native'
import { doc, getDoc, onSnapshot, getDocs, collection, collectionGroup, query, where, updateDoc} from 'firebase/firestore';

export default function Mensalidade({navigation}) {
    const [dado, setDado] = useState('')
    const [contrato, setContrato] = useState(false)
    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  useEffect(()=>{
    var date = new Date().getDate();
    var month = new Date().getMonth(); //Current Month
    setDia(date)
    setMes(monthNames[month+1])
    onAuthStateChanged(auth, async(user)=>{
        const docRef = doc(db, 'responsavel', user.uid)
        const snapshot = await getDoc(docRef)
        setDado(snapshot.data())
        if(dado.motorista != ''){
            setContrato(true)
        }

    })
  },[])

  const pago=async()=>{
        const docRef = doc(db, 'motorista', dado.motorista, 'responsavel', dado.nome)
        updateDoc(docRef, {pago:true})
  }

  if(!contrato){
    return(
        <View style={styles.container}>
      
      <View style={{flexDirection:'row', paddingHorizontal:10}}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <Entypo name="menu" size={29} color="black" style={[styles.iconMenu, {marginTop:13}]}/>
        </TouchableOpacity>
        <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'18%'}}>Mensalidades</Text>
      </View>

      <View style={styles.fundoTab}>

        <Image
          source={require('../../../../assets/avan.png')}
          style={{width:'100%', height:'13%'}}
        />

        <View style={{marginTop:'3%'}}>
          <Text style={{fontSize:18, fontWeight:'bold', color:'gray', textAlign:'center'}}>Oops! Ainda não há</Text>
          <Text style={{fontSize:18, fontWeight:'bold', color:'gray', textAlign:'center'}}>nenhum motorista</Text>
          <Text style={{fontSize:18, fontWeight:'bold', color:'gray', textAlign:'center'}}>contratado.</Text>
        </View>

        <View style={styles.viewBotao}>
          <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Pesquisa')}>
            <Image source={require('../../../../assets/gradient.png')} c/>
            <Text style={{fontSize:16, fontWeight:'bold', position:'absolute'}}>Contratar</Text>
          </TouchableOpacity>
        </View>

      </View>      
    </View>
    )
  }
  else{
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', paddingHorizontal:10}}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <Entypo name="menu" size={29} color="black" style={[styles.iconMenu, {marginTop:13}]}/>
        </TouchableOpacity>
        <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'18%'}}>Mensalidades</Text>
      </View>

      <View style={styles.fundoTab}>

        <View style={{flexDirection:'row', marginTop:'12%', marginRight:'30%'}}>
          <View style={{height:55, width:2, backgroundColor:'black', borderRadius:50}}/>
          <View style={{flexDirection:'column', marginLeft:'15%', marginTop:'3%'}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>R${dado.mensalidade},00</Text>
            {dado.data>=dia?(
                <Text style={styles.infos}>Vence dia {dado.data}</Text>
            ):(
                <Text style={styles.infos}>Venceu dia {dado.data}</Text>
            )}
            
          </View>
        </View>

        <View style={styles.viewBotao}>
          <TouchableOpacity style={styles.botao} onPress={()=>pago()}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Avisar que está pago</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', marginTop:'9%', marginRight:'21%'}}>
          <View style={{height:55, width:2, backgroundColor:'black', borderRadius:50}}/>
          <View style={{flexDirection:'column', marginLeft:'13%', marginTop:'3%'}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>Próximo pagamento</Text>
            <Text style={styles.infos}>Dia {dado.data} de {mes}</Text>
          </View>
        </View>

        <View style={styles.viewBotao}>
          <TouchableOpacity style={styles.botao}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Receber notificação</Text>
          </TouchableOpacity>
        </View>

      </View>      
    </View>
  );
  }
}

