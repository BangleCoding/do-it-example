// //전개 연산자
// //나열형 자료를 추출하거나 연결할 때 사용

// var array1 = ['one', 'two'];
// var array2 = ['three', 'four'];
// const combined = [...array1, ...array2];
// const [first, second, three='empty', ...others] = array1;

// //올바르지 못한 예
// // var wrongArr = ...array1;
// func(...args){var [first, ...others] = args;}

// let objectOne = {one :1, two: 2, other: 0};
// let objectTwo = {three:3, four:4, other:-1};
// let combined = { ...objectOne, objectTwo, };
// var combined2 = {...objectTwo, objectOne,};
// let { other, ...others} = combined;

// class Shape {
//   static create(x,y){return new Shape(x,y);}
//   name = 'Shape';
//   constructor(x, y){this.move(x,y);}
//   move(x,y){this.x = x;this.y = y}
//   area(){return 0;}
// }

// class Circle extends Shape {
//   constructor(x, y, radius){
//     super(x,y);
//     this.radius = radius;
//   }

//   area(){
//     if(this.radius===0) return super.area();
//     return this.radius * this.radius;
//   }
// }

// let c = new Circle(0,0,10);
// c.area();

// var add = (first, second) => {
//   return first + second;
// };
// var add2 = (first, second) => first + second;
// var addAndMultiple = (first, second) =>({add: first + second, multiply : first * second});

// function addNumber(num){
//   return function(value){
//     return num + value;
//   })
// }
// let addNumber2 = num => value => num + value;

// class MyClass{
//   value = 10;
//   constructor(){
//     var addThis2 = function(first, second){
//       return this.value + first + second;
//     }.bind(this);
//     var addThis3 = (first, second) => this.value +first + second;
//   }
// }

// var x = 0;
// var y = 0;
// var obj = {x,y};
// var randomKeyString = 'other';
// var combined = {
//   ['one' + randomKeyString]: 'some value',
// };
// var obj2 = {
//   x,
//   methodA(){console.log('method A');},
//   methodB(){return 0; }
// };

// var list = [0,1];
// var [
//   item1,
//   item2,
//   item3 = -1,
// ] = list;
// [item2, item1] = [item1, item2];
// var obj = {
//   key1: 'one',
//   key2: 'two',
// };
// var {
//   key1: newkey1,
//   key2,
//   key3 = 'default key3 value',
// } = obj;
