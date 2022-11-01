import BTCUlrich from "./images/BTCUlrich.png";
import CryptoExplained from "./images/CryptoExplained.png";
import CapaManual from "./images/CapaManual.png";
import TrezorTNew from "./images/TrezorTNew.png";
import Ledger from "./images/Ledger.png";
import SafePal from "./images/SafePal.png";
import x570 from "./images/products/eletronics/asusx570.png";
import ramCorsair8gb from "./images/products/eletronics/corsairVengeance8gb.webp";
import ryzen5600x from "./images/products/eletronics/ryzen5600x.jpg";
import videoCard4090 from "./images/products/eletronics/videocard4090.png";
import sombraDoVento from "./images/products/books/aSombraDoVento.jpg";

export const products = [
  {
    books: [
      {
        name: "A Sombra do Vento",
        price: 2.5,
        rating: 3,
        offer: true,
        mostSold: false,
        image: sombraDoVento,
        desc: "Barcelona, 1945. Daniel Sempere acorda na noite de seu aniversário de onze anos e percebe que já não se lembra do rosto da falecida mãe. Para consolá-lo, o pai leva o menino pela primeira vez ao Cemitério dos Livros Esquecidos. É lá que Daniel descobre A sombra do vento, romance escrito por Julián Carax, que logo se torna seu autor favorito, sua obsessão. No entanto, quando começa a buscar outras obras do escritor, Daniel descobre que alguém anda destruindo sistematicamente todos os exemplares de todos os livros que Carax já publicou, e que o que tem nas mãos pode muito bem ser o último volume sobrevivente. Junto com seu amigo Fermín, Daniel percorre a cidade, adentrando as ruelas e os segredos mais obscuros de Barcelona. Anos se passam e sua investigação inocente se transforma em uma trama de mistério, magia, loucura e assassinato. E o destino de seu autor favorito de repente parece intimamente conectado ao dele.",
      },
      {
        name: "Bitcoin - A moeda na era digital",
        price: 5.11,
        rating: 4,
        offer: true,
        mostSold: false,
        image: BTCUlrich,
        desc: "O Bitcoin é uma forma de dinheiro, assim como o real, dólar ou euro, com a diferença de ser puramente digital e não ser emitido por nenhum governo. O seu valor é determinado livremente pelos indivíduos no mercado. Você lembra como a internet e o e-mail revolucionaram a comunicação? Antes, para enviar uma mensagem a uma pessoa do outro lado da Terra, era necessário fazer isso pelos correios. Nada mais antiquado. Você dependia de um intermediário para, fisicamente, entregar uma mensagem. Pois é, retornar a essa realidade é inimaginável. O que o e-mail fez com a informação, o Bitcoin fará com o dinheiro. Com o Bitcoin você pode transferir fundos de A para B em qualquer parte do mundo sem jamais precisar confiar em um terceiro para essa simples tarefa. O Bitcoin é a maior inovação tecnológica desde a internet, é revolucionário, sem precedentes e tem o potencial de mudar o mundo de uma forma jamais vista. À moeda, ele é o futuro. Ao avanço da liberdade individual, é uma esperança e uma grata novidade.",
      },
      {
        name: "Crypto Explained: O guia completo para o empreendedor ter sucesso no novo mundo das criptomoedas.",
        price: 3.41,
        rating: 2,
        offer: false,
        mostSold: true,
        image: CryptoExplained,
        desc: "Descubra do zero como iniciar no mundo das criptomoedas e o que precisa fazer para iniciar a fazer dinheiro usando as criptomoedas como Bitcoin, Ethereum, Binance, Cardano e tantas outras.",
      },
      {
        name: "Manual Descomplicado do Mundo Cripto - Tudo que Você Precisa Saber Para Investir e Lucrar Nesse Mercado!",
        price: 8.9,
        rating: 3,
        offer: false,
        mostSold: false,
        image: CapaManual,
        desc: "O Manual Descomplicado do Mundo Cripto, é o livro que todo investidor ou futuro investidor desse mercado precisa ter consigo. Nele nós vamos do inicio desse mundo até como abrir sua carteira, investir nas melhores moedas e melhores jogos NFTs. Imagine começar a ter resultados com 3, 5 dias? É o que algumas clientes estão tendo, mas não gostamos só de falar e sim mostrar e te ajudar a também chegar no seu resultado. O fato é que quando você iniciar em nosso manual, sua mente e intuições irão se transformar nos primeiros dias, Faça como tantos outros e aprenda a viver desse novo Mercado Digital.",
      },
    ],
  },
  {
    eletronics: [
      {
        name: "Ledger Nano S Hardware Wallet",
        price: 85.18,
        rating: 3,
        offer: false,
        mostSold: true,
        image: Ledger,
        desc: "Ledger Nano S é uma carteira de hardware Bitcoin, Ethereum e Altcoins, com base em recursos de segurança robustos para armazenamento de ativos criptográficos e garantia de pagamentos digitais. Ele se conecta a qualquer computador (USB) e incorpora uma tela OLED segura para verificar e confirmar cada transação com um toque em seus botões laterais.",
      },
      {
        name: "Trezor T Wallet",
        price: 93.13,
        rating: 4,
        offer: true,
        mostSold: false,
        image: TrezorTNew,
        desc: "O Trezor T suporta mais de 1.600 criptomoedas, incluindo Bitcoin, Ethereum, ADA e XRP, permitindo que você gerencie vários ativos com a mesma carteira de hardware..",
      },
      {
        name: "SafePal S1 Wallet",
        price: 97.63,
        rating: 5,
        offer: false,
        mostSold: false,
        image: SafePal,
        desc: "Carteira de hardware SafePal S1 criptomoeda, armazenamento frio sem fio para bitcoin, Ethereum e mais tokens, Internet isolada e 100% offline, armazena com segurança chaves privadas, sementes e ativos de criptografia.",
      },
    ],
  },
  {
    computers: [
      {
        name: "Asus x570",
        price: 0.1,
        rating: 2,
        offer: false,
        mostSold: true,
        image: x570,
        desc: "Asus x570.",
      },
      {
        name: "Memoria Ram Corsair 8gb",
        price: 0.1,
        rating: 4,
        offer: true,
        mostSold: false,
        image: ramCorsair8gb,
        desc: "Memoria Ram Corsair 8gb.",
      },
      {
        name: "AMD Ryzen 5600x",
        price: 0.1,
        rating: 3,
        offer: false,
        mostSold: true,
        image: ryzen5600x,
        desc: "AMD Ryzen 5600x.",
      },
      {
        name: "RTX 4090Ti",
        price: 0.1,
        rating: 1,
        offer: true,
        mostSold: false,
        image: videoCard4090,
        desc: "RTX 4090Ti.",
      },
    ],
  },
  {
    criptos: [
      {
        name: "Guia",
        price: 4.73,
        rating: 1,
        offer: false,
        mostSold: true,
        image: CapaManual,
        desc: "Neste livro,.",
      },
      {
        name: "Guia",
        price: 4.73,
        rating: 1,
        offer: false,
        mostSold: false,
        image: CapaManual,
        desc: "Neste livro,.",
      },
      {
        name: "Guia",
        price: 4.73,
        rating: 1,
        offer: false,
        mostSold: false,
        image: CapaManual,
        desc: "Neste livro,.",
      },
    ],
  }
];
