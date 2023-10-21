import { Text, SafeAreaView, View, TouchableOpacity, Linking } from 'react-native';
import { Entypo, FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from './style'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  doc, getDoc, setDoc, updateDoc, arrayRemove, arrayUnion} from 'firebase/firestore';


export default function AddAlunos ({route, navigation}) {
    const {idR, mensalidade, vencimento, filhos}= route.params
    const [arr, setArr] = useState('');
    const [soli, setSoli]=useState([]);
    const dataArray = []
    const [fone, setFone] = useState('')
    const [mensagem, setmensagem] = useState('')
    const [nomeM, setNomeM] = useState('')
    const [rec, setRec] = useState('')
    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
                const docRef = doc(db, 'responsavel', idR)
                const snapshot = await getDoc(docRef)
                setRec(snapshot.data())
                setArr(snapshot.data().nome)
                setSoli(snapshot.data().nomeAluno)
                setFone(snapshot.data().telefone)
                setNomeM(snapshot.data().nome)
                setmensagem(`Olá, sou o motorista ${nomeM} desejo conversar sobre os valores do transporte.`)
        });
    }, [])
    const rejeitar =()=>{
      onAuthStateChanged(auth, async (user) => {
          if (user) {
              const docRef = doc(db, 'motorista', user.uid)
              updateDoc(docRef, {solicitacao: arrayRemove(idR)})
          }
      })
      navigation.navigate('HomeMotorista')
  }
  const adicionar =()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
              const docRef = doc(db, 'motorista', user.uid)
              updateDoc(docRef, {solicitacao: arrayRemove(idR), contratos: arrayUnion(idR)})
              setDoc(doc(db, 'motorista', user.uid, 'responsavel', rec.nome), {nome: rec.nome, mensalidade: mensalidade, data: vencimento, pago: true})
              soli.forEach((item, index) => {
                let key = index;
                updateDoc(doc(db, 'motorista', user.uid, 'responsavel', rec.nome), {filho: arrayUnion(rec.nomeAluno[key])})
                setDoc(doc(db, 'motorista', user.uid, 'passageiros', rec.nomeAluno[key]), {nome: rec.nomeAluno[key], endereco: rec.endereco[key], escola: rec.escola[key], responsavel:rec.nome, sala: rec.sala[key], serie: rec.serie[key], periodo: rec.periodo[key], telefone_responsavel: rec.telefone})
              });
              
              updateDoc(doc(db, 'responsavel', idR), {motorista: user.uid, mensalidade: mensalidade, data: vencimento})
          }
      });
      navigation.navigate('HomeMotorista')

  }

    if(!soli){
        return null
    }
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{flexDirection:'row', paddingHorizontal:10}}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <Entypo name="menu" size={29} color="black" style={[styles.iconMenu, {marginTop:13}]}/>
        </TouchableOpacity>
        <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'7%'}}>{arr}</Text>
      </View>

      <View style={styles.fundoTab}>
        <Text style={{fontSize:18, fontWeight:'bold', marginTop:'5%'}}>
          TODOS ({arr.length})
        </Text>
        <TouchableOpacity style={{padding:17, paddingLeft:18}} onPress={()=>Linking.openURL('whatsapp://send?text='+ mensagem +'&phone=' + fone)}>
            <FontAwesome name="whatsapp" size={28} color="black" />
          </TouchableOpacity> 
        {soli.map((item, index) => {
          const key = index;
            return(
              <TouchableOpacity style={styles.botaoEscola} onPress={()=> navigation.navigate('AddAluno2', {idR, key})}>
              <View style={styles.fundoEscola}>
                <View style={{padding:18, flexDirection:'row'}}>
                  <FontAwesome name="user-circle-o" size={24} color="black" />
                  <Text style={{fontSize:17, marginBottom:2, fontFamily:'AileronH'}}>{item}</Text>
                </View>
              </View>
            </TouchableOpacity>
            )
                
            })}
            <View style={{flexDirection:'row', marginTop:'8%', marginRight:'3%'}}>
          <View style={[styles.viewMae, {height:60}]}/>
          <View style={{flexDirection:'column', marginLeft:'11%'}}>
            <Text style={styles.titulo}>Mensalidade</Text>
            <Text style={{marginTop:'2%', fontStyle:'italic', color:'#757575'}}>{mensalidade? mensalidade:'Nenhum valor foi inserido.'}</Text>
          </View>
          <TouchableOpacity style={{padding:11, paddingLeft:23}} onPress={()=>navigation.navigate('AddMensalidades', {idR})}>
            <Ionicons name="add-sharp" size={34} color="black" />
          </TouchableOpacity>
        </View>
        
        
        <View style={styles.viewBotao}>
          <TouchableOpacity style={[styles.botaoAdd, {backgroundColor:'gray'}]} onPress={()=>rejeitar()}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Rejeitar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoAdd} onPress={()=>adicionar()}>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        

      </View>      
    </SafeAreaView>
  );
}

