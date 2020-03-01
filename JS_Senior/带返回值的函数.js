// 返回值：
// 将函数的值返回个调用他的地方
// 通过return语句可以实现
// P.s.: 在使用return语句时，函数会停止执行，同时返回值
function demo() {
    return "Hello";
}
var vl = demo()+"Ellen";
var v2 = demo()+"Amy";
alert(vl);
alert(v2);

function Demo(a,b) {
    if (a > b) {
        return alert("a比较大");
    } else {
        return alert("b比较大");
    }
}
var v1l = Demo(20,10);
document.getElementById("pid").innerHTML=Demo(100,20);