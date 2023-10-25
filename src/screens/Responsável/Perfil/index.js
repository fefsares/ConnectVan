import { Entypo, FontAwesome, AntDesign, FontAwesome5, Ionicons, EvilIcons } from '@expo/vector-icons';
import { useEffect, useState, useRef } from 'react'
import styles from './style'
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {View, Text,Image,  TouchableOpacity, TextInput, Modal, ScrollView, Keyboard} from 'react-native'
import { doc, getDoc, onSnapshot, getDocs, collection, collectionGroup, query, where, updateDoc} from 'firebase/firestore';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { TextInputMask } from 'react-native-masked-text';
import MaskInput from 'react-native-mask-input';

export default function EditarPerfilR({navigation}) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelfone] = useState('')
    const [nomeM, setNomeM] = useState('')
    const [emailM, setEmailM] = useState('')
    const [telefoneM, setTelefoneM] = useState('')

    useEffect(()=>{
        onAuthStateChanged(auth, async (user)=>{
            const docRef = doc(db, 'responsavel', user.uid)
            const snapshot = await getDoc(docRef)
            setNome(snapshot.data().nome)
            setEmail(snapshot.data().email)
            setTelfone(snapshot.data().telefone)
        })
    },[])

    const salvar=()=>{
        onAuthStateChanged(auth, async (user)=>{
            const docRef = doc(db, 'responsavel', user.uid)
            if(nomeM!=''){
                updateDoc(docRef, {nome:nomeM})
            }
            if(telefoneM!='' && telefoneM.length==15){
                updateDoc(docRef, {telefone:telefoneM})
            }
            if(emailM!=''){
                updateDoc(docRef, {email:emailM})
            }
        })
    }

      return (
    
        <View style={styles.container}>
        <Image source={require('../../../../assets/gradient.png')} style={{position:'absolute', width:'100%', height:'100%'}}/>
            <View style={{width:'100%', alignItems:'center', paddingTop:'10%', flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{paddingHorizontal:'2%'}}>
                            <Entypo
                                name="menu"
                                size={34}
                                color="black"
                            />
                        </TouchableOpacity>
                        <View style={{ alignSelf:'center', paddingLeft:'20%'}}>
                            <Text
                            style={{
                                fontSize: 24,
                                fontFamily:'AileronH',
                                alignSelf:'center'
                            }}>
                            Editar Perfil
                            </Text>
                        </View>
                        
            </View>

    
          <View style={styles.fundoTab}>
    
            <View style={{flexDirection:'column', alignContent:'center', marginTop:17}}>
              <Text style={{fontSize:15, fontFamily:'AileronH', marginTop:'3%'}}>Nome</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value)=>setNomeM(value)}
                value={nomeM}
                placeholder={nome}
              />
            </View>
    
            <View style={{flexDirection:'column', alignContent:'center', marginTop:17}}>
              <Text style={{fontSize:15, fontFamily:'AileronH'}}>E-mail</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value)=>setEmailM(value)}
                value={emailM}
                placeholder={email}
                keyboardType="email"
              />
            </View>
    
            <View style={{flexDirection:'column', alignContent:'center', marginTop:17}}>
              <Text style={{fontSize:15, fontFamily:'AileronH'}}>Telefone</Text>
              <TextInputMask
                style={styles.input}
                onChangeText={(value)=>setTelefoneM(value)}
                value={telefoneM}
                placeholder={telefone}
                maxLength={15} type={'cel-phone'}options={{maskType: 'BRL', withDDD: true, dddMask: '(99) '}}
              />
            </View>
    
            
            <View style={styles.viewBotao}>
              <TouchableOpacity style={[styles.botaoAdd, {backgroundColor:'gray'}]} onPress={()=>navigation.navigate('Home')}>
                <Image source={require('../../../../assets/gradient2.png')} style={styles.gradient} />
                <Text style={{fontSize:16, position:'absolute', fontFamily:'AileronH'}}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoAdd} onPress={()=>salvar()}>
                <Image source={require('../../../../assets/gradient.png')} style={styles.gradient} />
                <Text style={{fontSize:16, fontFamily:'AileronH', position:'absolute'}}>Salvar</Text>
              </TouchableOpacity>
            </View>
    
          </View>
        </View>
      );
    }