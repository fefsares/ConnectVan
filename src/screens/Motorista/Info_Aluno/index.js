import styles from './style'
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Image, Linking } from 'react-native';
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import {useRef, useState, useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  setDoc, doc, getDoc, updateDoc, arrayUnion , deleteField, arrayRemove } from 'firebase/firestore';


export default function AddAluno ({route, navigation}) {
    const { idA } = route.params;
    const [rec, setRec] = useState('');
    const [mensagem, setmensagem] = useState('')

    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, 'motorista', user.uid, 'passageiros', idA)
                const snapshot = await getDoc(docRef)
                setRec(snapshot.data());
                setmensagem(`Olá, sou o motorista ${snapshot.data().nome}.`)
            }
        })
        
    }, [])

    if(!rec){
        return null
    }
  return (

    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row', paddingHorizontal:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate('HomeMotorista')}>
          <Entypo name="chevron-left" size={24} color="black" style={[styles.iconBack, {marginTop:16}]}/>
        </TouchableOpacity>
        <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'8%'}}>{rec.nome}</Text>
      </View>

      <View style={styles.fundoTab}>

        <View style={{flexDirection:'row', marginTop:'10%', marginRight:'3%'}}>
          <View style={[styles.viewMae, {height:60}]}/>
          <View style={{flexDirection:'column', marginLeft:'11%'}}>
            <Text style={styles.titulo}>{rec.responsavel}</Text>
            <Text style={styles.infos}>Responsavel</Text>
          </View>
          <TouchableOpacity style={{padding:17, paddingLeft:18}} onPress={()=>Linking.openURL('whatsapp://send?text='+ mensagem +'&phone=' + rec.telefone)}>
            <FontAwesome name="whatsapp" size={28} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', marginTop:'6%', marginRight:'37%'}}>
          <View style={[styles.viewMae, {height:135}]}/> 
          <View style={{flexDirection:'column', marginLeft:'20%'}}>
            <Text style={styles.viewFilha}>Escola</Text>
            <Text style={styles.infos}>{rec.escola}</Text>
            <Text style={styles.infos}>{rec.sala}</Text>
            <Text style={styles.infos}>{rec.serie}</Text>
            <Text style={styles.infos}>{rec.periodo}</Text>
          </View>
        </View>

        <View style={{flexDirection:'row', marginTop:'8%', marginRight:'49%'}}>
          <View style={[styles.viewMae, {height:106}]}/>
          <View style={{flexDirection:'column', marginLeft:'30%'}}>
            <Text style={styles.viewFilha}>Endereço</Text>
            <Text style={styles.infos}>{rec.endereco}</Text>
          </View>
        </View>

        <View style={{flexDirection:'row', marginTop:'8%', marginRight:'3%'}}>
          <View style={[styles.viewMae, {height:60}]}/>
          <View style={{flexDirection:'column', marginLeft:'11%'}}>
            <Text style={styles.titulo}>Mensalidade</Text>
            <Text style={{marginTop:'2%', fontStyle:'italic', color:'#757575'}}>{rec.mensalidade}</Text>
          </View>
        </View>
        

      </View>
    </SafeAreaView>
  );
}