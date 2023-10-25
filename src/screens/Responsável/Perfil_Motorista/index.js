import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { Entypo, FontAwesome, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import styles from './style'
import {useEffect, useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  doc, getDoc, setDoc, updateDoc, arrayRemove, arrayUnion} from 'firebase/firestore';

export default function Motorista_Perfil ({route, navigation}) {
    const {idM} = route.params
    const [rec, setRec] = useState('');
    const [escolas, setEscolas] = useState([])
    const [showElement, setShowElement] = useState(false)

    const Item = ({item}) => (
        <View>
            <Text style={{fontSize:20}}>{item}</Text>
        </View>
      );

      const renderItem = ({item}) => {
      
        return (
          <Item
            item={item}
          />
        );
      }


    useEffect(()=>{
        dados()
    }, [])
    if(!rec || !escolas){
        return(
            <View style={{padding:50}}>
            <TouchableOpacity onPress={()=>dados()}>
              <Text>reload</Text>
            </TouchableOpacity>
          </View>
        )
    }

    async function dados(){
        const docRef = doc(db, 'motorista' , idM)
        const snapshot = await getDoc(docRef)
        setRec(snapshot.data())
        setEscolas(rec.escola)
    }

    const contratar=async()=>{
        onAuthStateChanged(auth, async(user)=>{
            const docRef = doc(db, 'motorista' , idM)
            updateDoc(docRef,{solicitacao:arrayUnion(user.uid)})
            setShowElement(true)
        })
    }
    return(
        <View style={{paddingVertical:50}}>
            <Text style={{fontSize:20}}>{rec.nome}</Text>
            <Text style={{fontSize:20}}>{rec.telefone}</Text>
            <FlatList
                data={escolas}
                renderItem={renderItem}
            />

            <TouchableOpacity onPress={()=>contratar()}>
                <Text>
                    contratar
                </Text>
            </TouchableOpacity>

            {showElement==true ? (
                <View style={{position:'absolute', backgroundColor:'green', marginTop: 50}}>
                    <Text style={{fontFamily:'aileron-regular', fontSize:25, color:'white'}}>Solicitação enviada!</Text>
                </View>
            ):null}
        </View>
    )
}