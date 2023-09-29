import React from 'react';
import {View, Text, Image, TouchableOpacity,} from 'react-native'
import styles from './style'

export default function PreReg ({navigation}) {
  return(
    <View style={{flex:1, backgroundColor: 'white'}}>
      <View style={styles.tela}>
        <View style={[styles.tela, {paddingTop:120, paddingBottom:30}]}>
          <Image source={require('../../../../assets/logo.png')} style={styles.logo}/>
        </View>
        <View style={[styles.tela,{paddingBottom:50}]}>
          <Text style={styles.connect}>Connect</Text>
          <Text style={styles.van}>Van</Text>
        </View>
        <View style={{flexDirection:'row', paddingVertical:10, width:'100%', paddingHorizontal:20, gap:10}}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('cadastroResponsavel')}>
            <Image source={require('../../../../assets/gradient.png')} style={styles.gradient} />
            <View style={{position:'absolute', alignItems: 'center'}}>
              <Image source={require('../../../../assets/users.png')} style={styles.icon}/>
              <Text style={{fontFamily:'AileronR', fontSize:14}}>Responsável</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('cadastroMotorista')}>
            <Image source={require('../../../../assets/gradient.png')} style={styles.gradient} />
            <View style={{position:'absolute', alignItems: 'center'}}>
              <Image source={require('../../../../assets/driver.png')} style={styles.icon}/>
              <Text style={{fontFamily:'AileronR', fontSize:14}}>Motorista</Text>
            </View>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  )
}