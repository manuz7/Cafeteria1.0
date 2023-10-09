import cafe from '../../assets/LT/Café.png';
import capuccino from '../../assets/LT/capuccino.png';
import sobremesa from '../../assets/LT/sobremesa.png';

const Cardapio = {
    topo: {
        titulo: "Detalhes do Cardápio",
    },
    detalhes: {
        nome: "Carrinho de Compras",
        nomeLocal: "Cafeteria",
        descricao: "Aqui se faz magia!.",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
      titulo: "Itens do Cardápio",
      lista: [
        {
          nome: "Café",
          imagem: cafe,
        },
        {
          nome: "Capuccino",
          imagem: capuccino,
        },
        {
          nome: "Sobremesa",
          imagem: sobremesa ,
        },
      ]
    }
  }

export default Cardapio;
