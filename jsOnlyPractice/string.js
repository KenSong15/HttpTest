var Letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/*
substring:
    slice(a,b):从a开始到b位置结束, 可以用负数倒过来选, 忽略b的话会一直到结束 
    substring():不能用负数
    substr():

replacing:
    可以把某一段特定的用别的替换掉.

toUpperCase():变到大写
toLowerCase():变到小写

concat(stra, strb):把原来的跟给定的两个连接起来

trim(): 把两端的空格都去掉

charAt(): 返回给定位置上的char
charCodeAt(): 返回给定位置上的char的ascii位置

split(): 根据给定的部分split, 无变量时按字符划分
*/
console.log(Letter.length);
console.log(Letter.indexOf("C"));
