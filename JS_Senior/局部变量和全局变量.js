//局部变量和全局变量

var n = 10;  //全局变量：声明在方法之外
function demo() {
    var i = 10;  //局部变量：智能在function中使用

    //必须调用函数后才为全局变量
    x = 10;  //全局变量：声明在function之内，任何地方都可以使用
}
alert(i);  //不能使用
//输出全局变量
alert(n);
//必须先调用函数
demo();
alert(x);