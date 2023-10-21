import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Entypo, FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import styles from './style'
import {useEffect, useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  doc, getDoc, setDoc, updateDoc, arrayRemove, arrayUnion} from 'firebase/firestore';

export default function Passageiros({navigation}) {
    const [rec, setRec] = useState('')
    const [aluno, setAluno] = useState([])
    const [gatilho, setGatilho] = useState(true)
    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
                const docRef = doc(db, 'responsavel', user.uid)
                const snapshot = await getDoc(docRef)
                setRec(snapshot.data())
                
        });
        setAluno(rec.nomeAluno)
        console.log(aluno)
    }, [gatilho])

    if(!rec || !aluno){
        return(
          <View style={{padding:50}}>
            <TouchableOpacity onPress={()=>setGatilho(curent=>!curent)}>
              <Text>reload</Text>
            </TouchableOpacity>
          </View>
        )
    }
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', paddingHorizontal:10}}>
        <TouchableOpacity>
          <Entypo name="menu" size={29} color="black" style={[styles.iconMenu, {marginTop:13}]}/>
        </TouchableOpacity>
        <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'22%'}}>Passageiros</Text>
      </View>

      <View style={styles.fundoTab}>
        <Text style={{fontSize:18, fontWeight:'bold', marginTop:'5%'}}>
          TODOS ({rec.nomeAluno.length})
        </Text>

        {aluno.map((item, index)=>{
          const key = index
            return(
            <TouchableOpacity style={styles.botaoEscola} onPress={()=>navigation.navigate('TelaAluno', {key})}>
            <View style={styles.fundoEscola}>
              <View style={{padding:18, flexDirection:'row'}}>
                <Image
                  source={{uri:'https://cdn-icons-png.flaticon.com/512/5987/5987462.png'}}      
                  style={{height:45,width:45}}
                />
                <Text style={styles.nome}>{item}</Text>
                <View style={{position:'absolute', marginLeft:'82%', marginTop:'3%'}}>
                  <TouchableOpacity>
                    <Entypo name="chevron-right" size={23} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          )
        })}
        <View style={styles.viewBotao}>
          <TouchableOpacity style={styles.botaoAdd} onPress={()=>navigation.navigate('AddPassageiro')}>
            <View styles={{marginTop:70,}}>
              <Text style={{fontSize:16, fontWeight:'bold'}}>Adicionar passageiro</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    
    </View>
  );
}

