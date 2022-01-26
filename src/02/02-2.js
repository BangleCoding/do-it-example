var cart = { name: 'book', price: 1500 };
var getTotal = function (cart) {
  return cart.price + '원';
};

var myCart = '장바구니에 ' + cart.name + '가 있습니다. 총 금액은 ' + getTotal(cart) + ' 입니다.';

let cart2 = { name: 'book', price: 1500 }; //
let getTotal2 = function (cart) {
  return `${cart.price} 원 `;
};

let myCart2 = `장바구니에 ${cart2.name}가 있습니다. 총 금액은 ${getTotal2(cart2)} 입니다.`;
