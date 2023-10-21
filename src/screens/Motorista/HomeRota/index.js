import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import BottomSheet from 'react-native-simple-bottom-sheet'
import { useEffect, useState, useRef } from 'react'
import styles from './style'
import {View, Text,Image,  TouchableOpacity, TextInput, Modal, ScrollView, Linking, FlatList} from 'react-native'
import MapView from 'react-native-maps';
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  doc, getDocs, collection, where, query, collectionGroup} from 'firebase/firestore';
import DropDownPicker from 'react-native-dropdown-picker';
import { Entypo, FontAwesome, Ionicons} from '@expo/vector-icons';


export default function MHomeRota ({navigation}) {
    const [rec, setRec] = useState([])
    const [rec2, setRec2] = useState([])
    const [array, setArray] =useState([])
    const [lati, setLati] = useState('')
    const [longi, setLongi] = useState('')
    const [escola, setEscola] = useState([])
    const arr = []
    const arr2 = []
    const arr3 = []
    const [periodoAberto, setPeriodoAberto] = useState(false);
    const [periodoValue, setPeriodoValue] = useState('');
    const [periodoE, setPeriodoE] = useState([
      { label: "Manhã", value: "manhã" },
      { label: "Tarde", value: "tarde" },
      { label: "Integral", value: "integral" },
    ]);
    const q = query(collectionGroup(db, 'passageiros'), where('periodo','==', periodoValue))
    useEffect(()=>{
        local()
        peri()
        console.log(array)
    },[periodoValue])

    async function peri(){
        const queryy = await getDocs(q)
        queryy.forEach((aluno) => {
            const dado = aluno.data()
            arr.push(dado)
            setArray(arr)
            arr2.push(`/${dado.endereco}`)
            const esc = []
            
            if(arr3.includes(dado.escola)){
            }
            else{
              arr3.push(`/${dado.escola}`)
              esc.push(dado.escola)
            }
            setRec(arr2)
            setRec2(arr3)
            setEscola(esc)
            console.log(escola)
        })
    }
    if(!longi || !lati){
      return null
    }
    const iniciar = () =>{
        local()
        const dado1 = rec2.toString();
        const dadoe1 = dado1.replace(/,/g, '')
        const e1 = dadoe1.replace('/undefined', '')
        const end1 = e1.replace(/ /g, '%20')


        const dado = rec.toString();
        const dadoe = dado.replace(/,/g, '')
        const e = dadoe.replace('/undefined', '')
        const end = e.replace(/ /g, '%20')
        console.log(end)
        Linking.openURL('https://www.google.com/maps/dir/'+ lati +',' + longi + end + end1)
        
    }
    async function local(){
        const{granted} = await requestForegroundPermissionsAsync();

        if(granted){
            const position = await getCurrentPositionAsync();
            setLati(position.coords.latitude)
            setLongi(position.coords.longitude)
        }
    }
      
      const Item = ({item}) => (
        <View style={{flexDirection:'row', marginTop:'2%', marginRight:'47%'}}>
            <View style={[styles.viewMae, {height:13}]}/>
            <FontAwesome name="user-circle-o" size={24} color="black" />
            <View style={{flexDirection:'column', marginLeft:'4%'}}>
                <Text style={styles.viewFilha}>{item.nome}</Text>
                <Text style={styles.infos}>{item.endereco}</Text>
            </View>
        </View>
      );
      
      
        const renderItem = ({item}) => {
      
          return (
            <Item
              item={item}
            />
          );
        }
    return (

        <View style={styles.container}>
          <View style={{flexDirection:'row', paddingHorizontal:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeMotorista')}>
              <Entypo name="chevron-left" size={24} color="black" style={[styles.iconBack, {marginTop:16}]}/>
            </TouchableOpacity>
            <Text style={{marginTop:'5%', fontSize:18, fontWeight:'bold', marginLeft:'23%'}}>Iniciar Rota</Text>
          </View>
    
          <View style={styles.fundoTab}>
    
            <View style={styles.accordion}>
                <DropDownPicker
                style={styles.dropdown}
                containerStyle={styles.containerStyle}
                textStyle={styles.text}
                open={periodoAberto}
                value={periodoValue}
                items={periodoE}
                setOpen={setPeriodoAberto}
                setValue={setPeriodoValue}
                setItems={setPeriodoValue}
                placeholder='Período'
                dropDownDirection="BOT"
                dropDownContainerStyle={styles.box}
                />
            </View>
            <FlatList
                data={array}
                renderItem={renderItem}
            />

            {escola.map((item)=>{
              <View style={{flexDirection:'row', marginTop:'2%', marginRight:'47%'}}>
              <View style={[styles.viewMae, {height:13}]}/>
              <FontAwesome name="user-circle-o" size={24} color="black" />
              <View style={{flexDirection:'column', marginLeft:'4%'}}>
                  <Text style={styles.viewFilha}>{item.escola}</Text>
              </View>
          </View>
            })}
            <View style={styles.viewBotao}>
              <TouchableOpacity onPress={() => iniciar()} style={styles.botaoMaps}>
                    <Image source={require('../../../../assets/gradient.png')} style={styles.gradient}/>
                    <Ionicons name="ios-location-sharp" size={24} color="black" />
                    <Text style={{fontSize:16, fontWeight:'bold', marginLeft:'5%'}}>Abrir no Maps</Text>
                </TouchableOpacity>
            </View>
    
          </View>
        </View>
      );
}