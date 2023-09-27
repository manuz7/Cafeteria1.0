import React from "react"
import { Image, Text, StyleSheet, Dimensions, View } from 'react-native';
const width = Dimensions.get('screen').width;


export default function Topo(){
   return<>

    <Text style = {estilos.titulocardapio}>Cardapio</Text>
    <View style = {estilos.cafe}>
    <Text style = {estilos.nomeCafe}>Cafeteria Belas Artes</Text>
    </View>
    <View style= {estilos.card}     >
    <Image source={cafe} style= {estilos.img} />
    
    </View>


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
     imagemCafe: {
        width: 32,
        height: 32
    },

    cafe:{
        flexDirection: "row",
        paddingVertical: 12
    },
    descricao:{
        color: "#A3A3A3",
        fontStyle: "italic"
    },


    card: {
        width: "100%",
        height: 300,
        backgroundColor: "#000",
        flexDirection: "row",
    },

    img: {
      width: "40%",
      height: 280,
      marginTop: 10,
      marginLeft: 10
    },

    preco: {
    marginTop:10,
    color: "#2A9F85",
  },

  sobre: {
      marginTop:20,
      color: "#F4F9F6",
     fontFamily:  "MontserratRegular"
    },
      text: {
       color: "#FF9933",
       fontStyle: "italic",
       fontWeight: "bold",
       fontSize: 20
      }

})