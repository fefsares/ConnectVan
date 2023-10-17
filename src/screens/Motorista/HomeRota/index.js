import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import BottomSheet from 'react-native-simple-bottom-sheet'
import { useEffect, useState, useRef } from 'react'
import styles from './style'
import {View, Text,Image,  TouchableOpacity, TextInput, Modal, ScrollView, Linking} from 'react-native'
import MapView from 'react-native-maps';
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  doc, getDocs, collection, where, query, collectionGroup} from 'firebase/firestore';
import DropDownPicker from 'react-native-dropdown-picker';


export default function MHomeRota () {
    const [currentDate, setCurrentDate] = useState('');
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const [lati, setLati] = useState(null)
    const [longi, setLongi] = useState(null)
    const panelRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [rec, setRec] = useState([])
    const [array, setArray] =useState([])
    const arr = []
    const arr2 = []
    const [periodoAberto, setPeriodoAberto] = useState(false);
    const [periodoValue, setPeriodoValue] = useState('');
    const [periodoE, setPeriodoE] = useState([
      { label: "Manhã", value: "manhã" },
      { label: "Tarde", value: "tarde" },
      { label: "Integral", value: "integral" },
    ]);
    const q = query(collectionGroup(db, 'passageiros'), where('periodo','==', periodoValue))
    useEffect(()=>{
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth(); //Current Month
        setCurrentDate(
            'Hoje, '+date + ' de ' + monthNames[month]
        );
        local()
        peri()
    },[periodoValue])
    const local =async()=>{
        const{granted} = await requestForegroundPermissionsAsync();

        if(granted){
            const position = await getCurrentPositionAsync();
            setLati(position.coords.latitude)
            setLongi(position.coords.longitude)
        }
    }

    async function peri(){
        
        const queryy = await getDocs(q)
        
        queryy.forEach((aluno) => {
            const dado = aluno.data()
            arr.push(dado)
            setArray(arr)
            arr2.push(`/${dado.endereco}`)
            setRec(arr2)  
            console.log(aluno.data())
        })
    }

    const iniciar = () =>{
        local()

        const dado = rec.toString();
        const dadoe = dado.replace(/,/g, '')
        const e = dadoe.replace('/undefined', '')
        const end = e.replace(/ /g, '%20')
        console.log(end)
        Linking.openURL('https://www.google.com/maps/dir/'+ lati +',' + longi + end)
        
    }
    
    return(
        <View style={{flex:1, backgroundColor: 'white'}}>

            <TouchableOpacity onPress={()=>iniciar()} style={{width:'90%', backgroundColor:'yellow', alignItems: 'center', height:80, justifyContent:'center', borderRadius:50}}>
                <Image source={require('../../../../assets/gradient.png')} style={styles.gradient}/>
                <Text style={{fontFamily:'AileronR', fontSize:25, position:'absolute'}}>Iniciar rota</Text>
            </TouchableOpacity>

            {longi ? <MapView style={styles.map}
                initialRegion={{
                    latitude: lati,
                    longitude: longi,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
              >
            </MapView> : null}
            
            <BottomSheet ref={ref => panelRef.current = ref} sliderMinHeight={550} sliderMaxHeight={2000} wrapperStyle={{height:600}} lineStyle={{width:0}} onOpen={()=>setOpen(true)} onClose={()=>setOpen(false)}>
                    <View style={{ alignItems:'center'}}>
                    </View>
                    {open?(
                        <View style={{alignItems:'center', padding:10}}>
                            {array?.map((item) => {
                                return(
                                    <View>
                                        <Text>{item?.nome}</Text>
                                        <Text>{item?.endereco}</Text>
                                    </View>
                                )
                            }
                            )}
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
                            dropDownDirection="TOP"
                            dropDownContainerStyle={styles.box}
                            />
                        </View>
                    ):(
                        <View style={{alignItems:'center', padding:20, gap:10}}>
                            <TouchableOpacity onPress={() => panelRef.current.togglePanel()} style={{width:'90%', backgroundColor:'yellow', alignItems: 'center', height:80, justifyContent:'center', borderRadius:50}}>
                                <Image source={require('../../../../assets/gradient2.png')} style={styles.gradient}/>
                                <Text style={{fontFamily:'AileronR', fontSize:25, position:'absolute'}}>Editar rota</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    

            </BottomSheet>
        </View>
    )
}