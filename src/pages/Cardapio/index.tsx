import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import Topo from './components/Topo';
import Detalhe from "./components/Detalhe";

import cardapio from '../../mocks/cardapio';

export default function Cardapio() {
    return(
    <>
        <Topo titulo={cardapio.topo.titulo}/>
        <View style={style.carrinho}>
        <Detalhe nome={cardapio.detalhes.nome}
         nomeLocal={cardapio.detalhes.nomeLocal}
         descricao={cardapio.detalhes.descricao}
         preco={cardapio.detalhes.preco}
         botao={cardapio.detalhes.botao}
         />
    </View>
    </>
    )
}

const style = StyleSheet.create({
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

})
