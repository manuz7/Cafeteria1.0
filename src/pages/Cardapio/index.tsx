import React from 'react';
import{ StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import Topo from './components/Topo';



export default function Carrinho (){
    return <>
   

       <Topo/>   
    <View style= {estilos.cardapio}>
       
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