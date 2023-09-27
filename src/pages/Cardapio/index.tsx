import React from 'react';
import{ StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import Topo from './components/Topo';



export default function Carrinho (){
    return <>
   

       <Topo/>   
       <View style= {estilos.cafe}>
            <Detalhe/>
       </View>
      
        
        
        <View style= {estilos.card}>
        <Image source={cafe} style={estilos.img} />
        <View  style= {estilos.cafezinho}>
        <Text style={estilos.text}>Cappuccino Gourmet </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
        <Text style={estilos.sobre}> Dose de café espresso, leite vaporizado e um mínimo de 1 cm de espessura de espuma do leite </Text>
        </View>
        </View>
       
}






const estilos = StyleSheet.create({
     
        
           
            cafezinho: {
                    width: "40%",
                    height: 280,
                    marginTop: 10,
                    marginLeft: 10,
                  
                    
                  
            },


            

         
    })