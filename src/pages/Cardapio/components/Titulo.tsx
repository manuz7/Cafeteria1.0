import React from "react"
import { Image, Text, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;


export default function Topo(){
   return<>

        
<Text style= {estilos.titulocardapio}>Cardapio</Text>
        <View style=  {estilos.cafe}>
        <Text style= {estilos.nomeCafe}>Cafeteria Belas Artes</Text>

    </>
}


const estilos = StyleSheet.create({
      
      titulocardapio:  {
        fontSize : 26,
        lineHeight: 42,
        color: "#464646"
    },

    cardapio: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

    nomeCafe: {
      fontSize: 16,
      lineHeight: 26,
      marginLeft: 12,
      fontWeight: "bold"
     },

  })