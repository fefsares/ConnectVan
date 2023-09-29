import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import BottomSheet from 'react-native-simple-bottom-sheet';
import { useEffect, useState, useRef } from 'react'
import styles from './style'
import {View, Text,Image,  TouchableOpacity, TextInput, Modal, ScrollView, Linking} from 'react-native'
import MapView from 'react-native-maps';
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {  doc, getDocs, collection} from 'firebase/firestore';


export default function MHomeRota ({route, navigation}) {
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

    useEffect(()=>{
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth(); //Current Month
        setCurrentDate(
            'Hoje, '+date + ' de ' + monthNames[month]
        );
        local()

        onAuthStateChanged(auth, async(user)=>{
            if(user){
                const snapshot = await getDocs(collection(db, 'motorista', user.uid, 'passageiros'))
                snapshot.forEach(aluno => {
                    const dado = aluno.data()
                    arr.push(dado)
                    setArray(arr)
                    arr2.push(`${dado.endereco}|`)
                    setRec(arr2)
                });
            }
            
            console.log(rec)
        })

    },[])
    const local =async()=>{
        const{granted} = await requestForegroundPermissionsAsync();

        if(granted){
            const position = await getCurrentPositionAsync();
            setLati(position.coords.latitude)
            setLongi(position.coords.longitude)
        }
    }

    const iniciar = () =>{
        // const obj = {}

        

        // const x = rec.length
        // for(let i; i<x; i++){
        //     obj.end = rec[i]
        // }

        rec.map((item)=>{
            
        })
        console.log(rec)
        // Linking.openURL('https://www.google.com/maps/dir/?api=1&origin=' + lati + ',' + longi + '&waypoints=' + rec + '&travelmode=driving')
    }
    
    return(
        <View style={{flex:1, backgroundColor: 'white'}}>


            {longi ? <MapView style={styles.map}
                initialRegion={{
                    latitude: lati,
                    longitude: longi,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
              >
            </MapView> : null}
            
            <BottomSheet isOpen={false} ref={ref => panelRef.current = ref} sliderMinHeight={180} sliderMaxHeight={2000} wrapperStyle={{height:600}} lineStyle={{width:0}} onOpen={()=>setOpen(true)} onClose={()=>setOpen(false)}>
                {(onScrollEndDrag) => (
                    <ScrollView onScrollEndDrag={onScrollEndDrag}>
                    <View style={{ alignItems:'center'}}>
                    </View>
                    {open?(
                        <View style={{alignItems:'center', padding:10}}>
                            <TouchableOpacity onPress={() => iniciar()} style={{width:'90%', backgroundColor:'yellow', alignItems: 'center', height:60, justifyContent:'center', borderRadius:50}}>
                                <Image source={require('../../../../assets/gradient.png')} style={styles.gradient}/>
                                <Text style={{fontFamily:'AileronR', fontSize:25, position:'absolute'}}>Confirmar</Text>
                            </TouchableOpacity>
                            {array?.map((item) => {
                                return(
                                    <View>
                                        <Text>{item?.nome}</Text>
                                        <Text>{item?.endereco}</Text>
                                    </View>
                                )
                            }
                            )}
                        </View>
                    ):(
                        <View style={{alignItems:'center', padding:20, gap:10}}>
                            <TouchableOpacity onPress={()=>iniciar()} style={{width:'90%', backgroundColor:'yellow', alignItems: 'center', height:40, justifyContent:'center', borderRadius:50}}>
                                <Image source={require('../../../../assets/gradient.png')} style={styles.gradient}/>
                                <Text style={{fontFamily:'AileronR', fontSize:25, position:'absolute'}}>Iniciar rota</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => panelRef.current.togglePanel()} style={{width:'90%', backgroundColor:'yellow', alignItems: 'center', height:40, justifyContent:'center', borderRadius:50}}>
                                <Image source={require('../../../../assets/gradient.png')} style={styles.gradient}/>
                                <Text style={{fontFamily:'AileronR', fontSize:25, position:'absolute'}}>Editar rota</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    
                    </ScrollView>
                )}
            </BottomSheet>
        </View>
    )
}