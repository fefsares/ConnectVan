import styles from './style'
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Image, Linking } from 'react-native';
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import {useRef, useState, useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  setDoc, doc, getDoc, updateDoc, arrayUnion , deleteField, arrayRemove } from 'firebase/firestore';


export default function AddAluno ({route, navigation}) {
    const { idR, mensalidade, vencimento, key } = route.params;
    const [rec, setRec] = useState('');

    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, 'responsavel', idR)
                const snapshot = await getDoc(docRef)
                setRec(snapshot.data());
            }
        })
        console.log(rec)
    }, [])
    

    if(!rec){
        return null
    }
  return (

    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row', paddingHorizontal:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate('AddAlunos', {idR})}>
          <Entypo name="chevron-left" size={24} color="black" style={[styles.iconBack, {marginTop:16}]}/>
        </TouchableOpacity>
        <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'8%'}}>{rec.nome}</Text>
      </View>

      <View style={styles.fundoTab}>

        <View style={{flexDirection:'row', marginTop:'10%', marginRight:'3%'}}>
          <View style={[styles.viewMae, {height:60}]}/>
          <View style={{flexDirection:'column', marginLeft:'11%'}}>
            <Text style={styles.titulo}>{rec.nome}</Text>
            <Text style={styles.infos}>Responsável</Text>
            <Text style={styles.titulo}>{rec.nomeAluno[key]}</Text>
            <Text style={styles.infos}>Aluno</Text>
          </View>
        </View>

        <View style={{flexDirection:'row', marginTop:'6%', marginRight:'37%'}}>
          <View style={[styles.viewMae, {height:135}]}/> 
          <View style={{flexDirection:'column', marginLeft:'20%'}}>
            <Text style={styles.viewFilha}>Escola</Text>
            <Text style={styles.infos}>{rec.escola[key]}</Text>
            <Text style={styles.infos}>{rec.sala[key]}</Text>
            <Text style={styles.infos}>{rec.serie[key]}</Text>
            <Text style={styles.infos}>{rec.periodo[key]}</Text>
          </View>
        </View>

        <View style={{flexDirection:'row', marginTop:'8%', marginRight:'49%'}}>
          <View style={[styles.viewMae, {height:106}]}/>
          <View style={{flexDirection:'column', marginLeft:'30%'}}>
            <Text style={styles.viewFilha}>Endereço</Text>
            <Text style={styles.infos}>{rec.endereco[key]}</Text>
          </View>
        </View>

        

      </View>
    </SafeAreaView>
  );
}