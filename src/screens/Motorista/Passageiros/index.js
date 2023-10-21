import { Text, SafeAreaView, View, TouchableOpacity, Linking, Image } from 'react-native';
import { Entypo, FontAwesome} from '@expo/vector-icons';
import styles from './style'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  doc, getDoc, collectionGroup, query, where, getDocs} from 'firebase/firestore';

export default function PassageirosEscola({navigation, route}) {
    const alunos = []
    const [passageiros, setPassageiros] = useState([])
    const q = query(collectionGroup(db, 'passageiros'), where('escola','!=', ''))

    useEffect(()=>{
        pesquisa()
    }, [])
    const pesquisa =async()=>{
        const queryy = await getDocs(q)
        queryy.forEach((aluno) => {
            alunos.push(aluno.id)
            
        })
        setPassageiros(alunos)
        console.log(passageiros)
    }

    return (
  
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row', paddingHorizontal:10}}>
          <TouchableOpacity>
            <Entypo name="chevron-left" size={29} color="black" style={styles.iconBack}/>
          </TouchableOpacity>
          <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'9%'}}>Passageiros</Text>
        </View>
        <View style={styles.fundoTab}>
          <Text style={{fontSize:18, fontWeight:'bold', marginTop:'5%'}}>
            TODOS ({passageiros.length})
          </Text>

            {passageiros.map((item)=>{
                const idA = item;
                return(
                <TouchableOpacity style={styles.botaoEscola} onPress={()=>navigation.navigate('InfoAluno', {idA})}>
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
          
  
  
          
  
        </View>    
      </SafeAreaView>
    );
  }