import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import styles from './style'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  doc, getDoc, collectionGroup, query, where, getDocs} from 'firebase/firestore';

export default function CidadesMotorista ({route, navigation}) {
    const [escolas, setEscolas]=useState([]);
    const alunos = []
    const [passageiros, setPassageiros] = useState('')
    
    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
            if (user) {
              const docRef = doc(db, 'motorista', user.uid)
              const snapshot = await getDoc(docRef)
  
              setEscolas(snapshot.data().cidade)
              
            }
             
          });

    },[])

    const pesquisa =async (item)=>{
        const q = query(collectionGroup(db, 'passageiros'), where('cidade','==', item))
        const queryy = await getDocs(q)
        
          queryy.forEach((aluno) => {
              alunos.push(aluno.id)
          })
          setPassageiros(alunos.length)
        
    }
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{flexDirection:'row', paddingHorizontal:10}}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <Entypo name="menu" size={29} color="black" style={[styles.iconMenu, {marginTop:13}]}/>
        </TouchableOpacity>
        <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'27%'}}>Cidades</Text>
      </View>

      <View style={styles.fundoTab}>
        <Text style={{fontSize:18, fontWeight:'bold', marginTop:'5%'}}>
          TODAS ({escolas.length})
        </Text>
        {escolas.map((item) => {
            
            pesquisa(item);
            return (
            <TouchableOpacity style={styles.botaoEscola}>
                <View style={styles.fundoEscola}>
                    <View style={{padding:18}}>
                    <Text style={{fontSize:17, marginBottom:2, fontWeight:'bold'}}>{item}</Text>
                    <Text style={{fontSize:14}}>{passageiros} passageiros.</Text>
                    <View style={{position:'absolute', marginLeft:'82%', marginTop:'3%'}}>
                    <TouchableOpacity>
                        <Entypo name="chevron-right" size={23} color="black" />
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>
            );
        })}
        
        

        

        <View style={styles.viewBotao}>
          <TouchableOpacity style={styles.botaoAdd} onPress={()=>navigation.navigate('EditarC')}>
            <View styles={{marginTop:70,}}>
              <FontAwesome5 name="pencil-alt" size={17} color="white" />
            </View>
          </TouchableOpacity>
        </View>

      </View>
      
    </SafeAreaView>
  );
}