import styles from './style'
import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  doc, getDoc, collectionGroup, query, where, getDocs, updateDoc, arrayRemove, arrayUnion} from 'firebase/firestore';

export default function EditEscola({navigation}) {
    const [escolas, setEscolas]=useState([]);
    const [gatilho, setGatilho] = useState(true)
    const [escola, setEscola] = useState('')
    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
            if (user) {
              const docRef = doc(db, 'motorista', user.uid)
              const snapshot = await getDoc(docRef)
  
              setEscolas(snapshot.data().escola)
              
            }
             
          });
    },[gatilho])

    const excluir=(item)=>{
        if(gatilho==true){
        setGatilho(false)
        }
        else{
            setGatilho(true)
        }
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, 'motorista', user.uid)
                updateDoc(docRef, {escola: arrayRemove(item)})
            }
        });
        
    }
    const adicionar=()=>{
        if(gatilho==true){
        setGatilho(false)
        }
        else{
            setGatilho(true)
        }
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, 'motorista', user.uid)
                updateDoc(docRef, {escola: arrayUnion(escola)})
            }
        });
        
    }

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{flexDirection:'row', paddingHorizontal:10}}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <Entypo name="menu" size={29} color="black" style={[styles.iconMenu, {marginTop:13}]}/>
        </TouchableOpacity>
        <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'27%'}}>Escolas</Text>
      </View>

      <View style={styles.fundoTab}>
        <Text style={{fontSize:18, fontWeight:'bold', marginTop:'5%'}}>
          TODAS ({escolas.length})
        </Text>

        {escolas.map((item) => {
            
            return (
                <View style={styles.fundoEscola}>
                <View style={{padding:18}}>
                  <Text style={{fontSize:17, marginBottom:2, fontWeight:'bold'}}>{item}</Text>
                  <View style={{position:'absolute', marginLeft:'82%', marginTop:'4%'}}>
                    <TouchableOpacity onPress={()=>excluir(item)}>
                      <Ionicons name="ios-trash-outline" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
        })}

        <View style={{flexDirection:'row', alignContent:'center', marginTop:17}}>
          <TextInput
            style={styles.input}
            placeholder='Nome da escola'
            value={escola}
            onChangeText={value=>setEscola(value)}
          />
            <TouchableOpacity onPress={()=>adicionar()}>
              <MaterialIcons name="check" size={20} color="black" />
            </TouchableOpacity>
        </View>

        <View style={styles.viewBotao}>
          <TouchableOpacity style={styles.botaoAdd} onPress={()=>navigation.navigate('Escolas')}>
            <View>
              <MaterialIcons name="done" size={22} color="white" />
            </View>
          </TouchableOpacity>
        </View>

      </View>
      
    </SafeAreaView>
  );
}