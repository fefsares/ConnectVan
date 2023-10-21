import { Entypo, FontAwesome, AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useEffect, useState, useRef } from 'react'
import styles from './style'
import { onAuthStateChanged } from 'firebase/auth';
import {db, auth} from '../../../firebase/config';
import {View, Text,Image,  TouchableOpacity, TextInput, Modal, ScrollView, Keyboard} from 'react-native'
import { doc, getDoc, onSnapshot, getDocs, collection, collectionGroup, query, where, updateDoc} from 'firebase/firestore';

export default function Mensalidade({navigation}){
    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const [pag, setPag] = useState([])
    const [apag, setApag] = useState([])
    const [atra, setAtra] = useState([])

    const [pagA, setPagA] = useState([])
    const [apagA, setApagA] = useState([])
    const [atraA, setAtraA] = useState([])

    const pago = query(collectionGroup(db, 'responsavel'), where('pago','==', true))
    const pagar = query(collectionGroup(db, 'responsavel'), where('pago','==', false), where('data', '>', dia))
    const atraso = query(collectionGroup(db, 'responsavel'), where('pago','==', false), where('data', '<=', dia))
    const resp1 = []
    const resp2 = []
    const resp3 = []
    
    const [gatilho, setGatilho] = useState(false)

    useEffect(()=>{
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth(); //Current Month
        setDia(date)
        setMes(monthNames[month])

        consultas()

        console.log('a')


    },[gatilho])

    const consultas = async()=>{
        const q1 = await getDocs(pago)
        const q2 = await getDocs(pagar)
        const q3 = await getDocs(atraso)

        q1.forEach((responsavel)=>{
            const dado = responsavel.data()
            resp1.push(dado)
            setPag(resp1)
        })

        q2.forEach((responsavel)=>{
            const dado = responsavel.data()
            resp2.push(dado)
            setApag(resp2)
        })

        q3.forEach((responsavel)=>{
            const dado = responsavel.data()
            resp3.push(dado)
            setAtra(resp3)
        })

        setPagA(pag.length)
        setApagA(apag.length)
        setAtraA(atra.length)
        console.log(pagA, apagA, atraA)
        setGatilho(true)
    }

    if (!pag || !apag || !atra){
        return null
    }
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{padding:30}}>
                <Entypo
                    name="menu"
                    size={34}
                    color="black"
                />
            </TouchableOpacity>
            <Text>{mes}</Text>
            <Text>pago: {pagA}</Text>
            <Text>a pagar: {apagA}</Text>
            <Text>atrasado: {atraA}</Text>

            {/* {atra?(
                    <View style={{width:'100%', height:'5%', paddingHorizontal:'10%', flexDirection:'row'}}>
                        <View style={{backgroundColor:'red', height:'100%', flex:pagA}}/>
                        <View style={{backgroundColor:'blue', height:'100%', flex:apagA}}/>
                        <View style={{backgroundColor:'green', height:'100%', flex:atraA}}/>
                    </View>
            ):null} */}
            


            {atra.map((item)=>{
                return(
                    <View>
                        <Text>{item.nome}</Text>
                        <Text>Venceu dia {item.data} de {mes}</Text>
                        <TouchableOpacity>
                            <Ionicons name="notifications" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}