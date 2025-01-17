import { Text, SafeAreaView, View, TouchableOpacity, Linking } from 'react-native';
import { Entypo, FontAwesome} from '@expo/vector-icons';
import styles from './style'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  doc, getDoc} from 'firebase/firestore';


export default function Pedidos ({navigation}) {
    const [arr, setArr] = useState([]);
    const [soli, setSoli]=useState([]);
    const dataArray = []
    const [mensagem, setmensagem] = useState('')
    const [nomeM, setNomeM] = useState('')
    
    

    useEffect(()=>{
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, 'motorista' , user.uid)
                const snapshot = await getDoc(docRef)
                setSoli(snapshot.data().solicitacao)
                setNomeM(snapshot.data().nome)
                setmensagem(`Olá, sou o motorista ${nomeM} desejo conversar sobre os valores do transporte.`)
                
                for(const id of soli){
                    const docRefUser = doc(db, 'responsavel', id);
                    try {
                        const docSnapshot = await getDoc(docRefUser);
                        const dado = docSnapshot.data();
                        const idResponsavel = id;
                        dataArray.push({idResponsavel, ...dado})
                        
                    } catch (error) {
                        console.error('erro');
                    }
                } 
                setArr(dataArray)
            }
            
        });
    }, [mensagem])


    if(!soli){
        return null
    }
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{flexDirection:'row', paddingHorizontal:10}}>
          <TouchableOpacity onPress={()=>navigation.navigate('HomeMotorista')}>
            <Entypo name="chevron-left" size={29} color="black" style={styles.iconBack}/>
          </TouchableOpacity>
        <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'7%'}}>Pedidos de Contratação</Text>
      </View>

      <View style={styles.fundoTab}>
        <Text style={{fontSize:18, fontWeight:'bold', marginTop:'5%'}}>
          TODOS ({arr.length})
        </Text>
        {arr.map((item) => {
                const filhos = item.nomeAluno.length
                const idR = item.idResponsavel;
                const key = 0;
                if(filhos == 1){
                  return(
                    <TouchableOpacity style={styles.botaoEscola} onPress={()=> navigation.navigate('AddAluno', {idR, key})}>
                    <View style={styles.fundoEscola}>
                      <View style={{padding:18}}>
                        <Text style={{fontSize:17, marginBottom:2, fontFamily:'AileronH'}}>{item.nome}</Text>
                        <Text style={{fontSize:14, fontFamily:'AileronR'}}>{filhos} filho</Text>
                        <View style={{position:'absolute', marginLeft:'82%', marginTop:'3%'}}>
                          <TouchableOpacity onPress={()=>Linking.openURL('whatsapp://send?text='+ mensagem +'&phone=' + item.telefone)}>
                            <FontAwesome name="whatsapp" size={24} color="black" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  )
                }
                else{
                return (
                    <TouchableOpacity style={styles.botaoEscola} onPress={()=> navigation.navigate('AddAlunos', {idR, filhos})}>
                    <View style={styles.fundoEscola}>
                      <View style={{padding:18}}>
                        <Text style={{fontSize:17, marginBottom:2, fontFamily:'AileronH'}}>{item.nome}</Text>
                        <Text style={{fontSize:14, fontFamily:'AileronR'}}>{filhos} filhos</Text>
                        <View style={{position:'absolute', marginLeft:'82%', marginTop:'3%'}}>
                          <TouchableOpacity onPress={()=>Linking.openURL('whatsapp://send?text='+ mensagem +'&phone=' + item.telefone)}>
                            <FontAwesome name="whatsapp" size={24} color="black" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
                }
            })}
        

      </View>      
    </SafeAreaView>
  );
}

