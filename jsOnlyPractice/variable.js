//基础的可变与不可变变量练习

//数字:
var x1, x2, x3, x4, x5, x6;
x1 = 1;
x2 = 1.2;
x3 = 1.000000000000001;
x4 = 4;
x5 = 5;
console.log(typeof x1);
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4 + x5);
console.log(x4 ** x5);

//直接对string进行数字的操作时, 除了+都会先尝试转换回数字进行数学运算
//如果失败结果会返回NaN, not a number
var x = 100 / "Apple";
isNaN(x); // returns true because x is Not a Number

//数字也可以是一个object, 但是三等号会看出不同.
/*
数字方法:
    toString():返回string形式
    toExponential(a):返回对应几位数的e+0形态
    toFixed(a):返回固定几位数的小数形态
    toPrecision(a):返回固定多少长度的string 形态
    Number()/parseInt()/parseFloat():都可以把值转化为数字.
*/

//boolean
var x11, x12, x13, x14, x15, x16;
x11 = true;
x12 = false;
console.log(typeof x11);
console.log(!x11);
console.log(!x12);
console.log(x11 && x12);
console.log(x11 || x12);

//data type, 只要是var, 数据的类型是可以动态转换的, undedined也是一种type, 也是一个值
var length, name, person, dogs;
length = 170;
name = "kenSong";
person = {name: "ken", length: 175};
dogs = ["dogA", "dogB", "dogC"];
console.log(typeof person);
console.log(typeof dogs); //array也是一种object
typeof "John"; // Returns "string"
typeof 3.14; // Returns "number"
typeof true; // Returns "boolean"
typeof x; // Returns "undefined" (if x has no value)

//ES6:
/*
可以使用let定义{}中间的量
可以使用constructor定义{}中间的不变量
可以使用(x,y)=>{x+y} 箭头方程
可以使用class
可以使用缺省变量在方程中
有 array.find 和 array.findIndex
新的integer method
新的global method: isFinite, isNaN
*/
