import { Entypo, FontAwesome, AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useEffect, useState, useRef } from 'react'
import styles from './style'
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {View, Text,Image,  TouchableOpacity, TextInput, Modal, ScrollView, Keyboard, Linking} from 'react-native'
import { doc, getDoc, onSnapshot, getDocs, collection, collectionGroup, query, where, updateDoc} from 'firebase/firestore';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//fazer home pra nenhum motorista
export default function RHome ({route, navigation}) {
    const [motorista, setMotorista] = useState('')
    const [viagem, setViagem] = useState(false);
    const [rota, setRota] = useState('')
    useEffect(()=>{
        onAuthStateChanged(auth, async(user)=>{
            const docRef = doc(db, 'responsavel', user.uid)
            const snapshot = await getDoc(docRef)
            const dado = snapshot.data()

            const moto = dado.motorista

            if(moto != undefined){
                const docRef2 = doc(db, 'motorista', moto)
                const snapshot2 = await getDoc(docRef2)
                const dado2 = snapshot2.data()
                setMotorista(dado2)
                setViagem(motorista.viajando)
                if(viagem){
                    setRota(motorista.rota)
                }
            }
        })
    },[])

    const acompanhar=()=>{
        Linking.openURL(rota)
    }
    return(
        <View>
            <View style={[styles.tela, {paddingTop:50, paddingHorizontal:20, flexDirection:'row'}]}>
                <TextInput style={styles.input} onFocus={()=>navigation.navigate('Pesquisar')}/>
                <FontAwesome name="search" size={24} color="black" style={[styles.icon, {paddingTop:50, paddingLeft:340}]} onPress={()=>navigation.navigate('Pesquisar')}/>
            </View>

            <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{paddingHorizontal:'2%'}}>
                <Entypo
                    name="menu"
                    size={34}
                    color="black"
                />
            </TouchableOpacity>
            {motorista?(
                    <View>
                        <Text>{motorista.nome}</Text>
                        <Text>Avisos</Text>
                        {motorista.avisando?(
                            <View>
                                <Text>{motorista.aviso}</Text>
                                <Text>{motorista.data}</Text>
                            </View>
                            
                        ):(
                            <Text>Nenhum aviso.</Text>
                        )}
                    </View>
            ):null}
            {viagem?(
                <TouchableOpacity onPress={()=>acompanhar()}>
                    <Text>Acompanhar rota</Text>
                </TouchableOpacity>
            ):null}
                


            
        </View>
    )
}