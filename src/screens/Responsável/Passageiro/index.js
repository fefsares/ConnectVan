import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Entypo, FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import styles from './style'
import {useEffect, useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  doc, getDoc, setDoc, updateDoc, arrayRemove, arrayUnion} from 'firebase/firestore';

export default function Passageiro({route, navigation}) {
    const {key} = route.params
    const [rec, setRec] = useState('')
    const [nome, setNome] = useState('')
    const [escola, setEscola] = useState('')
    const [sala, setSala] = useState('')
    const [serie, setSerie] = useState('')
    const [periodo, setPeriodo] = useState('')
    const [endereco, setEndereco] = useState('')
    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
                const docRef = doc(db, 'responsavel', user.uid)
                const snapshot = await getDoc(docRef)
                setRec(snapshot.data())
                setNome(rec.nomeAluno[key])
                setEscola(rec.escola[key])
                setSala(rec.sala[key])
                setSerie(rec.serie[key])
                setPeriodo(rec.periodo[key])
                setEndereco(rec.endereco[key])
        });
    }, [])
    return (

        <View style={styles.container}>
          <View style={{flexDirection:'row', paddingHorizontal:10}}>
            <TouchableOpacity>
              <Entypo name="chevron-left" size={24} color="black" style={[styles.iconBack, {marginTop:16}]}/>
            </TouchableOpacity>
            <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'22%'}}>{nome}</Text>
          </View>
    
          <View style={styles.fundoTab}>
             
            <View style={{flexDirection:'row', marginTop:'12%', marginRight:'55%'}}>
              <View style={{height:135, width:2, backgroundColor:'black', borderRadius:50}}/>
              <View style={{flexDirection:'column', marginLeft:'40%'}}>
                <Text style={{fontSize:18, fontWeight:'bold', marginTop:'5%'}}>Escola</Text>
                <Text style={styles.infos}>{escola}</Text>
                <Text style={styles.infos}>{sala}</Text>
                <Text style={styles.infos}>{serie}</Text>
                <Text style={styles.infos}>{periodo}</Text>
              </View>
            </View>
    
            <View style={{flexDirection:'row', marginTop:'10%', marginRight:'49%'}}>
              <View style={{height:115, width:2, backgroundColor:'black', borderRadius:50}}/>
              <View style={{flexDirection:'column', marginLeft:'30%'}}>
                <Text style={{fontSize:18, fontWeight:'bold', marginTop:'5%'}}>Endereço</Text>
                <Text style={styles.infos}>{endereco}</Text>
              </View>
            </View>
    
          </View>
        </View>
      );
}