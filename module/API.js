var API = {
    pizzaria: 'Tony Pizzaria',
    categorias: [
        {
          id: 1,
          nome: "Pizzas",
          imagem: "../img/Vector.png"
        },
        {
          id: 2,
          nome: "Bebidas",
          imagem: "../img/Kawaii Soda.png"
        },
        {
          id: 3,
          nome: "Frutas",
          imagem: "../img/Watermelon.png"
        },
        {
          id: 4,
          nome: "Pizzas",
          imagem: "../img/Pizza.png"
        },
        {
          id: 5,
          nome: "Sundaes",
          imagem: "../img/Ice Cream Sundae.png"
        },
        {
          id: 6,
          nome: "Sorvetes",
          imagem: "../img/Kawaii Ice Cream.png"
        }
      ],
    favoritas: [
      {
        id: '1',
        nomePizza: 'Pizza de calabresa com queijo',
        preco: 'R$ 16,00',
        imagem: '../img/Rectangle 6.png',
        descricao: 'Uma clássica combinação de calabresa suculenta e queijo derretido, perfeita para os amantes de sabores tradicionais.',
        comentarios: [
          {
           id: '1',
           titulo_comentário: "Pizza muito boa!",
           imagem: "../img/Ellipse 7.png",
           comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          },
          {
            id: '2',
            titulo_comentario: "Essa pizza é demais, recomendo",
            imagem: "../img/Ellipse 8.png",
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          }
        ]
      },
      {
        id: '2',
        nomePizza: 'Pizza de peperonni com queijo',
        preco: 'R$ 19,00',
        imagem: '../img/Rectangle 14.png',
        description: 'Delicie-se com a intensidade do peperonni combinada com a cremosidade do queijo, uma explosão de sabor em cada mordida.',
        comentarios: [
          {
           id: '1',
           titulo_comentário: "Pizza muito boa!",
           imagem: "../img/Ellipse 7.png",
           comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          },
          {
            id: '2',
            titulo_comentario: "Essa pizza é demais, recomendo",
            imagem: "../img/Ellipse 8.png",
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          }
        ]
      },
      {
        id: '3',
        nomePizza: 'Pizza de calabresa com queijo',
        preco: 'R$ 16,00',
        imagem: '../img/Rectangle 15 (1).png',
        descricao: 'Uma opção irresistível que une a suavidade do frango ao sabor marcante do catupiry, proporcionando uma experiência única.',
        comentarios: [
          {
           id: '1',
           titulo_comentário: "Pizza muito boa!",
           imagem: "../img/Ellipse 7.png",
           comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          },
          {
            id: '2',
            titulo_comentario: "Essa pizza é demais, recomendo",
            imagem: "../img/Ellipse 8.png",
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          }
        ]
      },
      {
        id: '4',
        nomePizza: 'Pizza de peperonni com queijo',
        preco: 'R$ 19,00',
        imagem: '../img/Rectangle 14.png',
        descricao: 'Delicie-se com a intensidade do peperonni combinada com a cremosidade do queijo, uma explosão de sabor em cada mordida.',
        comentarios: [
          {
           id: '1',
           titulo_comentário: "Pizza muito boa!",
           imagem: "../img/Ellipse 7.png",
           comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          },
          {
            id: '2',
            titulo_comentario: "Essa pizza é demais, recomendo",
            imagem: "../img/Ellipse 8.png",
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
          }
        ]
      },
    ],
    Recomendados: [
        {
          id: '1',
          nomePizza: 'Pizza de peperoni com queijo e tomate',
          preco: 'R$14,00',
          imagem:'../img/Rectangle 16.png',
          descricao: 'Uma variação da clássica peperonni, com a adição refrescante de tomates. Uma combinação equilibrada de sabores.',
          comentarios: [
            {
             id: '1',
             titulo_comentário: "Pizza muito boa!",
             imagem: "../img/Ellipse 7.png",
             comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            },
            {
              id: '2',
              titulo_comentario: "Essa pizza é demais, recomendo",
              imagem: "../img/Ellipse 8.png",
              comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            }
          ]
        },
        {
          id: '2',
          nomePizza: 'Pizza brotinho com queijo e tomate',
          preco: 'R$12,00',
          imagem:'../img/Rectangle 17 (1).png',
          descricao: 'Uma opção mais leve e perfeita para uma refeição individual, com a clássica combinação de queijo e tomate.',
          comentarios: [
            {
             id: '1',
             titulo_comentário: "Pizza muito boa!",
             imagem: "../img/Ellipse 7.png",
             comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            },
            {
              id: '2',
              titulo_comentario: "Essa pizza é demais, recomendo",
              imagem: "../img/Ellipse 8.png",
              comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            }
          ]
        },
        {
          id: '3',
          nomePizza: 'Pizza de peperoni com queijo e tomate',
          preco: 'R$14,00',
          imagem:'../img/Rectangle 16.png',
          descricao: 'Uma variação da clássica peperonni, com a adição refrescante de tomates. Uma combinação equilibrada de sabores.',
          comentarios: [
            {
             id: '1',
             titulo_comentário: "Pizza muito boa!",
             imagem: "../img/Ellipse 7.png",
             comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            },
            {
              id: '2',
              titulo_comentario: "Essa pizza é demais, recomendo",
              imagem: "../img/Ellipse 8.png",
              comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
            }
          ]
        },
    ],
    bebidas: [
        {
          id: '1',
          nomeBebida: 'Coca-cola 2L',
          preco: 'R$ 14,99',
          descricao: 'Refrigerante Garrafa 2L \n Embalagem Econômica',
          imagem: '../img/Rectangle 29.png'
        },
        {
          id: '2',
          nomeBebida: 'Cerveja Heineken',
          preco: 'R$ 17,99',
          descricao: 'Refrigerante Garrafa 2L \n Embalagem Econômica',
          imagem: '../img/Rectangle 31.png'
        },
        {
          id: '3',
          nomeBebida: 'Coca-cola 2L',
          preco: 'R$ 14,99',
          descricao: 'Refrigerante Garrafa 2L \n Embalagem Econômica',
          imagem: '../img/Rectangle 29.png'
        },
      ]
}