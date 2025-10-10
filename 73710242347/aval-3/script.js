const products = [
  { id:1, title:'Classic Burger', desc:'Hambúrguer com queijo, alface, tomate e molho especial.', price:24.90, img:'https://source.unsplash.com/featured/?burger' },
  { id:2, title:'Frango Crocante', desc:'Sanduíche de frango empanado com salada e maionese.', price:21.50, img:'https://source.unsplash.com/featured/?chicken-sandwich' },
  { id:3, title:'Batata Frita Grande', desc:'Porção de batata frita crocante, tempero especial.', price:12.00, img:'https://source.unsplash.com/featured/?fries' },
  { id:4, title:'Veggie Wrap', desc:'Wrap vegetariano com legumes grelhados e molho tahine.', price:19.00, img:'https://source.unsplash.com/featured/?wrap' },
  { id:5, title:'Milkshake Chocolate', desc:'Milkshake cremoso com sorvete premium e calda de chocolate.', price:14.00, img:'https://source.unsplash.com/featured/?milkshake' }
];

const cart = [];
const productsGrid = document.getElementById('productsGrid');
const cartCountEl = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const closeCart = document.getElementById('closeCart');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const yearEl = document
