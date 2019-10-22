var arr1 = [5, 3, 7, 2, 1, 8, 6];
var arr2 = ["bob", "apple", "dog", "cat"];

console.log(arr1.sort());
console.log(arr2.sort());
console.log(arr2.length);
console.log(arr2[arr2.length - 1]);

arr2.push("zoo");
arr2.push("zzoo"); //加到最后
console.log(arr2);
arr2.pop(); //把最后一个去掉
console.log(arr2);
arr2.shift(); //去掉第一个,后面的都往前面移一个
console.log(arr2);
arr2.unshift("apple_new"); //在前面加一个, 返回新的长度
console.log(arr2);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi", "haha"); //从哪个位置开始 替换几个 用什么
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi"); //用两个东西替换掉从二号位置开始的两个
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // Removes the first element of fruits
console.log(fruits); //用没有东西替换掉从第一个开始的一个

//对array也可以用slice取subarray
//sort可以正向sort, reverse可以倒过来, 自定义sort function可以做出乱序重排序

//forEach()可以定义一个方程使用每一个元素
//map()可以定义一个方程更改每一个元素
//filter()可以定义一个方程过滤一些元素
//reduce(total,value, index, array)可以定义一个方程体现出整个array 的性质
//every()可以通过方程检查是不是所有元素都符合某个性质
//some()可以检查是不是存在某一些性质
//find()
//findIndex()

//const 使用的时候不再需要叠加var, 声明了const的变量
//不能被reassign, 但是可以被改变

var points = new Array(40, 100); // Creates an array with two elements (40 and 100)
var points = new Array(40); // Creates an array with 40 undefined elements !!!!!
