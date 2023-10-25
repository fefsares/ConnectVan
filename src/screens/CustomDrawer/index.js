import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import styles from './style'

export default function CustomDrawer(props){
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{}}>
                <View style={styles.container}>
                        <View style={styles.viewMae}>
                            <TouchableOpacity>
                                <Image
                                source={require('../../../assets/logo.png')}
                                style={styles.imagem}
                                />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.nome}>Grazielly Aquino</Text> 
                                <Text style={styles.email}>email@gmail.com</Text> 
                            </View>
                        </View>
                </View>

                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>
    );
};