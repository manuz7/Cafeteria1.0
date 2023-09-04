import React from 'react';
import{ StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import topo from '../../../assets/LT/cafe.png';
import logo from '../../../assets/LT/logo.png';
import cafe from '../../../assets/CG.png';

const width = Dimensions.get('screen').width;

export default function Carrinho (){
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style= {estilos.titulo}>Detalhes do Cardapio</Text>
    <View style= {estilos.cardapio}>
        <Text style= {estilos.titulocardapio}>Cardapio</Text>
        <View style=  {estilos.cafe}>
        <Text style= {estilos.nomeCafe}>Cafeteria Belas Artes</Text>
        </View>

        
        
        <View style= {estilos.card}>
        <Image source={cafe} style={estilos.img} />
        <View  style= {estilos.cafezinho}>
        <Text style={estilos.text}>Cappuccino Gourmet </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
        <Text style={estilos.sobre}> Dose de café espresso, leite vaporizado e um mínimo de 1 cm de espessura de espuma do leite </Text>
        </View>
        </View>
       </View>
       </>
}






const estilos = StyleSheet.create({
      topo: {
          width: "100%",
          height: 578 / 768 * width
      },
      titulo: {
          fontSize: 24,
          fontWeight: "bold",
          lineHeight: 17,
          width: "100%",
          textAlign: "center",
          color: "white",
          position: "absolute",
          padding: 16
          
      },
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
            },
           
            cafezinho: {
                    width: "40%",
                    height: 280,
                    marginTop: 10,
                    marginLeft: 10,
                  
                    
                  
            },


            

         
    })