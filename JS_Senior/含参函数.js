//函数调用中，可以传递值，这些值被称为参数
//注意：参数在传递时，其顺序必须一致
//意义：通过传递参数的个数及参数的类型不同来完成不同的功能
function demo(a,b) {
    var sum = a + b;
    alert(sum);
}
//函数中有参数，调用时需要传参
demo(10,20);

function Demo(name,age) {
    alert("Hello:"+name+",My age is:"+age);
}
Demo('Ellen',20);